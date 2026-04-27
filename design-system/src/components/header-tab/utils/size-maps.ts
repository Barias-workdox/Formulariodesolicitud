import {
  PADDING_MAP,
  PADDING_TOP_MAP,
  TAB_FONT_SIZE_MAP,
  TAB_PADDING_MAP,
} from '../constants/header-tabs.constants';

import type { HeaderTabsSize } from '../header-tabs.interfaces';
import type { SpacingKey } from '@tokens';
import type { Typography } from 'baseui/themes';

/**
 * Utility to get padding size from header size.
 */
export const getPaddingSize = (size: HeaderTabsSize = 'small'): SpacingKey => {
  return PADDING_MAP[size] ?? PADDING_MAP['small'];
};

/**
 * Utility to get top padding size from header size.
 */
export const getTopPaddingSize = (size: HeaderTabsSize = 'small'): SpacingKey => {
  return PADDING_TOP_MAP[size] ?? PADDING_TOP_MAP['small'];
};

/**
 * Utility to get tab padding size from header size.
 */
export const getTabPaddingSize = (size: HeaderTabsSize = 'small'): SpacingKey => {
  return TAB_PADDING_MAP[size] ?? TAB_PADDING_MAP['small'];
};

/**
 * Utility to get font size from header size.
 */
export const getFontSize = (size: HeaderTabsSize = 'small'): keyof Typography => {
  return TAB_FONT_SIZE_MAP[size] ?? TAB_FONT_SIZE_MAP['small'];
};
