import DOMPurify from 'dompurify';

import { TEMP_PREFIX } from '@components/utils/id.util';
import { messageConstants } from '@components/webdox-ai/constants';
import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';
import { stringUtils } from '@utils/string.util';

import {
  ALL_QUOTES_VARIANTS,
  INDEX_ID_KEY_REGEX,
  WEBDOX_AI_PAGE_REGEX,
  WEBDOX_AI_RANGES_REGEX,
  WEBDOX_AI_RANGE_REGEX,
} from '../constants/webdox-ai-regex.constants';

import type {
  AnswerReference,
  ChatBotAnswerTypeV2,
  ChatBotLoadingVariant,
  ChatBotMessageTypePropsV2,
  ChatBotQuestionTypeV2,
  ChatBotQuestionVariant,
  ChatMessageEncodedDataType,
  ChatMessageTypeV2,
  WebdoxAIOptionType,
} from '../interfaces';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';
import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

type ExtraParamsType = Pick<
  ChatBotMessageTypePropsV2,
  | 'onCopyToClipboardButtonClick'
  | 'onTempAnswerSubmit'
  | 'showFeedback'
  | 'isFeedbackLoading'
  | 'onFeedbackButtonClick'
  | 'onRetryAnswerGeneration'
  | 'zIndex'
  | 'questionLayoutKind'
  | 'disclaimer'
  | 'updateActiveMessage'
  | 'updateAnswerReference'
  | 'selectedAnswerReference'
  | 'activeAnswerId'
