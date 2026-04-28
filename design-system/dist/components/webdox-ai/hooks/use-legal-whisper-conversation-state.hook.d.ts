import { Dispatch } from 'react';
import { LegalWhisperConversationState, ConversationAction } from '../interfaces/legal-whisper-conversation-state.interfaces';
export type UseLegalWhisperConversationStateReturnType = {
    state: LegalWhisperConversationState;
    dispatch: Dispatch<ConversationAction>;
};
/**
 * Hook to manage the legal whisper conversation state with dispatchers.
 */
export declare const useLegalWhisperConversationState: () => UseLegalWhisperConversationStateReturnType;
