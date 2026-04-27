import { deleteQuestion } from '../delete-question';

import {
  baseConversationStateId,
  getConversationBaseState,
} from './chat-conversation-state-tests.utils';

import type { ChatConversationState, DeleteQuestionAction } from '@components/webdox-ai';

describe('deleteQuestion', () => {
  const initialState: ChatConversationState = getConversationBaseState({
    conversation: {
      questions: [
        {
          ...baseConversationStateId,
          id: '5',
          variant: 'persist',
          answers: [],
          value: '',
        },
      ],
    },
  });

  it('should return the same state if the question index is invalid', () => {
    const action: DeleteQuestionAction = {
      type: 'DELETE_QUESTION',
      payload: {
        questionIndex: -1,
      },
    };

    const result = deleteQuestion({ state: initialState, action });

    expect(result).toEqual(initialState);
  });

  it('should return the same state if no question is found', () => {
    const action: DeleteQuestionAction = {
      type: 'DELETE_QUESTION',
      payload: {
        questionIndex: 5,
      },
    };

    const result = deleteQuestion({ state: initialState, action });

    expect(result).toEqual(initialState);
  });

  it('should remove the question', () => {
    const action: DeleteQuestionAction = {
      type: 'DELETE_QUESTION',
      payload: {
        questionIndex: 0,
      },
    };

    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [],
      },
    });

    const result = deleteQuestion({ state: initialState, action });

    expect(result).toEqual(expectedState);
  });
});
