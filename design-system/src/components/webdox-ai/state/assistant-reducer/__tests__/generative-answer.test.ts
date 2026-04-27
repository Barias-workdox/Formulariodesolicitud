import { generativeAnswer } from '../generative-answer';

import {
  baseConversationStateId,
  getConversationBaseState,
} from './chat-conversation-state-tests.utils';

import type { ChatConversationState, GenerativeAnswerAction } from '@components/webdox-ai';

describe('generativeAnswer', () => {
  const state: ChatConversationState = getConversationBaseState({
    conversation: {
      questions: [
        {
          answers: [
            { variant: 'generative', value: '', ...baseConversationStateId },
            { variant: 'generative', value: '', ...baseConversationStateId },
          ],
          isWaiting: true,
          ...baseConversationStateId,
          value: 'What is the capital of France?',
          variant: 'temp',
        },
      ],
    },
  });

  const action: GenerativeAnswerAction = {
    type: 'GENERATIVE_ANSWER',
    payload: {
      value: 'Hello, world!',
    },
  };

  it('should update the first "on process" answer', () => {
    const result = generativeAnswer({ state, action });

    expect(result.conversation.questions[0].answers[0]).toEqual({
      variant: 'generative',
      value: 'Hello, world!',
      createdAt: expect.any(String),
      id: expect.any(String),
    });
  });

  it('should not update the second question', () => {
    const result = generativeAnswer({ state, action });

    expect(result.conversation.questions[1]).toEqual(state.conversation.questions[1]);
  });

  it('should return the original state if no "on process" question is found', () => {
    const stateWithNoWaitingQuestion = getConversationBaseState({
      conversation: {
        questions: [
          {
            answers: [{ variant: 'generative', value: '', ...baseConversationStateId }],
            isWaiting: false,
            ...baseConversationStateId,
            value: 'What is the capital of France?',
            variant: 'temp',
          },
        ],
      },
    });
    const result = generativeAnswer({ state: stateWithNoWaitingQuestion, action });

    expect(result).toEqual(stateWithNoWaitingQuestion);
  });
});
