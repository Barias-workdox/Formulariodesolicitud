import {
  ACTION_BUTTON_SIZE_MAP,
  FILE_ICON_SIZE_MAP,
  GAP_MAP,
  ICON_SIZE_MAP,
  PADDING_MAP,
  TEXT_VARIANT_MAP,
  TITLE_WEIGHT_MAP,
} from '../constants/header.constants';

import type { HeaderSize } from '../header.interfaces';
import type { BackgroundIconSize } from '@components/background-icon/next';
import type { SizeType } from '@components/button';
import type { TextVariant } from '@components/text';
import type { SpacingKey } from '@tokens';

/**
 * Utility to get gap size from header size.
 */
export const getMapSize = (size: HeaderSize = 'small'): SpacingKey => {
  return GAP_MAP[size] ?? GAP_MAP['small'];
};

/**
 * Utility to get padding size from header size.
 */
export const getPaddingSize = (size: HeaderSize = 'small'): SpacingKey => {
  return PADDING_MAP[size] ?? PADDING_MAP['small'];
};

/**
 * Utility to get action button size from header size.
 */
export const getActionButtonSize = (size: HeaderSize = 'small'): SizeType => {
  return ACTION_BUTTON_SIZE_MAP[size] ?? ACTION_BUTTON_SIZE_MAP['small'];
};

/**
 * Utility to get text size from header size.
 */
export const getTextVariant = (size: HeaderSize = 'small'): TextVariant => {
  return TEXT_VARIANT_MAP[size] ?? TEXT_VARIANT_MAP['small'];
};

/**
 *  Utility to get title weight from header size.
 */
export const getTitleWeight = (size: HeaderSize = 'small'): string => {
  return TITLE_WEIGHT_MAP[size] ?? TITLE_WEIGHT_MAP['small'];
};

/**
 * Utility to get icon size from header size.
 */
export const getIconSize = (size: HeaderSize = 'small'): BackgroundIconSize => {
  return ICON_SIZE_MAP[size] ?? ICON_SIZE_MAP['small'];
};

/**
 * Utility to get file icon size from header size.
 */
export const getFileIconSize = (size: HeaderSize = 'small'): number => {
  return FILE_ICON_SIZE_MAP[size] ?? FILE_ICON_SIZE_MAP['small'];
};
