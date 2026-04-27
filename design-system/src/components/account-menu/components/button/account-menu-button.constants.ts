import {
  COMMON_HEIGHT_24,
  COMMON_HEIGHT_32,
  COMMON_ICON_SIZE_16,
  COMMON_ICON_SIZE_24,
} from '@constants/common.constants';

export const SIZE_MAPPING = {
  small: COMMON_HEIGHT_24,
  large: COMMON_HEIGHT_32,
} as const;

export const ICON_SIZE_MAPPING = {
  small: COMMON_ICON_SIZE_16,
  large: COMMON_ICON_SIZE_24,
} as const;
