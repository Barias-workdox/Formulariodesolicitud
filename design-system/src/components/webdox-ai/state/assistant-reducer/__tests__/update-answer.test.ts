import { updateAnswer } from '../update-answer';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type { ChatConversationState, UpdateAnswerAction } from '@components/webdox-ai/interfaces';

const initialState: ChatConversationState = getConversationBaseState({
  conversation: {
    questions: [
      {
        id: 'question1',
        createdAt: '',
        variant: 'persist',
        value: 'old content',
        answers: [
          {
            id: 'answer1',
            value: 'old content',
            variant: 'contractKind',
            createdAt: '',
          },
        ],
      },
    ],
  },
});

describe('updateAnswer', () => {
  it('should update an answer by id', () => {
    const action: UpdateAnswerAction = {
      type: 'UPDATE_ANSWER',
      payload: {
        id: 'answer1',
        value: 'new content',
      },
    };
    const expectedState: ChatConversationState = getConversationBaseState({
      conversation: {
        questions: [
          {
            id: 'question1',
            createdAt: '',
            variant: 'persist',
            value: 'old content',
            answers: [
              {
                id: 'answer1',
                value: 'new content',
                variant: 'contractKind',
                createdAt: '',
              },
            ],
          },
        ],
      },
    });

    expect(updateAnswer({ state: initialState, action })).toEqual(expectedState);
  });

  it('should return the same state if the answer is not found', () => {
    const action: UpdateAnswerAction = {
      type: 'UPDATE_ANSWER',
      payload: {
        id: 'answer2',
        value: 'new content',
      },
    };

    expect(updateAnswer({ state: initialState, action })).toEqual(initialState);
  });
});
