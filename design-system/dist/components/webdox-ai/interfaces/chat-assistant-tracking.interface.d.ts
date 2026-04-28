import { AssistantAIServiceType, AssistantLayoutTabType } from './chat-assistant.interface';
import { MessageListItemType } from './chat-bot-component.interface';
import { ChatBotAnswerVariantV2 } from './chat-bot.interfaces';
import { ChatBotChatMessageType } from './chat-message.interface';
import { ChatBotFeedbackPayload, CustomPrompt } from './webdox-ai.interfaces';
import { PageScopeType } from '../../../interfaces/common.interfaces';
export type DocumentTrackingType = {
    id: number;
    uuid: string;
    name: string;
    fileExt: string;
};
export type AssistantTrackingEventPayloadType = {
    document_id: number;
    document_uuid: string;
    document_name: string;
    document_ext: string;
    origin: PageScopeType;
    /** The key of the prompt */
    prompt_kind?: MessageListItemType['label'];
    /** The full value of the prompt */
    prompt_value?: string;
    /** The message id */
    message_id?: MessageListItemType['id'];
    /** The message content */
    message_content?: string;
    tab?: string;
    /** message AI service origin */
    answer_variant?: string;
    contract_kind_id?: MessageListItemType['id'];
    /** The updated contract kind value */
    contract_kind_value?: string;
    contract_kind_label?: string;
    metadata_id?: MessageListItemType['id'];
    metadata_value?: string;
    metadata_label?: string;
    feedback_comment?: string;
    feedback_option?: string;
};
export type AssistantTrackingEventReturnType = {
    name: string;
    payload: AssistantTrackingEventPayloadType;
};
export type ChatBotMessageTrackingType = Pick<ChatBotChatMessageType, 'id' | 'value'>;
export interface AssistantTrackingPayloadType {
    document?: DocumentTrackingType;
    message: Pick<MessageListItemType, 'id' | 'label' | 'value'>;
    answerVariant: ChatBotAnswerVariantV2;
    /** Used to indicate in which page module the assistant is being used */
    pageScope: PageScopeType;
    selectedTab: AssistantLayoutTabType;
    feedback: ChatBotFeedbackPayload;
    /** used to indicate the origin of the message */
    origin?: AssistantAIServiceType;
    customPrompt?: CustomPrompt;
}
export interface AssistantTrackingTransformPayloadType extends AssistantTrackingPayloadType {
    prompt: Pick<MessageListItemType, 'label' | 'value'>;
    contractKind: MessageListItemType;
    metadata: MessageListItemType;
    customPrompt: CustomPrompt;
}
export type AssistantTrackingSendQueryPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'message' | 'selectedTab' | 'origin'>;
export type AssistantTrackingCloseAssistantPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope'>;
export type AssistantTabChangeAssistantPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'selectedTab'>;
export type AssistantCopyToClipboardPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'message'>;
export type AssistantFeedbackPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'message' | 'feedback'>;
export type AssistantClickSuggestionsPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope'>;
export type AssistantSelectSuggestionPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'answerVariant' | 'message'>;
export type AssistantChangeContractKindPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'message'>;
export type AssistantChangeMetadataPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope' | 'message'>;
export type SignatureAITrackingPayloadType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope'>;
export type AssistantSummaryType = Pick<AssistantTrackingPayloadType, 'document' | 'pageScope'>;
export type CustomPromptTrackingPayloadType = Pick<AssistantTrackingPayloadType, 'customPrompt'>;
export interface UseChatAssistantTrackingReturnType {
    /**
     * Tracking event that triggers when the user writes a question in the chat assistant
     */
    triggerSendQuery(payload: AssistantTrackingSendQueryPayloadType): void;
    /**
     * Tracking event that triggers when the user closes the chatbot drawer
     */
    triggerCloseAssistant(payload: AssistantTrackingCloseAssistantPayloadType): void;
    /** Trigger on tab change */
    triggerTabChange(payload: AssistantTabChangeAssistantPayloadType): void;
    /**
     * Tracking event that triggers when the user clicks the copy to clipboard button
     * in some message
     */
    triggerCopyToClipboard(payload: AssistantCopyToClipboardPayloadType): void;
    /**
     * Tracking event that triggers when the user submits the positive or negative feedback
     * on some message
     */
    triggerFeedback(payload: AssistantFeedbackPayloadType): void;
    /**
     * Tracking event that triggers when the user clicks the suggestions button in the composer
     */
    triggerClickSuggestions(payload: AssistantClickSuggestionsPayloadType): void;
    /**
     * Tracking event that triggers when the user clicks a prompt suggestion
     */
    triggerSelectSuggestion(payload: AssistantSelectSuggestionPayloadType): void;
    /**
     * Tracking event that triggers when the user changes the selected contract kind
     */
    triggerChangeContractKind(payload: AssistantChangeContractKindPayloadType): void;
    /**
     * Tracking event that triggers when the user changes a metadata value
     */
    triggerChangeMetadata(payload: AssistantChangeMetadataPayloadType): void;
    /**
     * Tracking event that triggers when the user scrolls through the summary.
     */
    triggerSummaryScroll(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user copy to clipboard the summary.
     */
    triggerCopySummary(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user generate the summary.
     */
    triggerGenerateSummary(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user generate the contract report.
     */
    triggerGenerateContractReport(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user click on copy action within document viewer toolbar.
     */
    triggerDocumentViewerCopyAction(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user click on translate action within document viewer toolbar.
     */
    triggerDocumentViewerTranslateAction(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user click on explain action within document viewer toolbar.
     */
    triggerDocumentViewerExplainAction(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user click on an answer reference within brain companion chat.
     */
    triggerClickAnswerReference(payload: AssistantSummaryType): void;
    /**
     * Tracking event that triggers when the user click on a custom prompt within brain companion chat.
     */
    triggerClickCustomPrompt(payload: CustomPromptTrackingPayloadType): void;
    /**
     * Tracking event that triggers when the user create a new custom prompt within brain companion chat.
     */
    triggerCreateCustomPrompt(payload: CustomPromptTrackingPayloadType): void;
    /**
     * Tracking event that triggers when the user edit a custom prompt within brain companion chat.
     */
    triggerEditCustomPrompt(payload: CustomPromptTrackingPayloadType): void;
    /**
     * Tracking event that triggers when the user delete a custom prompt within brain companion chat.
     */
    triggerDeleteCustomPrompt(payload: CustomPromptTrackingPayloadType): void;
    /**
     * Tracking event that triggers when the user clicks the IA component in the signature page section.
     */
    triggerSignatureClickAI(payload: SignatureAITrackingPayloadType): void;
}
