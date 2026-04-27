import type { ReactNode } from 'react';

import type { AssistantAIServiceType, ChatAssistantContractSummaryType } from '.';
import type { ChatBotAnswerTypeV2 } from './chat-bot.interfaces';
import type { ChatBotChatMessageType } from './chat-message.interface';
import type { FeedbackKind } from '../../feedback-button';

export interface ChatBotUser {
  id: number;
  fullName: string;
  firstName?: string;
}

export type PromptGroupHeaderType = 'primary' | 'secondary';

/** These are the prompts id types mapped from the backend to improve the prompt question */
export type PromptKind =
  | 'contract_summary'
  | 'first_party'
  | 'second_party'
  | 'contract_dates'
  | 'contract_amount'
  | 'contract_summary_json'
  /** Type for question without prompt */
  | 'custom';

export interface CustomPrompt {
  id: number;
  title?: string;
  content: string;
}

export type WebdoxAIErrorType =
  | 'documentEnable'
  | 'createQuestion'
  | 'createConversation'
  | 'fetchConversation'
  | 'encryptedDocument';

export type WebdoxAIEmptyState = 'empty' | 'loading' | 'enableDocumentLoading';

export type ChatBotStage = 'initial' | 'documentEnable' | 'fetchConversation' | 'finished';

export type WebdoxAIOptionType = 'legalWhisper' | 'brainCompanion';

export interface ChatBotQuestion {
  /** The chatGPT question in the user current language */
  questionText: string;
  /** Map the id in the backend to improve the question to chatGPT */
  questionKind?: PromptKind;
  /** country and area for legal whisper */
  country?: string;
  area?: string;
}

export interface ChatBotValues {
  /**
   * If some error is got on the process, the current type will be returned, if everything ok should
   * remain undefined
   */
  errorType?: WebdoxAIErrorType;
  documentId: number;
  documentVersionId?: number;
  chatBotStage: ChatBotStage;
}

export interface ChatBotContextProviderProps {
  children: ReactNode;
}

export type ChatBotNegativeFeedbackOption = 'unhelpful' | 'incomplete' | 'not_real' | 'custom';

export interface PositiveFeedbackFormValues {
  comments: string;
}

export interface NegativeFeedbackFormValues {
  comments: string;
  option?: ChatBotNegativeFeedbackOption;
}

export interface ChatBotFeedback {
  messageId: ChatBotChatMessageType['id'];
  feedbackKind: FeedbackKind;
}

export interface ChatBotFeedbackPayload extends ChatBotFeedback {
  answer?: ChatBotAnswerTypeV2;
  values: PositiveFeedbackFormValues & NegativeFeedbackFormValues;
}

export type ChatBotCopyToClipboardPayload = Pick<ChatBotChatMessageType, 'id'>;

export type WithOnSuccess = {
  onSuccess(): void;
};

export type CreateQuestionOptionsType = WithOnSuccess & {
  checkAnswerError?: boolean;
  origin?: AssistantAIServiceType;
};

export type GenerateContractSummaryOptionsType = WithOnSuccess & {
  summaryType: ChatAssistantContractSummaryType;
};
