import 'intersection-observer';

import type * as ReactVirtual from '@tanstack/react-virtual';

export const CLIENT_RECT_HEIGHT_MOCK = 120;

export const CLIENT_RECT_WIDTH_MOCK = 120;

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    value: CLIENT_RECT_HEIGHT_MOCK,
  });
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    value: CLIENT_RECT_WIDTH_MOCK,
  });
});

vi.mock('@tanstack/react-virtual', async () => {
  const originalModule = await vi.importActual<typeof ReactVirtual>('@tanstack/react-virtual');

  const mockMeasureElement = vi.fn().mockReturnValue(undefined);

  return {
    ...originalModule,
    useVirtualizer: vi.fn((options) => {
      const originalVirtualizer = originalModule.useVirtualizer(options);
      const count = options.count || 0;
      const estimateSizeFn = options.estimateSize || (() => 40);
      const overscan = options.overscan || 1;
      const itemSize = typeof estimateSizeFn === 'function' ? estimateSizeFn() : estimateSizeFn;

      // Calculate how many items fit in the visible container
      const visibleItemsCount = Math.floor(CLIENT_RECT_HEIGHT_MOCK / itemSize);
      // Return visible items plus overscan, but cap at total count
      // If total count is small (less than visible + overscan), return all items
      const maxVisible = visibleItemsCount + overscan;
      const virtualItemsCount = count <= maxVisible ? count : Math.min(count, maxVisible);

      // In tests, return visible items plus overscan as virtual items
      const virtualItems = Array.from({ length: virtualItemsCount }, (_, index) => ({
        key: index,
        index,
        start: index * itemSize,
        end: (index + 1) * itemSize,
        size: itemSize,
        lane: 0,
      }));

      const mockVirtualizer = {
        ...originalVirtualizer,
        measureElement: mockMeasureElement,
        getVirtualItems: () => virtualItems,
        getTotalSize: () => count * itemSize,
      };

      return mockVirtualizer;
    }),
  };
});
