import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { SetConversationAction } from '@components/webdox-ai/interfaces';

/**
 * When the conversation is empty we can add a custom first answer to the user
 * with brain information
 */
export const setConversation: AssistantReducerFn<SetConversationAction> = ({ state, action }) => {
  const { conversation } = state;
  const {
    conversation: { questions, ...restPayload },
    initialAnswer = false,
  } = action.payload;

  const firstQuestions = [
    conversationUtils.createQuestion({
      variant: 'temp',
      answers: [conversationUtils.createAnswer({ variant: 'firstAnswer' })],
    }),
  ];

  const validatedQuestions = initialAnswer ? [...firstQuestions, ...questions] : questions;

  return {
    ...state,
    conversation: {
      ...conversation,
      ...restPayload,
      questions: validatedQuestions,
    },
  };
};
