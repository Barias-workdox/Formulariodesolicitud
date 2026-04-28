import { SharedProps, Size } from '../../input/next';
import { DesignSystemTheme, StyleOverrideProps } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Gets style properties by input size */
export declare const getSizeProperties: (size: Size, theme: DesignSystemTheme) => StyleObject;
/** Textarea input override styles */
export declare const textareaInputStyles: ({ $theme, $size, $kind, $resize, }: StyleOverrideProps<SharedProps>) => StyleObject;
