import { DesignSystemTheme } from '../../themes';
import { StyleObject } from 'styletron-standard';
type StyleOptions = {
    color: string;
    isValid: boolean;
};
export declare const styles: {
    containerStyles: StyleObject;
    colorPickerStyles: (theme: DesignSystemTheme, { color, isValid }: StyleOptions) => StyleObject;
};
export {};
