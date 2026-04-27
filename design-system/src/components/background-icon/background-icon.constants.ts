import {
  COMMON_HEIGHT_20,
  COMMON_HEIGHT_24,
  COMMON_HEIGHT_32,
  COMMON_HEIGHT_36,
  COMMON_HEIGHT_44,
  COMMON_HEIGHT_56,
  COMMON_HEIGHT_64,
  COMMON_ICON_SIZE_16,
  COMMON_ICON_SIZE_20,
} from '@constants/common.constants';

import type { BackgroundIconProps } from './background-icon.interfaces';
import type { CommonHeight, CommonIconSize } from '@constants/common.constants';

export const BACKGROUND_ICON_WRAPPER_CLASS = 'background-icon__wrapper';

export const SIZE_MAP: Record<
  NonNullable<BackgroundIconProps['size']>,
  { backgroundSize: CommonHeight; iconSize: CommonIconSize }
> = {
  [COMMON_HEIGHT_20]: {
    backgroundSize: COMMON_HEIGHT_20,
    iconSize: '12px',
  },
  [COMMON_HEIGHT_24]: {
    backgroundSize: COMMON_HEIGHT_24,
    iconSize: COMMON_ICON_SIZE_16,
  },
  [COMMON_HEIGHT_32]: {
    backgroundSize: COMMON_HEIGHT_32,
    iconSize: COMMON_ICON_SIZE_16,
  },
  [COMMON_HEIGHT_36]: {
    backgroundSize: COMMON_HEIGHT_36,
    iconSize: '16px',
  },
  [COMMON_HEIGHT_44]: {
    backgroundSize: COMMON_HEIGHT_44,
    iconSize: COMMON_ICON_SIZE_20,
  },
  [COMMON_HEIGHT_56]: {
    backgroundSize: COMMON_HEIGHT_56,
    iconSize: '20px',
  },
  [COMMON_HEIGHT_64]: {
    backgroundSize: COMMON_HEIGHT_64,
    iconSize: '24px',
  },
};
