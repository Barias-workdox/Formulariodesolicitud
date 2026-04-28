import { WithTestId } from '../../interfaces/common.interfaces';
type ScheduleOptions = {
    value: string;
    name: string;
};
type HourSelectionProps = WithTestId<{
    /**
     * Indicates the index of the time hourly interval to be selected, starting from 00:00 - 01:00 (0 index) to 23:00 - 00:00 (23 index).
     * Min: 0, max: 23
     */
    value: number[];
    /** Callback by parent indicating the clicked interval index (from 0 to 23) */
    updateLaboralSchedule(index: number): void;
}>;
/**
 * This function creates the options available for the working hours of the configuration.
 *
 * @example - \{ value: '0', name: '00:00 - 01:00' \}
 */
export declare const laboralScheduleOptions: () => ScheduleOptions[];
/**
 * This renders the component HourSelection that handles the laboral hours for the customer in the configuration.
 * The component has a fixed list as a matrix of time intervals of 60 minutes, from 00:00 to 00:00 (24 hours).
 */
export declare const HourPicker: ({ dataTestId, value, updateLaboralSchedule, }: HourSelectionProps) => JSX.Element;
export {};
