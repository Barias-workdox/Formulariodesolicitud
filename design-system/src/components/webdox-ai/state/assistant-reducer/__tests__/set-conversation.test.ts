import { setConversation } from '../set-conversation';

import {
  baseConversationStateId,
  getConversationBaseState,
} from './chat-conversation-state-tests.utils';

import type {
  ChatConversationState,
  SetConversationAction,
} from '@components/webdox-ai/interfaces';

describe('setConversation', () => {
  it('should add a custom first answer when the initialAnswer is true', () => {
    const initialState: ChatConversationState = getConversationBaseState();
    const action: SetConversationAction = {
      type: 'SET_CONVERSATION',
      payload: {
        conversation: {
          ...baseConversationStateId,
          title: 'Test title',
          questions: [],
        },
        initialAnswer: true,
      },
    };
    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        ...baseConversationStateId,
        title: 'Test title',
        questions: [
          {
            createdAt: expect.any(String),
            id: expect.any(String),
            variant: 'temp',
            value: '',
            isLoading: false,
            isWaiting: false,
            answers: [
              {
                createdAt: expect.any(String),
                id: expect.any(String),
                value: '',
                variant: 'firstAnswer',
              },
            ],
          },
        ],
      },
    });

    expect(setConversation({ state: initialState, action })).toEqual(expectedState);
  });

  it('should not add a custom first answer when the initialAnswer value is false', () => {
    const initialState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...baseConversationStateId,
            value: 'testing',
            variant: 'persist',
            answers: [],
          },
        ],
      },
    });
    const action: SetConversationAction = {
      type: 'SET_CONVERSATION',
      payload: {
        conversation: {
          ...baseConversationStateId,
          title: 'Test title',
          questions: [],
        },
        initialAnswer: false,
      },
    };

    expect(setConversation({ state: initialState, action })).toEqual({
      ...initialState,
      conversation: action.payload.conversation,
    });
  });
});
