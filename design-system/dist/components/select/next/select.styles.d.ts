import { Size } from '../../input/next';
import { DesignSystemTheme, StyleOverrideProps } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Gets style properties by input size */
export declare const getSizeProperties: (size: Size, theme: DesignSystemTheme) => {
    dropdownListItem: StyleObject;
    valueContainer: StyleObject;
    tagRoot: StyleObject;
    input: StyleObject;
};
export declare const dropdownStyles: StyleObject;
/** Dropdown list item style overrides */
export declare const dropdownListItemStyles: ({ $isHighlighted, $theme, $size, }: StyleOverrideProps) => StyleObject;
/**
 * Style override for the option content.
 */
export declare const optionContentStyle: ({ $theme, $isHighlighted, }: StyleOverrideProps) => StyleObject;
/**
 * Style overrides for the select single value (the selected option)
 */
export declare const singleValueStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
/** Control container style overrides */
export declare const controlContainerStyles: ({ $disabled }: StyleOverrideProps) => StyleObject;
/** Value container style overrides */
export declare const valueContainerStyles: ({ $theme, $disabled, $size, $multi, }: StyleOverrideProps) => StyleObject;
/** Tag root styles overrides */
export declare const tagRootStyles: ({ $theme, $disabled, $size }: StyleOverrideProps) => StyleObject;
/** Popover body style overrides */
export declare const popoverBodyStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
/** Input text style overrides */
export declare const inputStyles: ({ $theme, $size }: StyleOverrideProps) => StyleObject;
export declare const placeholderStyles: StyleObject;
export declare const styles: {
    creatableOptionStyles: StyleObject;
    creatableIconStyles: StyleObject;
};
