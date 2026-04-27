import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { SuggestionsAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Add a suggestions answer in the state
 */
export const suggestionsAnswer: AssistantReducerFn<SuggestionsAnswerAction> = ({
  state,
  action,
}) => {
  const { conversation: { questions = [] } = {} } = state;
  const { question, answer } = action.payload;

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: [
        ...questions,
        {
          ...conversationUtils.createQuestion(question),
          answers: [conversationUtils.createAnswer({ variant: 'promptsSuggestions', ...answer })],
        },
      ],
    },
  };
};
