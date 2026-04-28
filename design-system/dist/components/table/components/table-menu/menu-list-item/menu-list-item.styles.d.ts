import { DesignSystemTheme } from '../../../../../themes';
import { ListOverrides } from 'baseui/list';
import { StyleObject } from 'styletron-react';
/**
 * Returns the overrides for the ListItem component in the table menu.
 */
export declare const listItemOverrides: (theme: DesignSystemTheme, disabled: boolean) => ListOverrides;
/**
 * Returns the style object for the caption (label) of a menu list item.
 */
export declare const listItemCaptionStyles: (theme: DesignSystemTheme, disabled: boolean) => StyleObject;
