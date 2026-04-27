import { themedStyled } from '@themes/utilities';

import { MAX_CONTENT_HEIGHT, MAX_CONTENT_WIDTH } from '../custom-prompts-popover.constants';

export const StyledPopoverContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: MAX_CONTENT_WIDTH,
  maxHeight: MAX_CONTENT_HEIGHT,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
}));
