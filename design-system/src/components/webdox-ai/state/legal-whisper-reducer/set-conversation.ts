import type { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import type { SetConversationAction } from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

/**
 * When the conversation is empty we can add a custom first answer to the user
 * with brain information
 */
export const setConversation: LegalWhisperReducerFn<SetConversationAction> = ({
  state,
  action,
}) => {
  const { conversation } = state;
  const {
    conversation: { questions, ...restPayload },
  } = action.payload;

  return {
    ...state,
    conversation: {
      ...conversation,
      ...restPayload,
      questions,
    },
  };
};
