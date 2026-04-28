import { Dispatch } from 'react';
import { ChatConversationAction, ChatConversationState } from '../../interfaces';
import { ChatConversationExamples } from '../interfaces';
export type UseFakeConversationReturnType = {
    conversationState: ChatConversationState;
    conversationDispatch: Dispatch<ChatConversationAction>;
    onCreateMessage(value: string): Promise<void>;
    setCustomConversation(conversationExampleType?: ChatConversationExamples | 'reset'): void;
};
/**
 * Hook used to handle a fake conversation in the storybook by a chat bot conversation
 * controller
 */
export declare const useFakeConversation: () => UseFakeConversationReturnType;
