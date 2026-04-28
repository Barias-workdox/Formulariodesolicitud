import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../interfaces';
export type ChatBotMessageItemProps = ChatBotChatMessageType;
/** Styled chat message for the chat bot interaction. Some of them are front-only with special answers */
export declare const ChatBotMessageItem: ({ ...props }: ChatBotMessageItemProps) => ReactElement;
