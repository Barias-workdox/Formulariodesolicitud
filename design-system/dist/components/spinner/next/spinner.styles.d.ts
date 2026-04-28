import { SpinnerKind, SpinnerSize, SpinnerConfig, SpinnerColors } from './spinner.interface';
import { TextVariant } from '../../text/text.interface';
import { DesignSystemColorType } from '../../../themes';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Parameters for creating spinner styles */
interface StyleParams {
    theme: DesignSystemTheme;
    config: SpinnerConfig;
    colors: SpinnerColors;
    isRelative: boolean;
    opacity: number;
    backgroundColor: DesignSystemColorType;
}
/** Get size configuration utility */
export declare const getSizeConfig: (size: SpinnerSize, customSize?: number) => SpinnerConfig;
/** Get colors based on kind */
export declare const getSpinnerColors: (kind: SpinnerKind, theme: DesignSystemTheme, customColor?: string) => SpinnerColors;
/** Get text variant based on spinner size to ensure consistency with design system */
export declare const getTextVariantFromSize: (size: SpinnerSize) => TextVariant;
/** Creates spinner styles based on configuration */
export declare const createSpinnerStyles: ({ theme, config, isRelative, opacity, backgroundColor, }: StyleParams & {
    size: SpinnerSize;
}) => Record<string, StyleObject>;
export type SpinnerStyles = ReturnType<typeof createSpinnerStyles>;
export {};
