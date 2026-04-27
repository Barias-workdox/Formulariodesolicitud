import { COMMON_HEIGHT_24, COMMON_HEIGHT_32, COMMON_HEIGHT_44 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type {
  BackgroundIconKind,
  BackgroundIconSize,
  BackgroundIconShape,
} from '../../background-icon.interfaces';

/**
 * Props for the styled badge root component.
 */
export interface StyledBadgeRootProps {
  /** The visual appearance variant of the parent BackgroundIcon */
  $shape: BackgroundIconShape;
  /** The kind of the parent BackgroundIcon (affects badge color) */
  $kind: BackgroundIconKind;
  /** The size of the parent BackgroundIcon (affects badge size and position) */
  $size: BackgroundIconSize;
}

/**
 * Size configurations for the badge based on parent BackgroundIcon size.
 */
const BADGE_SIZE_STYLES: Record<
  BackgroundIconShape,
  Record<BackgroundIconSize, { width: string; height: string; right: string; top?: string }>
> = {
  round: {
    [COMMON_HEIGHT_24]: {
      width: '6px',
      height: '6px',
      right: '0px',
    },
    [COMMON_HEIGHT_32]: {
      width: '8px',
      height: '8px',
      right: '0px',
    },
    [COMMON_HEIGHT_44]: {
      width: '10px',
      height: '10px',
      right: '3px',
    },
  },
  square: {
    [COMMON_HEIGHT_24]: {
      width: '6px',
      height: '6px',
      right: '0px',
    },
    [COMMON_HEIGHT_32]: {
      width: '8px',
      height: '8px',
      right: '-2px',
      top: '-1px',
    },
    [COMMON_HEIGHT_44]: {
      width: '10px',
      height: '10px',
      right: '-3px',
      top: '-3px',
    },
  },
};

/**
 * Styled component for the badge root container.
 * Positioned absolutely at the top-right corner of the BackgroundIcon.
 */
export const StyledBadgeRoot = themedStyled<'div', StyledBadgeRootProps>(
  'div',
  ({ $kind, $size, $shape, $theme }) => {
    const backgroundColor = $kind === 'brand' ? $theme.colors.brand : $theme.colors.neutral;
    const sizeStyles = BADGE_SIZE_STYLES[$shape][$size];

    return {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      borderRadius: $theme.borders.borderCircle,
      boxSizing: 'border-box',
      padding: '0',
      top: '0px',
      ...sizeStyles,
    };
  },
);
