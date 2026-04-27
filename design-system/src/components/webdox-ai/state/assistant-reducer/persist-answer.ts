import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { PersistAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Once we have the answer to a question ready, we can persist it.
 * and move away from the waiting state, it going to look the last waiting question to be updated
 */
export const persistAnswer: AssistantReducerFn<PersistAnswerAction> = ({
  state,
  action: { payload },
}) => {
  const { conversation: { questions = [] } = {} } = state;

  const foundQuestionIndex = conversationUtils.findWaitingQuestionIndex(questions);

  if (foundQuestionIndex < 0) {
    return state;
  }

  return {
    ...state,
    conversation: {
      ...state.conversation,
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
