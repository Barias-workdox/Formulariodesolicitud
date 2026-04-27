import { themedStyled } from '@themes/utilities';

export const StyledConversationSelectorWrapper = themedStyled('div', () => ({
  flex: 1,

  ':has(*) :first-child': {
    width: '100%',
  },
}));
