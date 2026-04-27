import { conversationConstants } from '../../constants';

import { createQuestion } from './create-question';
import { persistAnswer } from './persist-answer';
import { setConversation } from './set-conversation';
import { updateDisabled } from './update-disabled';

import type {
  ConversationAction,
  LegalWhisperConversationState,
} from '../../interfaces/legal-whisper-conversation-state.interfaces';

/**
 * This reducer is used to manage the legal whisper conversation state.
 */
export const legalWhisperReducer = (
  state: LegalWhisperConversationState,
  action: ConversationAction,
): LegalWhisperConversationState => {
  switch (action.type) {
    case conversationConstants.actions.setConversation: {
      return setConversation({ state, action });
    }
    case conversationConstants.actions.createQuestion: {
      return createQuestion({ state, action });
    }
    case conversationConstants.actions.persistAnswer: {
      return persistAnswer({ state, action });
    }
    case conversationConstants.actions.updateDisabled: {
      return updateDisabled({ state, action });
    }
    default:
      return state;
  }
};
