import type { conversationConstants } from '../constants';
import type {
  LegalWhisperAnswerType,
  LegalWhisperConversation,
  LegalWhisperQuestion,
} from './legal-whisper.interfaces';

export interface LegalWhisperConversationState {
  conversation?: LegalWhisperConversation;
  disabled: boolean;
  isLoading: boolean;
}

export type SetConversationAction = {
  type: typeof conversationConstants.actions.setConversation;
  payload: {
    conversation: LegalWhisperConversation;
  };
};

export type CreateQuestionAction = {
  type: typeof conversationConstants.actions.createQuestion;
  payload: Pick<LegalWhisperQuestion, 'value'>;
};

export type PersistAnswerAction = {
  type: typeof conversationConstants.actions.persistAnswer;
  payload: LegalWhisperAnswerType;
};

export type UpdateDisabledAction = {
  type: typeof conversationConstants.actions.updateDisabled;
  payload: Partial<Pick<LegalWhisperConversationState, 'disabled'>>;
};

export type ConversationAction =
  | SetConversationAction
  | CreateQuestionAction
  | PersistAnswerAction
  | UpdateDisabledAction;
