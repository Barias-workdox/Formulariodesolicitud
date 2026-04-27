import { themedStyled } from '@themes/utilities';

/**
 * Constant for the information placeholder (it simulates the design of an iconButton)
 */
const INFO_PLACEHOLDER_SIZE = '24px';

export const StyledDataExtractionListItemContainer = themedStyled('div', ({ $theme }) => ({
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderRadius: $theme.spacing.spacing2xs,
  padding: `${$theme.spacing.spacingXs}`,
}));

export const StyledDataExtractionListContent = themedStyled('section', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${$theme.spacing.spacing2xs}`,
}));

export const StyledDataExtractionListContentRow = themedStyled('section', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: `${$theme.spacing.spacing2xs}`,
}));

export const StyledDataExtractionListContentLabel = themedStyled('section', () => ({
  margin: 0,
}));

export const StyledDataExtractionListContentValue = themedStyled('section', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
}));

export const StyledInformationPlaceholder = themedStyled<'div', { $isDisabled: boolean }>(
  'div',
  ({ $theme, $isDisabled }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${$theme.colors.neutralSubtle}`,
    color: `${$theme.colors.neutralSubdued}`,
    borderRadius: `${$theme.borders.borderSm}`,
    width: `${INFO_PLACEHOLDER_SIZE}`,
    height: `${INFO_PLACEHOLDER_SIZE}`,
    ...($isDisabled && {
      color: $theme.colors.neutralDepressed,
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.neutralSubtle,
    }),
  }),
);
