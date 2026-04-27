import { themedStyled } from '@themes/index';

import { POPOVER_CONTENT_WIDTH } from '../country-and-area-selector-with-popover.constants';

export const StyledPopoverContent = themedStyled('div', () => ({
  width: POPOVER_CONTENT_WIDTH,
  maxWidth: POPOVER_CONTENT_WIDTH,
  display: 'flex',
  flexDirection: 'column',
}));
