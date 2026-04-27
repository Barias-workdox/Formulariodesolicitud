import { themedStyled } from '@themes/utilities';
import { FILE_ICON_FONT } from '@tokens/typography';

import type { FileTypeIconSize } from './file-type-icon.interfaces';
import type { StyleObject } from 'styletron-react';

export interface StyleOptions {
  primaryColor?: string;
  secondaryColor?: string;
  size?: FileTypeIconSize;
}

export const styles = {
  iconStyles: (_: unknown, { primaryColor, secondaryColor }: StyleOptions): StyleObject => ({
    height: '100%',
    width: '100%',
    ':has(*) .background': {
      fill: primaryColor,
    },
    ':has(*) .corner': {
      fill: secondaryColor,
    },
  }),
};

/** Styled file icon container */
export const StyledContainer = themedStyled<
  'div',
  { $style?: StyleObject; $size: number; $isDisabled?: boolean }
>('div', ({ $size, $isDisabled }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  height: `${$size}px`,
  opacity: $isDisabled ? 0.2 : 1,
  /**
   * It's calculated to maintain the base aspect ratio of 20px width and 24px height.
   */
  width: `${(5 / 6) * $size}px`,
}));

export const StyledFileTypeText = themedStyled<'span', StyleOptions>(
  'span',
  ({ $theme, size }) => ({
    ...FILE_ICON_FONT,
    position: 'absolute',
    marginTop: $theme.spacing.spacing2xs,
    transform: 'scaleY(0.9)',
    /**
     * It's calculated based on 30% of the size of the icon,
     * allowing the font size to scale with the icon size.
     */
    fontSize: `${(size ?? 24) * 0.3}px`,
    fontWeight: '700',
    color: $theme.colors.iconBase,
  }),
);
