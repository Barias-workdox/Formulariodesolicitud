import type { Size } from '@components/input/next';
import type { SelectProps } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export const COMMON_HEIGHTS = ['20px', '24px', '32px', '36px', '44px', '56px', '64px'] as const;

export type CommonHeight = (typeof COMMON_HEIGHTS)[number];

export const COMMON_HEIGHT_20 = '20px' satisfies CommonHeight;

export const COMMON_HEIGHT_24 = '24px' satisfies CommonHeight;

export const COMMON_HEIGHT_32 = '32px' satisfies CommonHeight;

export const COMMON_HEIGHT_36 = '36px' satisfies CommonHeight;

export const COMMON_HEIGHT_44 = '44px' satisfies CommonHeight;

export const COMMON_HEIGHT_56 = '56px' satisfies CommonHeight;

export const COMMON_HEIGHT_64 = '64px' satisfies CommonHeight;

export const DEPRECATED_HEIGHT_MAP: Partial<Record<CommonHeight, SelectProps['size']>> = {
  [COMMON_HEIGHT_32]: 'compact',
  [COMMON_HEIGHT_44]: 'default',
};

export const COMMON_HEIGHT_MAP: Partial<Record<CommonHeight, StyleObject['height']>> = {
  [COMMON_HEIGHT_32]: COMMON_HEIGHT_32,
  [COMMON_HEIGHT_44]: COMMON_HEIGHT_44,
};

export const COMMON_ICON_SIZE = [
  '12px',
  '16px',
  '20px',
  '24px',
  '32px',
  '36px',
  '44px',
  '56px',
  '64px',
] as const;

export type CommonIconSize = (typeof COMMON_ICON_SIZE)[number];

export const COMMON_ICON_SIZE_12 = '12px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_16 = '16px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_20 = '20px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_24 = '24px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_32 = '32px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_36 = '36px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_44 = '44px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_56 = '56px' satisfies CommonIconSize;

export const COMMON_ICON_SIZE_64 = '64px' satisfies CommonIconSize;

export const COMMON_FONT_SIZES = ['10px', '12px', '14px', '16px', '18px', '20px', '24px'] as const;

export type CommonFontSize = (typeof COMMON_FONT_SIZES)[number];

export const COMMON_FONT_SIZE_10 = '10px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_12 = '12px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_14 = '14px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_16 = '16px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_18 = '18px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_20 = '20px' satisfies CommonFontSize;

export const COMMON_FONT_SIZE_24 = '24px' satisfies CommonFontSize;

export const COMMON_TRANSITION_DURATION = '200ms';

export const COMMON_TRANSITION_TIMING_FUNCTION = 'linear';

export const FLAG_EMOJI_RANGE_START = 127397;

export const COMMON_FLOATING_MAX_WIDTH = '300px';

export const COMMON_FLOATING_MAX_HEIGHT = '300px';

export const COMMON_POPOVER_MENU_LIST_WIDTH = '240px';

export const BASE_INPUT_HEIGHTS = {
  sm: '30px', // Total height is 32px, 2px are added with outline
  md: '42px', // Total height is 44px, 2px are added with outline
} as const satisfies Record<Size, StyleObject['height']>;
