import type { Dispatch, ReactElement, ReactNode } from 'react';

import type { MessageListItemType } from './chat-bot-component.interface';
import type {
  ChatConversationAction,
  ChatConversationState,
} from './chat-bot-conversation-state.interface';
import type {
  ChatBotAnswerTypeV2,
  ChatBotConversationTypeV2,
  GenerativeAnswerType,
  GenerativeTextValueType,
} from './chat-bot.interfaces';
import type { AnswerReference, ChatBotMessageTypePropsV2 } from './chat-message.interface';
import type { DocumentMetadata } from './document-metadata.interfaces';
import type {
  ChatBotQuestion,
  CreateQuestionOptionsType,
  GenerateContractSummaryOptionsType,
  WithOnSuccess,
} from './webdox-ai.interfaces';
import type { AssistantLayoutProps } from '../components';
import type { PlanType } from './webdox-ia-plans.interfaces';
import type { assistantConstants } from '../constants/assistant.constant';
import type { LocaleOption } from '@components/utils';

export type ChatBotErrorType = 'createQuestion' | 'createConversation' | 'fetchConversation';

export type ChatAssistantErrorType = 'documentEnable' | ChatBotErrorType;

/** To indicate the type of summary that will be generated. */
export type ChatAssistantContractSummaryType = 'summary' | 'report';

export type AssistantLayoutTabType =
  (typeof assistantConstants.assistantTabs)[keyof typeof assistantConstants.assistantTabs];

export type AssistantAIServiceType = keyof typeof assistantConstants.assistantOptionMap;

export type ChatBotValuesType = {
  errorType?: ChatBotErrorType;
};

export type ChatAssistantValuesType = {
  errorType?: ChatAssistantErrorType;
  /**
   * The document id where the chat assistant is being used
   *
   * @defaultValue -1
   */
  documentId: number;
  /**
   * The document version where the chat assistant is being used
   *
   * @defaultValue -1
   */
  documentVersionId?: number;
  /** Will update to false when the document is prepared with OCR and GPT related stuff, a long and async process */
  isPreparingDocument: boolean;
  /** Will update to false when the current document's conversation is prepared with GPT related stuff, a long and async process */
  isPreparingConversation: boolean;
  /** Indicates if the first conversation got after the preparation of the document is empty */
  isConversationEmpty: boolean;
  /** Indicates if the assistant's current document is extracting metadata */
  isPreparingMetadata: boolean;
  /** Indicates if it is the first document processing. */
  isFirstDocumentProcessing?: boolean;
  /**
   * Specifies the tab that should be displayed in the layout. If provided, this value overrides the default
   * tab selection and forces the interface to show the specified tab.
   */
  selectedTab?: AssistantLayoutTabType;
  /** Indicates whether the user has manually closed the assistant, allowing for validations based on this action. */
  userClosedAssistant?: boolean;
  /** Indicates the selected AI service */
  selectedAIService?: AssistantAIServiceType;
  /** Indicates the last answer the user interacted with. */
  activeAnswerId?: string;
  /** Indicates the selected answer reference to highlight within document viewer. */
  selectedAnswerReference?: AnswerReference;
};

export type ChatAssistantContextProviderProps = {
  children: ReactNode;
};

