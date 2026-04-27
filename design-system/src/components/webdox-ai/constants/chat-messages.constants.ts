import type { ReactElement } from 'react';

import { ChatBotMessageItem, UserMessage } from '../components/chat/chat-messages/components';

import type {
  ChatBotMessageItemProps,
  UserMessageProps,
} from '../components/chat/chat-messages/components';
import type { ChatMessageTypeV2 } from '../interfaces';

/**
 * Maps the chat message kind to the corresponding component.
 */
export const CHAT_MESSAGES_KIND_MAP: Record<
  ChatMessageTypeV2['kind'],
  { Component(props: UserMessageProps | ChatBotMessageItemProps): ReactElement }
> = {
  question: {
    Component: UserMessage,
  },
  answer: {
    Component: ChatBotMessageItem,
  },
} as const;
