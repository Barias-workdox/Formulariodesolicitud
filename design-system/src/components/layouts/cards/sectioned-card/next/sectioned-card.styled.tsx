import { themedStyled } from '@themes/utilities';

import type { BorderKey, SpacingKey } from '@tokens';

export interface SectionedCardWrapperProps {
  $hasElevation?: boolean;
  $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}

export const SectionedCardWrapper = themedStyled<'div', SectionedCardWrapperProps>(
  'div',
  ({ $theme, $hasElevation, $borderRadius = 'borderNone' }) => ({
    boxShadow: $hasElevation
      ? '0 4px 8px -2px rgba(26, 26, 26, 0.1), 0 8px 16px -4px rgba(26, 26, 26, 0.08)'
      : 'none',
    display: 'flex',
    borderRadius: $theme.borders[$borderRadius],
    flexDirection: 'column',
  }),
);

export interface BodyWrapperProps {
  $paddingSpacing: SpacingKey;
  $hasBorderTop?: boolean;
  $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}

/**
 * Get border styles string based on color
 */
const getBorderStyles = (color: string): string => `1px solid ${color}`;

export const BodyWrapper = themedStyled<'div', BodyWrapperProps>(
  'div',
  ({ $theme, $paddingSpacing, $hasBorderTop, $borderRadius = 'borderNone' }) => ({
    padding: $theme.spacing[$paddingSpacing],
    borderTop: $hasBorderTop ? getBorderStyles($theme.colors.neutralSubtle) : 'none',
    borderLeft: getBorderStyles($theme.colors.neutralSubtle),
    borderRight: getBorderStyles($theme.colors.neutralSubtle),
    borderBottom: getBorderStyles($theme.colors.neutralSubtle),
    borderRadius: `0 0 ${$theme.borders[$borderRadius]} ${$theme.borders[$borderRadius]}`,
    flexGrow: 1,
  }),
);

export const FooterWrapper = themedStyled('div', ({ $theme }) => ({
  marginTop: 'auto',
  borderLeft: getBorderStyles($theme.colors.neutralSubtle),
  borderRight: getBorderStyles($theme.colors.neutralSubtle),
  borderBottom: getBorderStyles($theme.colors.neutralSubtle),
}));
