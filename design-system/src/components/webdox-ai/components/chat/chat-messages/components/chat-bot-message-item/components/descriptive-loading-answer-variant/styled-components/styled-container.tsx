import { themedStyled } from '@themes/utilities';

import { DESCRIPTIVE_LOADING_HEIGHT_PX } from '../../../../../chat-messages.constants';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: DESCRIPTIVE_LOADING_HEIGHT_PX,
  overflow: 'hidden',
  gap: $theme.spacing.spacingXs,
}));
