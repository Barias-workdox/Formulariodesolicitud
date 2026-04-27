import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import type { CreateQuestionAction } from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

/**
 * Add a new question in the state
 */
export const createQuestion: LegalWhisperReducerFn<CreateQuestionAction> = ({
  state,
  action: {
    payload: { value },
  },
}) => {
  const { conversation } = state;
  const { questions = [] } = conversation || {};

  if (!conversation) {
    return state;
  }

  return {
    ...state,
    conversation: {
      ...conversation,
      questions: [
        ...questions,
        conversationUtils.createQuestion({
          value,
          variant: 'persist',
          isWaiting: true,
        }),
      ],
    },
  };
};
