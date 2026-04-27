import { conversationConstants } from '../../constants';

import { contractKindAnswer } from './contract-kind-answer';
import { createQuestion } from './create-question';
import { deleteConversation } from './delete-conversation';
import { deleteQuestion } from './delete-question';
import { generativeAnswer } from './generative-answer';
import { persistAnswer } from './persist-answer';
import { reset } from './reset';
import { setConversation } from './set-conversation';
import { stopAnswerGeneration } from './stop-answer-generation';
import { suggestionsAnswer } from './suggestions-answer';
import { systemAnswer } from './system-answer';
import { updateAnswer } from './update-answer';
import { updateDisabled } from './update-disabled';

import type { ChatConversationAction, ChatConversationState } from '../../interfaces';

/** Chat conversation state reducer */
export const assistantReducer = (
  state: ChatConversationState,
  action: ChatConversationAction,
): ChatConversationState => {
  switch (action.type) {
    case conversationConstants.actions.setConversation: {
      return setConversation({ state, action });
    }
    case conversationConstants.actions.deleteConversation: {
      return deleteConversation({ state, action });
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
    case conversationConstants.actions.generativeAnswer: {
      return generativeAnswer({ state, action });
    }
    case conversationConstants.actions.updateAnswer: {
      return updateAnswer({ state, action });
    }
    case conversationConstants.actions.reset: {
      return reset({ state, action });
    }
    case conversationConstants.actions.contractKindAnswer: {
      return contractKindAnswer({ state, action });
    }
    case conversationConstants.actions.suggestionsAnswer: {
      return suggestionsAnswer({ state, action });
    }
    case conversationConstants.actions.systemAnswer: {
      return systemAnswer({ state, action });
    }
    case conversationConstants.actions.stopAnswerGeneration: {
      return stopAnswerGeneration({ state, action });
    }
    case conversationConstants.actions.deleteQuestion: {
      return deleteQuestion({ state, action });
    }
    default:
      return state;
  }
};
