import { MAX_EXPANDED_CHAT_WIDTH } from '@components/webdox-ai/constants/webdox-ai.constants';
import { themedStyled } from '@themes/utilities';

export const StyledChatContainer = themedStyled<'div', { $isExpanded: boolean }>(
  'div',
  ({ $isExpanded, $theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    ...($isExpanded && {
      maxWidth: MAX_EXPANDED_CHAT_WIDTH,
      paddingBottom: $theme.spacing.spacingMd,
    }),
  }),
);
