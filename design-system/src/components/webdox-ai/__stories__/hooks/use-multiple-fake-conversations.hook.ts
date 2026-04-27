import { useFakeConversation } from './use-fake-conversation.hook';
import { useLegalWhisperFakeConversation } from './use-legal-whisper-fake-conversation.hook';

import type { UseFakeConversationReturnType } from './use-fake-conversation.hook';
import type { useLegalWhisperFakeConversationReturnType } from './use-legal-whisper-fake-conversation.hook';

type UseFakeConversationsReturnType = {
  brainCompanion: UseFakeConversationReturnType;
  legalWhisper: useLegalWhisperFakeConversationReturnType;
};

/**
 * Helper to support multiple fake conversations
 */
export const useMultipleFakeConversations = (): UseFakeConversationsReturnType => {
  return {
    brainCompanion: useFakeConversation(),
    legalWhisper: useLegalWhisperFakeConversation(),
  };
};
