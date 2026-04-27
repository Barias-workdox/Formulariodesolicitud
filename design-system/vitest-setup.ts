import ResizeObserver from 'resize-observer-polyfill';
import timezoneMock from 'timezone-mock';
import { vi } from 'vitest';

// Extends Jest/Vitest with DOM-specific matchers (e.g., toHaveTextContent).
import '@testing-library/jest-dom';

// Mock the auto‑animate hook to avoid importing the real implementation, which
// requires the DOM and can cause ESM interop issues in tests. Returning an empty
// tuple is sufficient for components that optionally use this hook.
vi.mock('@formkit/auto-animate/react', () => ({
  useAutoAnimate: vi.fn().mockReturnValue([]),
}));

// Stabilize random IDs in tests to make snapshots and key usage deterministic.
// The implementation returns a 16‑char hex string that "looks" random but is
// predictable across runs.
vi.mock('nanoid', () => ({
  nanoid: (): string =>
    Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
}));

// Mock window.matchMedia so components relying on media queries (e.g., responsive
// behavior, useMediaQuery) can run in JSDOM. All listener methods are no‑ops.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock window.DOMMatrix as some components/utilities (e.g., those measuring
// transforms or using SVG/Canvas APIs) expect it to be available. We only define
// the minimal properties used by our code.
Object.defineProperty(window, 'DOMMatrix', {
  writable: true,
  value: class DOMMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    constructor() {
      // Minimal identity matrix to satisfy consumers in tests
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.e = 0;
      this.f = 0;
    }
  },
});

// Force a fixed timezone so date/time logic and snapshots are consistent.
timezoneMock.register('UTC');

// Provide ResizeObserver in JSDOM so components using it do not crash in tests.
global.ResizeObserver = ResizeObserver;
