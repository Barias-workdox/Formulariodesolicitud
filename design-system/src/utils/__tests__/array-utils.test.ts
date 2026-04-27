import { sortAlphabetically } from '../array.utils';

interface Item {
  id: string;
  label: string;
  quantity: number; // won't be valid for 'key' as it's a number
}

describe('sortAlphabetically', () => {
  const unsortedItems: Item[] = [
    { id: '3', label: 'Cherry', quantity: 20 },
    { id: '1', label: 'Banana', quantity: 50 },
    { id: '2', label: 'Apple', quantity: 10 },
  ];

  it('should sort by "label" in ascending order by default', () => {
    const items = [...unsortedItems];

    items.sort(sortAlphabetically('label'));
    expect(items.map((i) => i.label)).toEqual(['Apple', 'Banana', 'Cherry']);
  });

  it('should sort by "label" in descending order', () => {
    const items = [...unsortedItems];

    items.sort(sortAlphabetically('label', 'desc'));
    expect(items.map((i) => i.label)).toEqual(['Cherry', 'Banana', 'Apple']);
  });

  it('should sort by "id" in ascending order', () => {
    const items = [...unsortedItems];

    items.sort(sortAlphabetically('id'));
    expect(items.map((i) => i.id)).toEqual(['1', '2', '3']);
  });

  it('should sort by "id" in descending order', () => {
    const items = [...unsortedItems];

    items.sort(sortAlphabetically('id', 'desc'));
    expect(items.map((i) => i.id)).toEqual(['3', '2', '1']);
  });

  it('should not change order for invalid string checks (if typed incorrectly)', () => {
    // This test is just to confirm that if we forcibly pass a non-string property,
    // the function's runtime safety check will return 0 and keep original order.
    // However, note that in *strict* TypeScript usage, you'll get a compile-time error
    // if you try to do `sortAlphabetically('quantity')`.
    const items = [...unsortedItems];

    // Force-casting to bypass TS error:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items.sort(sortAlphabetically('quantity' as any));
    expect(items).toEqual(unsortedItems);
  });
});
