import { ReactElement } from 'react';
import { MessageLayoutKindType, UserChatMessageType } from '../../../../../interfaces';
export interface UserMessageProps extends UserChatMessageType {
    layoutKind?: MessageLayoutKindType;
}
/**
 * Component that renders a user message
 */
export declare const UserMessage: ({ id, value, layoutKind, }: UserMessageProps) => ReactElement;
