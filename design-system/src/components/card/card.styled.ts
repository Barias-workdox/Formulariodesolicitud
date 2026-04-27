import { TruncatedText } from '@components/truncated-text';
import { themedStyled } from '@themes/utilities';

export type CardStyledProps = {
  $disabled?: boolean;
};

export const StyledCardWrapper = themedStyled<'div', { $disabled: boolean }>(
  'div',
  ({ $theme, $disabled }) => ({
    backgroundColor: $theme.colors.bgBase,
    padding: `${$theme.spacing.spacingMd}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: $theme.spacing.spacingMd,
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    transition: 'box-shadow 0.2s ease-in-out',

    ':hover': {
      boxShadow: !$disabled ? '0px 2px 28px 0px rgba(0, 0, 0, 0.08)' : 'none',
    },
  }),
);

export const StyledCardHeaderWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingMd,
  alignItems: 'center',
}));

export const StyledCardFooterWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
  alignItems: 'start',
}));

export const StyledTruncatedText = themedStyled(TruncatedText, () => ({ flex: 1 }));
