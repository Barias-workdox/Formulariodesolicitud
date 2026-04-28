import { DesignSystemTheme } from '../../../../themes';
import { StyleObject } from 'styletron-react';
type StyleOptions = {
    $theme: DesignSystemTheme;
    labelWithHorizontalPadding?: boolean;
    isCharacterLabel?: boolean;
    hasMargin?: boolean;
};
/** Form control label styles */
export declare const labelFontStyle: ({ $theme, labelWithHorizontalPadding, isCharacterLabel, hasMargin, }: StyleOptions) => StyleObject;
export declare const styles: {
    customLabelContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    infoTooltipWrapperStyles: StyleObject;
    labelTextContainerStyles: (theme: DesignSystemTheme) => StyleObject;
};
export {};
