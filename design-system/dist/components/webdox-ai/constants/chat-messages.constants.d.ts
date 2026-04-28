import { ReactElement } from 'react';
import { ChatBotMessageItemProps, UserMessageProps } from '../components/chat/chat-messages/components';
import { ChatMessageTypeV2 } from '../interfaces';
/**
 * Maps the chat message kind to the corresponding component.
 */
export declare const CHAT_MESSAGES_KIND_MAP: Record<ChatMessageTypeV2['kind'], {
    Component(props: UserMessageProps | ChatBotMessageItemProps): ReactElement;
}>;
