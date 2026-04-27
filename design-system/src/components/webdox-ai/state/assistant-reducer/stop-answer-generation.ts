import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { StopAnswerGenerationAction } from '@components/webdox-ai/interfaces';

/**
 * Reducer function to stop the answer generation process.
 *
 * This function modifies the state by locating the index of the question that
 * is waiting for an answer and removes it from the conversation. If no waiting
 * question is found, it returns the current state without modifications.
 */
export const stopAnswerGeneration: AssistantReducerFn<StopAnswerGenerationAction> = ({ state }) => {
  const { conversation: { questions = [] } = {} } = state;

  const foundQuestionIndex = conversationUtils.findWaitingQuestionIndex(questions);

  if (foundQuestionIndex < 0) {
    return state;
  }

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: conversationUtils.deleteQuestionByIndex(questions, foundQuestionIndex),
    },
  };
};
