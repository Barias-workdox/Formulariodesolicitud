import { WEBDOX_AI_COLORS } from '@components/webdox-ai/constants';
import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledBrainIconContainer = themedStyled('div', () => ({
  display: 'flex',
  width: COMMON_HEIGHT_32,
  height: COMMON_HEIGHT_32,
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${WEBDOX_AI_COLORS.secondaryColor}, ${WEBDOX_AI_COLORS.primaryColor})`,
}));

export const StyledBusinessSummaryHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  marginBottom: $theme.spacing.spacingMd,
}));

export const StyledBusinessSummaryHeaderContent = themedStyled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const StyledBusinessSummaryHeaderTitle = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [$theme.mediaQuery.medium]: {
    flexDirection: 'row',
    gap: $theme.spacing.spacing2xs,
    alignItems: 'center',
  },
}));

export const StyledBusinessSummaryContainer = themedStyled('div', ({ $theme }) => ({
  padding: $theme.spacing.spacingMd,
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%',
  boxSizing: 'border-box',
}));

export const StyledBusinessSummaryContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  padding: `0 ${$theme.spacing.spacingXs}`,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderBottom: 0,
  borderTopLeftRadius: $theme.spacing.spacing2xs,
  borderTopRightRadius: $theme.spacing.spacing2xs,
}));

export const StyledBusinessSummaryFooterContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  padding: $theme.spacing.spacingXs,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderTop: 0,
  borderBottomLeftRadius: $theme.spacing.spacing2xs,
  borderBottomRightRadius: $theme.spacing.spacing2xs,
}));

export const StyledBusinessSummaryFooterContent = themedStyled('div', () => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
}));

export const StyledBusinessSummaryFooterButtonContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));
