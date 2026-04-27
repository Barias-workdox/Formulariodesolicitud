import { themedStyled } from '@themes/index';

import type { TextProps } from '@components/text';

export const StyledUl = themedStyled('ul', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  gap: $theme.spacing.spacing2xs,
  margin: 0,
  padding: $theme.spacing.spacingXs,
}));

export const StyledLi = themedStyled('li', ({ $theme }) => ({
  color: $theme.colors.neutralSubdued,
  ':focus': {
    color: $theme.colors.brand,
  },
}));

export const truncateTextProps = {
  color: 'neutralSubdued',
  margin: 0,
  variant: 'small-paragraph',
  fontWeight: 'bold',
} satisfies Omit<TextProps, 'children'>;

export const truncateTooltipProps = {
  showArrow: true,
  ignoreBoundary: true,
};
