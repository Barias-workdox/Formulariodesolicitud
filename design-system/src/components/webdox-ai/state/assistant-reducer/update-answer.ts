import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { UpdateAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Update a specific answer by id
 */
export const updateAnswer: AssistantReducerFn<UpdateAnswerAction> = ({ state, action }) => {
  const { conversation: { questions = [] } = {} } = state;
  const { id, ...restAnswerValues } = action.payload;

  const questionIndex = conversationUtils.findQuestionIndexByAnswerId(questions, id);
  if (questionIndex < 0) {
    return state;
  }
  const foundQuestion = questions[questionIndex];

  const answerIndex = conversationUtils.findAnswerIndexByAnswerId(foundQuestion.answers, id);
  if (answerIndex < 0) {
    return state;
  }
  const updatedAnswers = conversationUtils.getUpdatedAnswers(
    foundQuestion.answers,
    answerIndex,
    restAnswerValues,
  );

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: conversationUtils.getUpdatedQuestions(questions, questionIndex, {
        ...foundQuestion,
        answers: updatedAnswers,
      }),
    },
  };
};
