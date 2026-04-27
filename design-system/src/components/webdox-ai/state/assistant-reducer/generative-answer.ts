import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { ChatBotAnswerTypeV2, GenerativeAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Update an "on process" answer
 */
export const generativeAnswer: AssistantReducerFn<GenerativeAnswerAction> = ({ state, action }) => {
  const { conversation: { questions } = {} } = state;

  const foundQuestionIndex = conversationUtils.findWaitingQuestionIndex(questions);

  if (foundQuestionIndex < 0) {
    return state;
  }

  const foundQuestion = questions[foundQuestionIndex];
  const [oldGenerativeAnswer] = foundQuestion.answers;
  const updatedGenerativeAnswer: ChatBotAnswerTypeV2 = {
    ...(oldGenerativeAnswer === undefined
      ? conversationUtils.createAnswer({ variant: 'generative' })
      : {
          ...oldGenerativeAnswer,
          ...action.payload,
        }),
  };

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: conversationUtils.getUpdatedQuestions(questions, foundQuestionIndex, {
        ...foundQuestion,
        answers: [updatedGenerativeAnswer],
      }),
    },
  };
};
