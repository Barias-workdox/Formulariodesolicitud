import { persistAnswer } from '../persist-answer';

import {
  baseConversationStateId,
  getConversationBaseState,
} from './chat-conversation-state-tests.utils';

import type { ChatConversationState, PersistAnswerAction } from '@components/webdox-ai';

describe('persistAnswer', () => {
  const initialState: ChatConversationState = getConversationBaseState({
    conversation: {
      questions: [
        {
          ...baseConversationStateId,
          id: '5',
          variant: 'temp',
          answers: [],
          value: '',
        },
      ],
    },
  });

  it('should return the same state if no question is found', () => {
    const action: PersistAnswerAction = {
      type: 'PERSIST_ANSWER',
      payload: {
        ...baseConversationStateId,
        id: '6',
        value: 'Test answer',
        variant: 'persist',
      },
    };

    const result = persistAnswer({ state: initialState, action });

    expect(result).toEqual(initialState);
  });

  it('should update the state with the persisted answer', () => {
    const action: PersistAnswerAction = {
      type: 'PERSIST_ANSWER',
      payload: {
        ...baseConversationStateId,
        id: 'newID',
        value: 'Test answer',
        variant: 'persist',
      },
    };

    const state: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...baseConversationStateId,
            value: 'question',
            variant: 'persist',
            isWaiting: true,
            answers: [
              {
                ...baseConversationStateId,
                value: 'Test answer',
                variant: 'persist',
              },
            ],
          },
        ],
      },
    });

    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...baseConversationStateId,
            value: 'question',
            variant: 'persist',
            // this value should change
            isWaiting: false,
            answers: [
              {
                ...baseConversationStateId,
                id: 'newID',
                value: 'Test answer',
                variant: 'persist',
              },
            ],
          },
        ],
      },
    });

    const result = persistAnswer({ state, action });

    expect(result).toEqual(expectedState);
  });

  it('should set default variant when it is null', () => {
    const action: PersistAnswerAction = {
      type: 'PERSIST_ANSWER',
      payload: {
        ...baseConversationStateId,
        id: 'newID',
        value: 'Test answer',
        variant: null,
      },
    };

    const state: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...baseConversationStateId,
            value: 'question',
            variant: 'persist',
            isWaiting: true,
            answers: [
              {
                ...baseConversationStateId,
                value: 'Test answer',
                variant: 'persist',
              },
            ],
          },
        ],
      },
    });

    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            ...baseConversationStateId,
            value: 'question',
            variant: 'persist',
            // this value should change
            isWaiting: false,
            answers: [
              {
                ...baseConversationStateId,
                id: 'newID',
                value: 'Test answer',
                variant: 'persist',
              },
            ],
          },
        ],
      },
    });

    const result = persistAnswer({ state, action });

    expect(result).toEqual(expectedState);
  });
});
