import { useReducer } from 'react';
import type { Dispatch } from 'react';

import { conversationConstants } from '../constants';
import { legalWhisperReducer } from '../state/legal-whisper-reducer/legal-whisper-reducer';
import { conversationUtils } from '../utils/conversation.util';

import type {
  LegalWhisperConversationState,
  ConversationAction,
} from '../interfaces/legal-whisper-conversation-state.interfaces';

export type UseLegalWhisperConversationStateReturnType = {
  state: LegalWhisperConversationState;
  dispatch: Dispatch<ConversationAction>;
};

/**
 * Hook to manage the legal whisper conversation state with dispatchers.
 */
export const useLegalWhisperConversationState = (): UseLegalWhisperConversationStateReturnType => {
  const [state, dispatch] = useReducer(legalWhisperReducer, conversationConstants.defaultState);

  const { conversation: { questions = [] } = {} } = state;

  return {
    state: {
      ...state,
      isLoading: conversationUtils.checkIsConversationLoading(questions),
    },
    dispatch,
  };
};
