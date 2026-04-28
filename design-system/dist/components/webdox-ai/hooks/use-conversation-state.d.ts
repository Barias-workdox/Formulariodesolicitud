import { Dispatch } from 'react';
import { ChatConversationAction, ChatConversationState } from '../interfaces/chat-bot-conversation-state.interface';
export type UseConversationStateReturnType = {
    state: ChatConversationState;
    dispatch: Dispatch<ChatConversationAction>;
};
/**
 * Hook to manage the chat conversation state with dispatchers including every
 * possible flow with each of the answer variants
 */
export declare const useConversationState: () => UseConversationStateReturnType;
