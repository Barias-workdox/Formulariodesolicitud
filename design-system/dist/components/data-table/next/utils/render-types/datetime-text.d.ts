import { ReactElement } from 'react';
type DatetimeAsTextProps = {
    value: string;
};
/**
 * This component receives a date string as a prop and displays it
 * as a formatted text using the locale-specific datetime formatting (Jan 1, 2021 12:00 AM).
 */
export declare const DatetimeAsText: ({ value }: DatetimeAsTextProps) => ReactElement;
export {};
