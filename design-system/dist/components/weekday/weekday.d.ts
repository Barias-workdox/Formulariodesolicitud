import { WithTestId } from '../../interfaces/common.interfaces';
import { ButtonGroupProps } from 'baseui/button-group';
type DaySelectionProps = WithTestId & {
    /** Indexes selected in the array of weekdays, from 0 to 6 */
    value: number[];
    /** Overrides for the ButtonGroup and Button components */
    overrides?: {
        ButtonGroup?: ButtonGroupProps['overrides'];
    };
    /** Callback that executes with the weekday index (0 to 6) clicked */
    updateNoLaboralDays(index: number): void;
};
/**
 * Renders a i18n day selection in a row, adding special styles to the selected values in the `value` property
 */
export declare const Weekday: ({ dataTestId, value, updateNoLaboralDays, }: DaySelectionProps) => JSX.Element;
export {};
