import {
  COMMON_HEIGHT_32,
  COMMON_ICON_SIZE_16,
  COMMON_HEIGHT_44,
  COMMON_ICON_SIZE_20,
} from '@constants/common.constants';
import { typographies } from '@themes';

import type { ButtonSize } from './button.interfaces';

/** Size-specific configuration for button dimensions and typography */
export const SIZE_CONFIG: Record<
  ButtonSize,
  {
    height: string;
    padding: 'spacingXs' | 'spacingMd';
    fontSize: string;
  }
> = {
  '32px': {
    height: '32px',
    padding: 'spacingXs',
    fontSize: typographies.bodySmall.fontSize ?? '',
  },
  '44px': {
    height: '44px',
    padding: 'spacingMd',
    fontSize: typographies.body.fontSize ?? '',
  },
};

/** CSS properties that transition on state changes */
export const TRANSITION_PROPERTIES = [
  'background-color',
  'border-color',
  'color',
  'box-shadow',
  'outline-color',
] as const;

/** Responsive size mapping */
export const RESPONSIVE_SIZE_MAP: Record<ButtonSize, ButtonSize> = {
  '32px': '32px',
  '44px': '32px',
};

export const ENHANCER_SIZE = {
  [COMMON_HEIGHT_32]: COMMON_ICON_SIZE_16,
  [COMMON_HEIGHT_44]: COMMON_ICON_SIZE_20,
} as const;
