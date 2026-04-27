import { themedStyled } from '@themes/utilities';

/**
 * A styled wrapper component for the end enhancer of the page header.
 */
export const PageHeaderEndEnhancerWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'right',
  gap: $theme.spacing.spacingXs,

  [$theme.mediaQuery.small]: {
    gap: $theme.spacing.spacingMd,
  },
}));
