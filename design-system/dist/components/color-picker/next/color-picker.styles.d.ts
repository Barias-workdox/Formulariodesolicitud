import { Size } from '../../input/next';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-standard';
type StyleOptions = {
    color: string;
    isValid: boolean;
    size: Size;
};
/** Gets style properties by input size */
export declare const getSizeProperties: (size: Size) => {
    picker: StyleObject;
};
export declare const styles: {
    containerStyles: StyleObject;
    colorPickerStyles: (theme: DesignSystemTheme, { color, isValid, size }: StyleOptions) => StyleObject;
};
export {};
