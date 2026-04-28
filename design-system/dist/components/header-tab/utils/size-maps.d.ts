import { HeaderTabsSize } from '../header-tabs.interfaces';
import { SpacingKey } from '../../../themes/v3/tokens';
import { Typography } from 'baseui/themes';
/**
 * Utility to get padding size from header size.
 */
export declare const getPaddingSize: (size?: HeaderTabsSize) => SpacingKey;
/**
 * Utility to get top padding size from header size.
 */
export declare const getTopPaddingSize: (size?: HeaderTabsSize) => SpacingKey;
/**
 * Utility to get tab padding size from header size.
 */
export declare const getTabPaddingSize: (size?: HeaderTabsSize) => SpacingKey;
/**
 * Utility to get font size from header size.
 */
export declare const getFontSize: (size?: HeaderTabsSize) => keyof Typography;
