import { useFormContext } from '../../hooks';

import { SelectWithPaginationControl } from './select-with-pagination-control';

import type { SelectWithPaginationControlProps } from './select-with-pagination-control';

export type SelectWithPaginationControlContainerProps = Omit<
  SelectWithPaginationControlProps,
  'control'
>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const SelectWithPaginationControlContainer = (
  props: SelectWithPaginationControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <SelectWithPaginationControl
      {...methods}
      {...props}
    />
  );
};
