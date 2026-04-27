import { useReducer } from 'react';
import type { Dispatch } from 'react';

import { conversationConstants } from '../constants';
import { assistantReducer } from '../state';
import { conversationUtils } from '../utils/conversation.util';

import type {
  ChatConversationAction,
  ChatConversationState,
} from '../interfaces/chat-bot-conversation-state.interface';

export type UseConversationStateReturnType = {
  state: ChatConversationState;
  dispatch: Dispatch<ChatConversationAction>;
};

/**
 * Hook to manage the chat conversation state with dispatchers including every
 * possible flow with each of the answer variants
 */
export const useConversationState = (): UseConversationStateReturnType => {
  const [state, dispatch] = useReducer(assistantReducer, conversationConstants.defaultState);

  const { conversation: { questions = [] } = {} } = state;

  return {
    state: {
      ...state,
      isLoading: conversationUtils.checkIsConversationLoading(questions),
    },
    dispatch,
  };
};
