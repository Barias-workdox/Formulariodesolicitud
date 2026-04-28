import { SharedProps } from '../message-box.interfaces';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Get the outline width for the Root component
 */
export declare const getOutlineWidth: ({ $isFocused, $disabled, }: Partial<SharedProps>) => StyleObject["outlineWidth"];
/**
 * Get the outline color for the Root component
 */
export declare const getOutlineColor: ({ $isFocused, $isHovered, $theme, }: Partial<SharedProps> & {
    $theme: DesignSystemTheme;
}) => string;
export declare const StyledMessageBoxContainer: import('styletron-react').StyletronComponent<"div", SharedProps>;
