import { useFormContext } from '../../hooks';

import { DatePickerControl } from './datepicker-control';

import type { DatePickerControlProps } from './datepicker-control';

export type DatePickerControlContainerProps = Omit<DatePickerControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const DatePickerControlContainer = (props: DatePickerControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <DatePickerControl
      {...methods}
      {...props}
    />
  );
};
