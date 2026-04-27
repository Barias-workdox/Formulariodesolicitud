import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { DeleteQuestionAction } from '@components/webdox-ai/interfaces';

/**
 * Reducer function to remove a question from the conversation
 */
export const deleteQuestion: AssistantReducerFn<DeleteQuestionAction> = ({ state, action }) => {
  const { conversation: { questions = [] } = {} } = state;
  const { questionIndex } = action.payload;

  if (questionIndex < 0) {
    return state;
  }

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: conversationUtils.deleteQuestionByIndex(questions, questionIndex),
    },
  };
};
