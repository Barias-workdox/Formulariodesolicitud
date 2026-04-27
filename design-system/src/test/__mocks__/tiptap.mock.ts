/**
 * Mock the TipTap DOM methods
 */
beforeAll(() => {
  Range.prototype.getClientRects = vi.fn(() => ({
    item: () => null,
    length: 0,
    *[Symbol.iterator]() {},
  })) as unknown as Range['getClientRects'];

  Range.prototype.getBoundingClientRect = vi.fn(() => ({
    x: 0,
    y: 0,
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    toJSON: () => {},
  })) as unknown as Range['getBoundingClientRect'];

  document.elementFromPoint = vi.fn(() => null);
});
