import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../interfaces';
import { MessageListItemType } from '../../interfaces/chat-bot-component.interface';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export interface MessageListProps extends WithTestId, Pick<ChatBotChatMessageType, 'zIndex'> {
    items: MessageListItemType[];
    onClick(value: MessageListItemType): void;
}
/**
 * A Styled reusable list that receives the list items and triggers a click on
 * an item
 */
export declare const MessageList: ({ dataTestId, items, zIndex, onClick, }: MessageListProps) => ReactElement;
