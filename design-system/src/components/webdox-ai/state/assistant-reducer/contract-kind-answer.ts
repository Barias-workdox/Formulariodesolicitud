import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

import type { AssistantReducerFn } from './reducer.interface';
import type { ContractKindAnswerAction } from '@components/webdox-ai/interfaces';

/**
 * Add a contract kind answer in the state
 */
export const contractKindAnswer: AssistantReducerFn<ContractKindAnswerAction> = ({
  state,
  action,
}) => {
  const { conversation: { questions = [] } = {} } = state;

  return {
    ...state,
    conversation: {
      ...state.conversation,
      questions: [
        ...questions,
        {
          // Add a temp question and answer with the contract kind
          ...conversationUtils.createQuestion({ variant: 'temp' }),
          answers: [
            conversationUtils.createAnswer({
              variant: 'contractKind',
              ...action.payload,
            }),
          ],
        },
      ],
    },
  };
};
