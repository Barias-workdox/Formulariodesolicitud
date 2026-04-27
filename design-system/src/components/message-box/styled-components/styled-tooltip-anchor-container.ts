import { themedStyled } from '@themes/utilities';

export const StyledTooltipAnchorContainer = themedStyled('div', () => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));
