import { stopAnswerGeneration } from '../stop-answer-generation';

import {
  baseConversationStateId,
  getConversationBaseState,
} from './chat-conversation-state-tests.utils';

import type { ChatConversationState } from '@components/webdox-ai';

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

const stateWithWaitingAnswer: ChatConversationState = getConversationBaseState({
  conversation: {
    questions: [
      ...initialState.conversation.questions,
      {
        ...baseConversationStateId,
        id: '6',
        variant: 'temp',
        answers: [],
        value: '',
        isWaiting: true,
      },
    ],
  },
});

describe('stopAnswerGeneration', () => {
  it('should return the same state if no "isWaiting" question is found with a true value', () => {
    const result = stopAnswerGeneration({
      state: initialState,
      action: {
        type: 'STOP_ANSWER_GENERATION',
      },
    });

    expect(result).toEqual(initialState);
  });

  it('should update the state by removing the question where "isWaiting" is true', () => {
    const result = stopAnswerGeneration({
      state: stateWithWaitingAnswer,
      action: {
        type: 'STOP_ANSWER_GENERATION',
      },
    });

    expect(result).toEqual(initialState);
  });
});
