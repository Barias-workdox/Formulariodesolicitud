import { themedStyled } from '@themes/utilities';

import { SUMMARY_CARD_LOADING_STATE_MAX_HEIGHT } from '../../../data-extraction/components/data-extraction-beta/data-extraction-beta.constants';

export const StyledRoot = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: $theme.spacing.spacingXs,
  minHeight: SUMMARY_CARD_LOADING_STATE_MAX_HEIGHT,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
}));