> & {
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
export class MessageUtils {
  private renderQuestionVariants: ChatBotQuestionVariant[] = ['persist', 'placeholder'];

  /** Transform all conversation's questions and answers into a message */
  public mapQuestionsIntoMessages(
    questions: ChatBotQuestionTypeV2[],
    extraParams: ExtraParamsType,
  ): ChatMessageTypeV2[] {
    return questions.reduce(
      (acc: ChatMessageTypeV2[], question): ChatMessageTypeV2[] => [
        ...acc,
        ...this.mapQuestionIntoMessages({ question, extraParams }),
        ...question.answers.map((answer) =>
          this.mapAnswerIntoMessage({ answer, question, extraParams }),
        ),
      ],
      [],
    );
  }

  /**
   * Process the message value with a regexp to find the encoded data in the message delimited by
   * `{{{<data>}}}`.
   *
   * As this value comes from a not controlled source, it can be inconsistent, so it is required to sanitize it.
   * Only the templates containing a valid `page` property will be returned
   */
  public getMessageEncodedData(message: ChatMessageTypeV2['value']): ChatMessageEncodedDataType[] {
    return stringUtils
      .getAllMatches(message, WEBDOX_AI_PAGE_REGEX)
      .map(([, value]) => this.mapEncodedDataToJson(this.getJsonString(value)))
      .filter((json) => checkNotEmptyValue(json) && this.checkEncodedDataHasValidReference(json));
  }

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
  public getMessageMapReferences(
    message: ChatMessageTypeV2['value'],
    /**
     * translation function to get the key element where we are going to pass a page number and receive a translated text
     * if this function is not passed the same page number is going to be returned
     */
    getReferenceName: (p: number) => string = (p): string => p.toString(),
  ): {
    [x: string]: number;
  } {
    const matches = this.getMessageEncodedData(message);

    return Object.assign(
      {},
      ...matches.map(({ page }) => ({ [`[${getReferenceName(page)}]`]: page })),
    );
  }

  /**
   * Process the message value with a regexp to replace the encoded data in the message delimited by
   * `{{{<data>}}}`. Only the templates containing a valid `page` property
   * will be replaced.
   */
  public replaceEncodedPages(
    message: ChatMessageTypeV2['value'],
    getReferenceName: (p: number) => string,
  ): string {
    return message.replaceAll(WEBDOX_AI_PAGE_REGEX, (original, match) => {
      const jsonValue = this.mapEncodedDataToJson(this.getJsonString(match));

      if (jsonValue === undefined || !this.checkEncodedDataHasValidReference(jsonValue)) {
        return original;
      } else {
        return this.encodedPageRefHtml(getReferenceName(jsonValue.page));
      }
    });
  }

  /**
   * Sanitize the encoded range pair string by removing all quotes and spaces,
   * and ensuring the index_id key is properly formatted.
   */
  public sanitizeEncodedRangePair(pair: string): string {
    return pair
      .replaceAll(ALL_QUOTES_VARIANTS, '')
      .replaceAll(' ', '')
      .replaceAll(INDEX_ID_KEY_REGEX, '"index_id"');
  }

  /**
   * Process the message value with a regexp to find the encoded range data in the message delimited by
   * `[{"start":1}]`.
   *
   * As this value comes from a not controlled source, it is required to sanitize it.
   */
  public replaceEncodedReferences(
    message: ChatMessageTypeV2['value'],
    availableReferences: AnswerReference[] = [],
  ): string {
    let rangesCounter = 1; // To keep track of the position of each range in the output

    return message.replaceAll(WEBDOX_AI_RANGES_REGEX, (original) => {
      const pairs = [...original.matchAll(WEBDOX_AI_RANGE_REGEX)];
      const references: AnswerReference[] = [];

      pairs.forEach(([pair]) => {
        const sanitizedPair = this.sanitizeEncodedRangePair(pair);
        const { index_id: indexId } = JSON.parse(sanitizedPair);

        const isDuplicated = references.find(({ id }) => id === indexId);
        const isAvailable = availableReferences.find(({ id }) => id === indexId);

        if (isAvailable && !isDuplicated) {
          references.push({ id: indexId, position: rangesCounter });
          rangesCounter++; // Increment the counter for each range found
        }
      });

      return this.encodedAnswerReferencesRefHtml(JSON.stringify({ references }));
    });
  }

  /**
   * Process the message value with a regexp to replace the encoded data in the message delimited by
   * `{{{<data>}}}` with an html string value. Only the templates containing a valid `page` property
   * will be replaced
   */
  public getMessageWithReplacedEncodedData({
    message,
    availableReferences,
    getReferenceName = (p): string => p.toString(),
  }: GetMessageWithReplacedEncodedDataParams): string {
    // Replace encoded answer references
    let transformedMessage = this.replaceEncodedReferences(message, availableReferences);

    // Replace encoded pages
    transformedMessage = this.replaceEncodedPages(transformedMessage, getReferenceName);

    return transformedMessage;
  }

  /** Check if the message is a special one */
  public checkIsSpecialAnswerId({ id }: MessageListItemType): boolean {
    return Object.values(messageConstants.specialAnswerId).some((value) => value === id);
  }

  /** Sanitize raw message */
  public sanitizeString(value: string): string {
    return DOMPurify.sanitize(value);
  }

  /** Check if the encoded data has a valid page reference */
  private checkEncodedDataHasValidReference(data: ChatMessageEncodedDataType): boolean {
    return data.page !== undefined;
  }

  /**
   * Convert the raw value from message encoded data into a json string.
   *
   * It is required to convert all single quotes to double quotes
   */
  private getJsonString(raw: string): string {
    return `{${raw.replaceAll("'", '"')}}`;
  }

  /** Convert the json string into the required json with the specific data model */
  private mapEncodedDataToJson(value: string): ChatMessageEncodedDataType {
    try {
      const json = JSON.parse(value);

      if (this.checkEncodedDataHasValidReference(json)) {
        json.page = stringUtils.mapToNumber(json.page);
      }

      return json;
    } catch {
      return undefined;
    }
  }

  /** The encoded page reference HTML template to replace the encoded reference in the chat bot message */
  private encodedPageRefHtml(page: string): string {
    return `<${messageConstants.pageRefHtml}>[${page}]</${messageConstants.pageRefHtml}>`;
  }

  /** The encoded range reference HTML template to replace the encoded reference in the chat bot message */
  private encodedAnswerReferencesRefHtml(references: string): string {
    return `<${messageConstants.answerReferencesRefHtml}>${references}</${messageConstants.answerReferencesRefHtml}>`;
  }

  /** Transform a single conversation's question into messages */
  private mapQuestionIntoMessages({
    question,
    extraParams: { questionLayoutKind, loadingVariant = 'loading' },
  }: MapQuestionIntoMessageParams): ChatMessageTypeV2[] {
    const { id, uuid = '', value, variant, isWaiting, answers } = question;

    const waitingMessages: ChatMessageTypeV2[] =
      answers.length === 0 && isWaiting
        ? [
            {
              kind: 'answer',
              id: `${TEMP_PREFIX}-${id}-loading`,
              variant: loadingVariant,
            },
          ]
        : [];

    const newQuestions: ChatMessageTypeV2[] = this.renderQuestionVariants.includes(variant)
      ? [
          {
            kind: 'question',
            id,
            uuid,
            value,
            layoutKind: questionLayoutKind,
          },
        ]
      : [];

    return [...newQuestions, ...waitingMessages];
  }

  /** Transform a single conversation's answer into a message */
  private mapAnswerIntoMessage({
    answer,
    question,
    extraParams: {
      activeAnswerId,
      selectedAnswerReference,
      updateActiveMessage,
      updateAnswerReference,
      onCopyToClipboardButtonClick,
      onTempAnswerSubmit,
      onFeedbackButtonClick,
      onRetryAnswerGeneration,
      ...restExtraParams
    },
  }: MapAnswerIntoMessageParams): ChatMessageTypeV2 {
    const {
      id,
      uuid = '',
      value,
      variant,
      createdAt,
      feedback,
      staticContent,
      tempProps,
      quotes,
    } = answer;

    return {
      content: '',
      read: false,
      kind: 'answer',
      id,
      uuid,
      value,
      variant,
      createdAt,
      feedback,
      staticContent,
      question,
      selectedAnswerReference,
      onCopyToClipboardButtonClick,
      onFeedbackButtonClick,
      onRetryAnswerGeneration,
      updateAnswerReference,
      updateActiveMessage,
      quotes,
      activeAnswerId,
      tempProps: {
        ...tempProps,
        onSubmit: onTempAnswerSubmit,
      },
      ...restExtraParams,
    };
  }
}

export const messageUtils = new MessageUtils();
