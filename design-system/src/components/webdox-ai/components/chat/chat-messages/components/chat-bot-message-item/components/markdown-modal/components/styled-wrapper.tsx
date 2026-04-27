import { MAX_CHAT_MESSAGE_TABLE_HEIGHT } from '@components/webdox-ai/constants/webdox-ai.constants';
import { themedStyled } from '@themes/utilities';

/** A styled div to wrap a table within brain companion assistant. */
export const StyledMarkdownWrapper = themedStyled('div', ({ $theme }) => ({
  overflow: 'auto',
  maxHeight: MAX_CHAT_MESSAGE_TABLE_HEIGHT,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
}));

/** A styled div to wrap a table within brain companion assistant. */
export const StyledMarkdownWrapperViewer = themedStyled<'div', { $isFullWidth?: boolean }>(
  'div',
  ({ $theme, $isFullWidth }) => ({
    overflow: 'auto',
    backgroundColor: $theme.colors.neutralWashed,
    flex: 1,
    maxWidth: $isFullWidth ? '' : '600px',
    maxHeight: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: `1px solid ${$theme.colors.neutralSubtle}`,
  }),
);
