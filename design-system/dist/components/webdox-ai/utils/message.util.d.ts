import { AnswerReference, ChatBotAnswerTypeV2, ChatBotLoadingVariant, ChatBotMessageTypePropsV2, ChatBotQuestionTypeV2, ChatMessageEncodedDataType, ChatMessageTypeV2, WebdoxAIOptionType } from '../interfaces';
import { MessageListItemType } from '../interfaces/chat-bot-component.interface';
import { LegalWhisperAnswerType } from '../interfaces/legal-whisper.interfaces';
type ExtraParamsType = Pick<ChatBotMessageTypePropsV2, 'onCopyToClipboardButtonClick' | 'onTempAnswerSubmit' | 'showFeedback' | 'isFeedbackLoading' | 'onFeedbackButtonClick' | 'onRetryAnswerGeneration' | 'zIndex' | 'questionLayoutKind' | 'disclaimer' | 'updateActiveMessage' | 'updateAnswerReference' | 'selectedAnswerReference' | 'activeAnswerId'> & {
    loadingVariant?: ChatBotLoadingVariant;
    suiteAIOption?: WebdoxAIOptionType;
};
export interface MapAnswerIntoMessageParams {
    answer: ChatBotAnswerTypeV2 & LegalWhisperAnswerType;
    question: ChatBotQuestionTypeV2;
    extraParams: ExtraParamsType;
}
export interface MapQuestionIntoMessageParams {
    question: ChatBotQuestionTypeV2;
    extraParams: Pick<ExtraParamsType, 'questionLayoutKind' | 'loadingVariant'>;
}
export type GetMessageWithReplacedEncodedDataParams = {
    message: ChatMessageTypeV2['value'];
    availableReferences: AnswerReference[];
    getReferenceName(p: number): string;
};
/**
 * Utilities to manage messages and conversations.
 * Used by v2
 */
export declare class MessageUtils {
    private renderQuestionVariants;
    /** Transform all conversation's questions and answers into a message */
    mapQuestionsIntoMessages(questions: ChatBotQuestionTypeV2[], extraParams: ExtraParamsType): ChatMessageTypeV2[];
    /**
     * Process the message value with a regexp to find the encoded data in the message delimited by
     * `{{{<data>}}}`.
     *
     * As this value comes from a not controlled source, it can be inconsistent, so it is required to sanitize it.
     * Only the templates containing a valid `page` property will be returned
     */
    getMessageEncodedData(message: ChatMessageTypeV2['value']): ChatMessageEncodedDataType[];
    /**
     * This function is going to generate a list of page references
     *
     * @example
     * ```
     * {
     *   "[page 1]": 1,
     *   "[page 4]": 4,
     *   ...
     * }
     * ```
     */
    getMessageMapReferences(message: ChatMessageTypeV2['value'], 
    /**
     * translation function to get the key element where we are going to pass a page number and receive a translated text
     * if this function is not passed the same page number is going to be returned
     */
    getReferenceName?: (p: number) => string): {
        [x: string]: number;
    };
    /**
     * Process the message value with a regexp to replace the encoded data in the message delimited by
     * `{{{<data>}}}`. Only the templates containing a valid `page` property
     * will be replaced.
     */
    replaceEncodedPages(message: ChatMessageTypeV2['value'], getReferenceName: (p: number) => string): string;
    /**
     * Sanitize the encoded range pair string by removing all quotes and spaces,
     * and ensuring the index_id key is properly formatted.
     */
    sanitizeEncodedRangePair(pair: string): string;
    /**
     * Process the message value with a regexp to find the encoded range data in the message delimited by
     * `[{"start":1}]`.
     *
     * As this value comes from a not controlled source, it is required to sanitize it.
     */
    replaceEncodedReferences(message: ChatMessageTypeV2['value'], availableReferences?: AnswerReference[]): string;
    /**
     * Process the message value with a regexp to replace the encoded data in the message delimited by
     * `{{{<data>}}}` with an html string value. Only the templates containing a valid `page` property
     * will be replaced
     */
    getMessageWithReplacedEncodedData({ message, availableReferences, getReferenceName, }: GetMessageWithReplacedEncodedDataParams): string;
    /** Check if the message is a special one */
    checkIsSpecialAnswerId({ id }: MessageListItemType): boolean;
    /** Sanitize raw message */
    sanitizeString(value: string): string;
    /** Check if the encoded data has a valid page reference */
    private checkEncodedDataHasValidReference;
    /**
     * Convert the raw value from message encoded data into a json string.
     *
     * It is required to convert all single quotes to double quotes
     */
    private getJsonString;
    /** Convert the json string into the required json with the specific data model */
    private mapEncodedDataToJson;
    /** The encoded page reference HTML template to replace the encoded reference in the chat bot message */
    private encodedPageRefHtml;
    /** The encoded range reference HTML template to replace the encoded reference in the chat bot message */
    private encodedAnswerReferencesRefHtml;
    /** Transform a single conversation's question into messages */
    private mapQuestionIntoMessages;
    /** Transform a single conversation's answer into a message */
    private mapAnswerIntoMessage;
}
export declare const messageUtils: MessageUtils;
export {};
