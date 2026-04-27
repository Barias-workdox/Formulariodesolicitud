import { createQuestion } from '../create-question';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type { ChatConversationState, CreateQuestionAction } from '@components/webdox-ai';

describe('createQuestion', () => {
  it('should add a new question to the conversation state', () => {
    const initialState: ChatConversationState = getConversationBaseState();
    const action: CreateQuestionAction = {
      type: 'CREATE_QUESTION',
      payload: {
        value: 'What is the capital of France?',
      },
    };
    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...action.payload,
            variant: 'persist',
            isWaiting: true,
            isLoading: false,
            id: expect.any(String),
            createdAt: expect.any(String),
            answers: [],
          },
        ],
      },
    });

    expect(createQuestion({ state: initialState, action })).toEqual(expectedState);
  });
});
