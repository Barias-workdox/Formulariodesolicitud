import { WEBDOX_AI_COLORS } from '@components/webdox-ai/constants/webdox-ai-colors.constants';
import { themedStyled } from '@themes/utilities';

export const StyledIconContainer = themedStyled('div', () => ({
  display: 'flex',
  width: '24px',
  height: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${WEBDOX_AI_COLORS.secondaryColor}, ${WEBDOX_AI_COLORS.tertiaryColor})`,
}));

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
}));

export const StyledStrongText = themedStyled('span', () => ({
  fontWeight: 500,
  textDecoration: 'underline',
}));
