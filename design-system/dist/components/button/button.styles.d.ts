import { ButtonProps, KindType, SizeType } from './button.interfaces';
import { StyleOverrideProps } from '../../themes/theme.interfaces';
import { ButtonOverrides } from 'baseui/button';
import { StyleObject } from 'styletron-react';
export declare const fontSizeMap: Partial<Record<SizeType, StyleObject['fontSize']>>;
export declare const heightMap: Partial<Record<SizeType, StyleObject['height']>>;
/**
 * Retrieves a color map for buttons based on their kind, incorporating default and focus/active styles.
 * Includes definitions for standardized and non-standardized design variants.
 */
export declare const getColorsMap: ({ $theme }: StyleOverrideProps) => Record<KindType, StyleObject>;
/**
 * Retrieves a border map for buttons based on their kind.
 */
export declare const getBorderMap: ({ $theme, }: StyleOverrideProps) => Partial<Record<KindType, StyleObject>>;
/**
 * Retrieves disabled state styles for buttons.
 */
export declare const getDisabledColors: ({ $theme }: StyleOverrideProps) => StyleObject;
/**
 * Computes the override styles for buttons based on their properties.
 */
export declare const getOverrides: ({ "data-testid": dataTestId, paddingLeft, paddingRight, fullWidth, responsive, }: ButtonProps) => ButtonOverrides;
