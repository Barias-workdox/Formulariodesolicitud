import { ReactElement } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
import { DatepickerProps } from 'baseui/datepicker';
type CalendarProps = WithTestId & Pick<DatepickerProps, 'value' | 'range' | 'minDate' | 'maxDate' | 'onChange'> & {
    withBorder?: boolean;
};
/**
 * Renders a calendar component with quick-select buttons for today, last 7 days, and last month.
 * Users can also clear the selection or submit their choice.
 */
export declare const Calendar: ({ dataTestId, value, range, minDate, maxDate, withBorder, onChange, }: CalendarProps) => ReactElement;
export {};
