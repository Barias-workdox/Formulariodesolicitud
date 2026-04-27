import type { ReactElement } from 'react';

import DOMPurify from 'dompurify';

import { Text } from '@components/text';
import { CHAT_QUESTION_MAX_WIDTH } from '@components/webdox-ai/constants/webdox-ai.constants';

import { ChatMessageLayout } from '../chat-message-layout';

import { StyledAlignmentContainer } from './styled-components/styled-alignment-container';

import type { MessageLayoutKindType, UserChatMessageType } from '@components/webdox-ai/interfaces';

export interface UserMessageProps extends UserChatMessageType {
  layoutKind?: MessageLayoutKindType;
}

/**
 * Component that renders a user message
 */
export const UserMessage = ({
  id,
  value = '',
  layoutKind = 'secondary',
}: UserMessageProps): ReactElement => {
  return (
    <StyledAlignmentContainer>
      <ChatMessageLayout
        key={`user-${id}`}
        kind={layoutKind}
        maxWidth={CHAT_QUESTION_MAX_WIDTH}
      >
        <Text
          variant="bodySmall"
          margin={0}
          color="powerStrong"
          $style={{
            wordBreak: 'break-word',
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(value),
            }}
          />
        </Text>
      </ChatMessageLayout>
    </StyledAlignmentContainer>
  );
};
