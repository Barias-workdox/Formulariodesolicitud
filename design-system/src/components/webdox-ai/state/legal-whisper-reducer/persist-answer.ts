import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { LegalWhisperReducerFn } from './legal-whisper-reducer.interfaces';
import type { PersistAnswerAction } from '@components/webdox-ai/interfaces/legal-whisper-conversation-state.interfaces';

/**
 * Once we have the answer to a question ready, we can persist it.
 * and move away from the waiting state, it going to look the last waiting question to be updated
 */
export const persistAnswer: LegalWhisperReducerFn<PersistAnswerAction> = ({
  state,
  action: { payload },
}) => {
  const { conversation } = state;
  const { questions = [] } = conversation || {};

  if (!conversation) {
    return state;
  }

  const foundQuestionIndex = conversationUtils.findWaitingQuestionIndex(questions);

  if (foundQuestionIndex < 0) {
    return state;
  }

  return {
    ...state,
    conversation: {
      ...conversation,
      questions: conversationUtils.getUpdatedQuestions(questions, foundQuestionIndex, {
        ...questions[foundQuestionIndex],
        isWaiting: false,
        answers: [
          {
            ...payload,
            variant: payload.variant || 'persist',
          },
        ],
      }),
    },
  };
};
