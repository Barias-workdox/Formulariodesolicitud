import { ForwardedRef, MutableRefObject } from 'react';
import { DatepickerProps } from './datepicker';
import { EnhancerType } from '../../input/next';
import { WithTestId, WithZIndex } from '../../../interfaces/common.interfaces';
import { Datepicker, DatepickerOverrides } from 'baseui/datepicker';
import { StyleObject } from 'styletron-react';
type GetOverridesParams = WithZIndex & WithTestId & {
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    name?: string;
    isLoading?: boolean;
    kind?: DatepickerProps['kind'];
    leading?: EnhancerType;
    readOnly?: boolean;
    ref?: ForwardedRef<Datepicker>;
    showCopyContentButton?: boolean;
    size?: DatepickerProps['size'];
    width?: StyleObject['width'];
};
/**
 * Returns the overrides for the Datepicker component.
 */
export declare const getDatepickerOverrides: ({ dataTestId, inputRef, name, isLoading, kind, leading, readOnly, ref, showCopyContentButton, size, width, zIndex, }?: GetOverridesParams) => DatepickerOverrides;
export {};
