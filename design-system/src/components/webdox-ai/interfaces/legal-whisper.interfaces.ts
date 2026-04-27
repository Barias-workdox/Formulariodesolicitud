import type { Dispatch } from 'react';

import type { ChatBotAnswerTypeV2, ChatBotQuestionTypeV2 } from './chat-bot.interfaces';
import type {
  ConversationAction,
  LegalWhisperConversationState,
} from './legal-whisper-conversation-state.interfaces';
import type {
  ChatBotQuestion,
  CreateQuestionOptionsType,
  WebdoxAIErrorType,
} from './webdox-ai.interfaces';

export interface LegalArticle {
  article: string;
  url?: string;
  text?: string;
}

/**
 * Represents a legal quote with optional nested quotes (children).
 */
export interface Quote {
  name: string;
  text?: string;
  url?: string;
  type?: string;
  date?: string;
  fatherName?: string;
  source?: string;
  /** Nested quotes associated with this quote. */
  children?: Quote[];
}

/**
 * Extends the ChatBotAnswerTypeV2 interface to include legal quotes.
 */
export interface LegalWhisperAnswerType extends ChatBotAnswerTypeV2 {
  quotes?: {
    legalQuotes?: Quote[];
    jurisprudentialQuotes?: Quote[];
    administrativeQuotes?: Quote[];
  };
}

/**
 * Extends the ChatBotQuestionTypeV2 interface to include answers of type LegalWhisperAnswerType.
 */
export interface LegalWhisperQuestion extends ChatBotQuestionTypeV2 {
  answers: LegalWhisperAnswerType[];
}

/**
 * Extends the ChatBotConversationTypeV2 interface to include questions of type LegalWhisperQuestion.
 */
export interface LegalWhisperConversation {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  questions: LegalWhisperQuestion[];
  /** The user id of the user that is using the legal whisper */
  userId: string;
  /** The customer id of the customer that is using the legal whisper */
  customerId: string;
}

/**
 * Represents a list item for a legal whisper conversation.
 */
export interface LegalWhisperConversationListItemType {
  id: string;
  title: string;
}

/**
 * Represents a suggestion item within the legal whisper chat composer.
 */
export type SuggestionItemType = {
  id: string;
  label: string;
  value: string;
};

/**
 * This type is used to store the values for the legal whisper.
 */
export type LegalWhisperValuesType = {
  errorType?: WebdoxAIErrorType;
  isConversationEmpty: boolean;
  isGeneratingAnswer: boolean;
  isPreparingConversation: boolean;
};

/**
 * Represents the context values for the legal whisper.
 */
export type LegalWhisperContextValues = {
  values: LegalWhisperValuesType;
  conversationId?: string;
  conversationState: LegalWhisperConversationState;
  conversationDispatch: Dispatch<ConversationAction>;
  onCreateQuestion(chatBotQuestion: ChatBotQuestion, options: CreateQuestionOptionsType): void;
};
