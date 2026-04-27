import { systemAnswer } from '../system-answer';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type { SystemAnswerAction } from '@components/webdox-ai/interfaces';

describe('systemAnswer', () => {
  it('should add a system answer to the conversation state', () => {
    const initialState = getConversationBaseState({
      conversation: {
        questions: [],
      },
    });
    const action: SystemAnswerAction = {
      type: 'SYSTEM_ANSWER',
      payload: {
        value: 'This is a system answer',
      },
    };
    const expectedState = getConversationBaseState({
      conversation: {
        questions: [
          {
            createdAt: expect.any(String),
            id: expect.any(String),
            isLoading: false,
            isWaiting: false,
            value: '',
            variant: 'temp',
            answers: [
              {
                createdAt: expect.any(String),
                id: expect.any(String),
                value: action.payload.value,
                variant: 'systemAnswer',
              },
            ],
          },
        ],
      },
    });

    expect(systemAnswer({ state: initialState, action })).toEqual(expectedState);
  });
});