export type ChatAssistantContextValuesType = {
  /** Selected contract kind in the current document's assistant */
  contractKind?: MessageListItemType;
  conversationState: ChatConversationState;
  conversationId?: ChatBotConversationTypeV2['id'];
  contractKindPrompts: MessageListItemType[];
  contractSummary?: string;
  contractSummaryUpdatedAt?: string;
  isContractSummaryLoading?: boolean;
  /**
   * Indicates whether an answer is being generated.
   * This should be set to `true` after the question has been created
   * and before the answer generation is complete.
   */
  isGeneratingAnswer?: boolean;
  metadataList: MessageListItemType[];
  /** Values used to work with the chat bot answer in chunk (stream) mode */
  generativeAnswer?: GenerativeAnswerType;
  /** All dynamic values relative to the assistant */
  values: ChatAssistantValuesType;
  /** Dispatcher for actions in the conversationState */
  conversationDispatch: Dispatch<ChatConversationAction>;
  /** metadata value that was clicked to trigger the highlight in document */
  highlightedText: string;
  /** Used to start chat bot assistant operation */
  onStartAssistant(): void;
  /** Update the documentId of the current document in the document viewer */
  updateValues(newValues: Partial<ChatAssistantValuesType>): void;
  /** Return the state of the context to default to be enabled to start over */
  onDismiss(): void;
  /** Execute when the first root component consuming the context is unmounted to unsubscribe from broadcast websocket */
  onUnmount(): void;
  onCreateQuestion(chatBotQuestion: ChatBotQuestion, options: CreateQuestionOptionsType): void;
  onGenerativeAnswerChange(texts: GenerativeTextValueType): void;
  onFeedbackSubmit(values: Pick<ChatBotAnswerTypeV2, 'id' | 'feedback'>): void;
  /** Used to generate a new contract summary. */
  onGenerateContractSummary(options?: GenerateContractSummaryOptionsType): void;
  /** Used to stop answer generation. */
  onStopAnswerGeneration(options?: WithOnSuccess): void;
  /** Used to translate text to a target language. */
  onTranslateText(
    params: { text: string; targetLanguage: LocaleOption },
    options?: WithOnSuccess,
  ): void;
  /** Used to explain the selected text. */
  onExplainText?(params: { text: string }, options?: WithOnSuccess): void;
  /** Used to retry a question. */
  onRetryQuestion(data: { id: string; onSuccess(question: string): void }): void;
  /** Used to send the string value for document highlight. */
  onDataExtractionHighlight(metadata: DocumentMetadata): void;
};

export type AssistantTypeProps = Omit<ChatBotMessageTypePropsV2, 'data-testid' | 'disabled'> &
  Pick<
    ChatAssistantValuesType,
    | 'isPreparingConversation'
    | 'isPreparingDocument'
    | 'isConversationEmpty'
    | 'isPreparingMetadata'
  > &
  Pick<
    ChatAssistantContextValuesType,
    'contractKind' | 'highlightedText' | 'onDataExtractionHighlight'
  > & {
    'data-testid': string;
    selectedTab: AssistantLayoutTabType;
    conversationDisabled: boolean;
    isLoading: boolean;
    isContractKindLoading: boolean;
    isMetadataLoading: boolean;
    isContractSummaryLoading?: boolean;
    isDataExtractionEnabled?: boolean;
    prompts: MessageListItemType[];
    suggestions: MessageListItemType[];
    contractKinds: MessageListItemType[];
    metadataList: MessageListItemType[] | DocumentMetadata[];
    contractSummary?: string;
    contractSummaryUpdatedAt?: string;
    selectedAIService?: AssistantAIServiceType;
    /** used to show the legal whisper selector */
    showLegalWhisper?: boolean;
    legalWhisperController: ReactElement;
    onTabChange: AssistantLayoutProps['onSelectChange'];
    /** used to show and use the Plan Usage feature control */
    isPlanUsageActive?: boolean;
    availablePlans: PlanType[];
    onGenerateContractSummary?(summaryType?: ChatAssistantContractSummaryType): void;
    onClose(): void;
    onContractKindChange(item: MessageListItemType): void;
    onMetadataItemChange(item: MessageListItemType): void;
    /** Callback to execute when the user scrolls in the summary. */
    onSummaryScroll?(): void;
    onAIServiceChange?(service: AssistantAIServiceType): void;
    onGoToClassificationButtonClick(): void;
    onGoToEntitiesDirectoryClick(): void;
    /**
     * Callback to execute when the user clicks the dynamic view
     * button to change the assistant layout from a drawer to a dynamic dialog.
     */
    onClickDynamicView?(): void;
  };
