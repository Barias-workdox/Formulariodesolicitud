import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { CreateQuestionAction } from '@components/webdox-ai/interfaces';

/**
 * Add a new question in the state
 *
 * @example
 * ```
 * {
 *   conversation: {
 *     questions: [
 *       ...
 *       newQuestion
 *     ]
 *   }
 * }
 * ```
 */
export const createQuestion: AssistantReducerFn<CreateQuestionAction> = ({
  state,
  action: {
    payload: { value },
  },
}) => {
  const { conversation: { questions = [] } = {} } = state;

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: [
        ...questions,
        conversationUtils.createQuestion({ value, variant: 'persist', isWaiting: true }),
      ],
    },
  };
};
