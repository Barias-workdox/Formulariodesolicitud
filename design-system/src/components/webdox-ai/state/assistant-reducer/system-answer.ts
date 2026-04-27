import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { SystemAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Add a special system answer in the conversation state
 */
export const systemAnswer: AssistantReducerFn<SystemAnswerAction> = ({
  state,
  action: { payload },
}) => {
  const { conversation: { questions = [] } = {} } = state;

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: [
        ...questions,
        {
          ...conversationUtils.createQuestion({ variant: 'temp', isWaiting: false }),
          answers: [conversationUtils.createAnswer({ variant: 'systemAnswer', ...payload })],
        },
      ],
    },
  };
};
