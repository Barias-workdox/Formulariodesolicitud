import { suggestionsAnswer } from '../suggestions-answer';

import { getConversationBaseState } from './chat-conversation-state-tests.utils';

import type {
  ChatConversationState,
  SuggestionsAnswerAction,
} from '@components/webdox-ai/interfaces';

describe('suggestionsAnswer', () => {
  const initialState: ChatConversationState = getConversationBaseState({
    conversation: {
      questions: [],
    },
  });

  it('should add a new question with the correct answer to the state conversation questions array', () => {
    const action: SuggestionsAnswerAction = {
      type: 'SUGGESTIONS_ANSWER',
      payload: {
        question: {
          value: '',
          variant: 'temp',
        },
        answer: {
          tempProps: {
            options: [{ value: 'testing' }],
          },
        },
      },
    };

    const result = suggestionsAnswer({ state: initialState, action });

    expect(result).toEqual({
      ...initialState,
      conversation: {
        ...initialState.conversation,
        questions: [
          {
            id: expect.any(String),
            createdAt: expect.any(String),
            variant: 'temp',
            value: '',
            isLoading: false,
            isWaiting: false,
            answers: [
              {
                createdAt: expect.any(String),
                id: expect.any(String),
                variant: 'promptsSuggestions',
                value: '',
                tempProps: {
                  options: [{ value: 'testing' }],
                },
              },
            ],
          },
        ],
      },
    });
  });
});
