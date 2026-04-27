import type { Option } from 'baseui/select';

/**
 * Generate a list of options for the select component.
 */
export const getOptions = (quantity: number): Option[] =>
  Array.from(
    { length: quantity },
    (_, index): Option => ({
      id: index,
      label: `value ${index}`,
    }),
  );
