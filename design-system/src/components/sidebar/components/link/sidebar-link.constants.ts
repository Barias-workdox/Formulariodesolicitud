import {
  COMMON_HEIGHT_24,
  COMMON_HEIGHT_32,
  COMMON_ICON_SIZE_16,
  COMMON_ICON_SIZE_24,
} from '@constants/common.constants';

export const LINK_HEIGHT = 48;

export const LINK_PADDING = 16;

export const COMMON_FONT_WEIGHT_SEMIBOLD = 500;

export const TEXT_LINE_HEIGHT = '140%';

export const SIZE_MAPPING = {
  small: COMMON_HEIGHT_24,
  large: COMMON_HEIGHT_32,
} as const;

export const ICON_SIZE_MAPPING = {
  small: COMMON_ICON_SIZE_16,
  large: COMMON_ICON_SIZE_24,
} as const;
