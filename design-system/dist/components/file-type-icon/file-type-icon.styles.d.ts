import { FileTypeIconSize } from './file-type-icon.interfaces';
import { StyleObject } from 'styletron-react';
export interface StyleOptions {
    primaryColor?: string;
    secondaryColor?: string;
    size?: FileTypeIconSize;
}
export declare const styles: {
    iconStyles: (_: unknown, { primaryColor, secondaryColor }: StyleOptions) => StyleObject;
};
/** Styled file icon container */
export declare const StyledContainer: import('styletron-react').StyletronComponent<"div", {
    $style?: StyleObject;
    $size: number;
    $isDisabled?: boolean;
}>;
export declare const StyledFileTypeText: import('styletron-react').StyletronComponent<"span", StyleOptions>;
