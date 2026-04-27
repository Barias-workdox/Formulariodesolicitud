import { contractKindAnswer } from '../contract-kind-answer';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type {
  ChatConversationState,
  ContractKindAnswerAction,
} from '@components/webdox-ai/interfaces';

describe('contractKindAnswer', () => {
  const initialState: ChatConversationState = getConversationBaseState();

  const action: ContractKindAnswerAction = {
    type: 'CONTRACT_KIND_ANSWER',
    payload: {
      tempProps: {
        item: {
          label: 'contractKind1',
        },
      },
    },
  };

  it('should add a new question with a contract kind answer to the state', () => {
    const result = contractKindAnswer({ state: initialState, action });

    expect(result.conversation.questions).toHaveLength(1);
    expect(result.conversation.questions[0].answers).toHaveLength(1);
    expect(result.conversation.questions[0].answers[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        value: '',
        variant: 'contractKind',
        createdAt: expect.any(String),
        ...action.payload,
      }),
    );
  });

  it('should add a new question with a temp variant to the state', () => {
    const result = contractKindAnswer({ state: initialState, action });

    expect(result.conversation.questions).toHaveLength(1);
    expect(result.conversation.questions[0]).toEqual(
      expect.objectContaining({
        variant: 'temp',
      }),
    );
  });
});
