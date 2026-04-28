import { Dispatch } from 'react';
import { ConversationAction as LegalWhisperConversationAction, LegalWhisperConversationState } from '../../interfaces/legal-whisper-conversation-state.interfaces';
export type useLegalWhisperFakeConversationParamsType = {
    isPageRefEnabled: boolean;
};
export type useLegalWhisperFakeConversationReturnType = {
    conversationState: LegalWhisperConversationState;
    conversationDispatch: Dispatch<LegalWhisperConversationAction>;
    onCreateMessage(value: string): Promise<void>;
};
/**
 * Hook used to handle a fake conversation in the storybook by a chat bot conversation
 * controller
 */
export declare const useLegalWhisperFakeConversation: () => useLegalWhisperFakeConversationReturnType;
