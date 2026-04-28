import { UseFakeConversationReturnType } from './use-fake-conversation.hook';
import { useLegalWhisperFakeConversationReturnType } from './use-legal-whisper-fake-conversation.hook';
type UseFakeConversationsReturnType = {
    brainCompanion: UseFakeConversationReturnType;
    legalWhisper: useLegalWhisperFakeConversationReturnType;
};
/**
 * Helper to support multiple fake conversations
 */
export declare const useMultipleFakeConversations: () => UseFakeConversationsReturnType;
export {};
