import { Markdown } from '@components/markdown';
import { Notification } from '@components/notification/next';
import { StyledBaseParagraphText } from '@components/webdox-ai/components/styled-base-paragraph-text';

import { ChatMessageLayout } from '../../..';
import { styles } from '../../chat-box-message-item.styles';

import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';

export type ErrorVariantProps = Pick<ChatBotChatMessageType, 'value'>;

/**
 * Component to render an error message from the chat bot.
 */
export const ErrorVariant = ({ value = '' }: ErrorVariantProps): JSX.Element => {
  return (
    <ChatMessageLayout kind="primary">
      <Notification
        kind="warning"
        size="small"
        description={
          <StyledBaseParagraphText
            $style={styles.markdownStyles()}
            as="span"
          >
            <Markdown>{value}</Markdown>
          </StyledBaseParagraphText>
        }
      />
    </ChatMessageLayout>
  );
};
