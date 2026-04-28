import { Ref } from 'react';
import { Datepicker as BaseDatepicker, DatepickerProps as BaseDatePickerProps } from 'baseui/datepicker';
import { EnhancerType, InputKind, Size } from '../../input/next';
import { WithTestId, WithZIndex } from '../../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
export type DatepickerProps = WithTestId & WithZIndex & Omit<BaseDatePickerProps, 'size' | 'inputRef'> & {
    /** Passed to the underlying input name attribute */
    name?: string;
    /** Used to get a ref to the underlying input element */
    inputRef?: Ref<HTMLInputElement>;
    /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
    enableInputBlur?: boolean;
    isLoading?: boolean;
    kind?: InputKind;
    leading?: EnhancerType;
    readOnly?: boolean;
    showCopyContentButton?: boolean;
    size?: Size;
    /** Indicates the width of the input. By default is 100% */
    width?: StyleObject['width'];
};
/**
 * Datepicker component that allows users to select dates.
 * It supports single and range date selection, custom styling, and various input enhancements.
 */
export declare const Datepicker: import('react').ForwardRefExoticComponent<{
    'data-testid'?: string;
    dataTestId?: string;
} & {
    zIndex?: number;
} & Omit<BaseDatePickerProps, "size" | "inputRef"> & {
    /** Passed to the underlying input name attribute */
    name?: string;
    /** Used to get a ref to the underlying input element */
    inputRef?: Ref<HTMLInputElement>;
    /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
    enableInputBlur?: boolean;
    isLoading?: boolean;
    kind?: InputKind;
    leading?: EnhancerType;
    readOnly?: boolean;
    showCopyContentButton?: boolean;
    size?: Size;
    /** Indicates the width of the input. By default is 100% */
    width?: StyleObject["width"];
} & import('react').RefAttributes<BaseDatepicker<Date>>>;
