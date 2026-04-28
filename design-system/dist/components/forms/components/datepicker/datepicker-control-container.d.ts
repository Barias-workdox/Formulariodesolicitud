import { DatePickerControlProps } from './datepicker-control';
export type DatePickerControlContainerProps = Omit<DatePickerControlProps, 'control'>;
/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export declare const DatePickerControlContainer: (props: DatePickerControlContainerProps) => JSX.Element;
