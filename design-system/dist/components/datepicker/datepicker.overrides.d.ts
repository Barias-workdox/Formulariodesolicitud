import { ForwardedRef, MutableRefObject } from 'react';
import { DatepickerProps } from './datepicker';
import { Datepicker, DatepickerOverrides } from 'baseui/datepicker';
type GetOverridesParams = {
    ref: ForwardedRef<Datepicker>;
    inputRef: MutableRefObject<HTMLInputElement>;
    dataTestId: string;
    zIndex: number;
    $kind: DatepickerProps['kind'];
};
/**
 * Returns the overrides for the Datepicker component.
 */
export declare const getDatepickerOverrides: ({ ref, inputRef, dataTestId, zIndex, $kind, }: GetOverridesParams) => DatepickerOverrides;
export {};
