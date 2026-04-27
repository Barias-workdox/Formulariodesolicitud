import { useCallback } from 'react';

import { assistantTrackingConstants } from '../constants/assistant-tracking.constant';
import { assistantConstants } from '../constants/assistant.constant';

import type {
  AssistantChangeContractKindPayloadType,
  AssistantChangeMetadataPayloadType,
  AssistantClickSuggestionsPayloadType,
  AssistantCopyToClipboardPayloadType,
  AssistantFeedbackPayloadType,
  AssistantSelectSuggestionPayloadType,
  AssistantSummaryType,
  AssistantTabChangeAssistantPayloadType,
  AssistantTrackingCloseAssistantPayloadType,
  AssistantTrackingEventPayloadType,
  AssistantTrackingEventReturnType,
  AssistantTrackingSendQueryPayloadType,
  AssistantTrackingTransformPayloadType,
  CustomPromptTrackingPayloadType,
  UseChatAssistantTrackingReturnType,
  SignatureAITrackingPayloadType,
} from '../interfaces/chat-assistant-tracking.interface';

type UseChatAssistantTrackingParamsType = {
  /** Callback to run with the tracking dynamic values as payload */
  callback(values: AssistantTrackingEventReturnType): void;
};

/**
 * Get values required by assistant's tracking event system
 */
const getFormattedValues = ({
  pageScope,
  document,
  message,
  answerVariant,
  feedback,
  prompt,
  selectedTab,
  contractKind,
  metadata,
  customPrompt,
}: Partial<AssistantTrackingTransformPayloadType>): AssistantTrackingEventPayloadType => ({
  ...(message !== undefined && {
    message_id: message.id,
    message_content: message.value,
    message_label: message.label,
  }),
  ...(document !== undefined && {
    document_id: document.id,
    document_uuid: document.uuid,
    document_name: document.name,
    document_ext: document.fileExt,
  }),
  ...(contractKind !== undefined && {
    contract_kind_id: contractKind.id,
    contract_kind_value: contractKind.value,
    contract_kind_label: String(contractKind.label),
  }),
  ...(metadata !== undefined && {
    metadata_id: metadata.id,
    metadata_value: metadata.value,
    metadata_label: String(metadata.label),
  }),
  ...(feedback !== undefined && {
    feedback_comment: feedback.values.comments,
    feedback_option: feedback.values.option,
  }),
  ...(prompt !== undefined && {
    prompt_kind: prompt.label,
    prompt_value: prompt.value,
  }),
  ...(answerVariant !== undefined && { answer_variant: answerVariant }),
  ...(selectedTab !== undefined && { tab: selectedTab }),
  ...(pageScope !== undefined && { origin: pageScope }),
  ...(customPrompt !== undefined && { customPrompt }),
});

/**
 * All events to track the chat bot actions between the user and Webdox AI
 */
export const useChatAssistantTracking = ({
  callback,
}: UseChatAssistantTrackingParamsType): UseChatAssistantTrackingReturnType => {
  const triggerSendQuery = useCallback(
    ({ message, ...rest }: AssistantTrackingSendQueryPayloadType): void => {
      callback({
        name: assistantTrackingConstants.sendQuery,
        payload: getFormattedValues({
          prompt: {
            label: message.label,
            value: message.value,
          },
          ...rest,
        }),
      });
    },
    [callback],
  );

  const triggerCloseAssistant = useCallback(
    (payload: AssistantTrackingCloseAssistantPayloadType): void => {
      callback({
        name: assistantTrackingConstants.closeAssistant,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerTabChange = useCallback(
    (payload: AssistantTabChangeAssistantPayloadType): void => {
      if (payload.selectedTab === assistantConstants.assistantTabs.metadata) {
        callback({
          name: assistantTrackingConstants.metadataTabChange,
          payload: getFormattedValues(payload),
        });
      }
      if (payload.selectedTab === assistantConstants.assistantTabs.chat) {
        callback({
          name: assistantTrackingConstants.chatTabChange,
          payload: getFormattedValues(payload),
        });
      }
    },
    [callback],
  );

  const triggerCopyToClipboard = useCallback(
    (payload: AssistantCopyToClipboardPayloadType): void => {
      callback({
        name: assistantTrackingConstants.copyToClipboard,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerSummaryScroll = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.summaryScroll,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerCopySummary = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.copySummary,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerGenerateSummary = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.generateSummary,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerGenerateContractReport = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.generateContractReport,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerDocumentViewerCopyAction = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.documentViewerCopyAction,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerDocumentViewerTranslateAction = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.documentViewerTranslateAction,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerDocumentViewerExplainAction = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.documentViewerExplainAction,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerFeedback = useCallback(
    (payload: AssistantFeedbackPayloadType): void => {
      callback({
        name:
          payload.feedback.feedbackKind === 'negative'
            ? assistantTrackingConstants.negativeFeedback
            : assistantTrackingConstants.positiveFeedback,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerClickSuggestions = useCallback(
    (payload: AssistantClickSuggestionsPayloadType): void => {
      callback({
        name: assistantTrackingConstants.clickSuggestions,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  const triggerSelectSuggestion = useCallback(
    ({ message, ...restPayload }: AssistantSelectSuggestionPayloadType): void => {
      callback({
        name: assistantTrackingConstants.selectSuggestion,
        payload: getFormattedValues({
          prompt: {
            label: message.label,
            value: message.value,
          },
          ...restPayload,
        }),
      });
    },
    [callback],
  );

  const triggerChangeContractKind = useCallback(
    ({ message, ...payload }: AssistantChangeContractKindPayloadType): void => {
      callback({
        name: assistantTrackingConstants.changeContractKind,
        payload: getFormattedValues({
          ...payload,
          contractKind: message,
        }),
      });
    },
    [callback],
  );

  const triggerChangeMetadata = useCallback(
    ({ message, ...payload }: AssistantChangeMetadataPayloadType): void => {
      callback({
        name: assistantTrackingConstants.changeMetadata,
        payload: getFormattedValues({
          ...payload,
          metadata: message,
        }),
      });
    },
    [callback],
  );

  const triggerClickAnswerReference = useCallback(
    (payload: AssistantSummaryType): void => {
      callback({
        name: assistantTrackingConstants.clickAnswerReference,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  /**
   * Tracking event that triggers when the user clicks on a custom prompt
   */
  const triggerClickCustomPrompt = useCallback(
    (payload: CustomPromptTrackingPayloadType): void => {
      callback({
        name: assistantTrackingConstants.clickCustomPrompt,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  /**
   * Tracking event that triggers when the user creates a custom prompt
   */
  const triggerCreateCustomPrompt = useCallback(
    (payload: CustomPromptTrackingPayloadType): void => {
      callback({
        name: assistantTrackingConstants.createCustomPrompt,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  /**
   * Tracking event that triggers when the user deletes a custom prompt
   */
  const triggerDeleteCustomPrompt = useCallback(
    (payload: CustomPromptTrackingPayloadType): void => {
      callback({
        name: assistantTrackingConstants.deleteCustomPrompt,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  /**
   * Tracking event that triggers when the user edits a custom prompt
   */
  const triggerEditCustomPrompt = useCallback(
    (payload: CustomPromptTrackingPayloadType): void => {
      callback({
        name: assistantTrackingConstants.editCustomPrompt,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  /**
   * Tracking event that triggers when the user clicks on Signature IA component
   */
  const triggerSignatureClickAI = useCallback(
    (payload: SignatureAITrackingPayloadType): void => {
      callback({
        name: assistantTrackingConstants.clickSignatureAI,
        payload: getFormattedValues(payload),
      });
    },
    [callback],
  );

  return {
    triggerChangeContractKind,
    triggerChangeMetadata,
    triggerClickSuggestions,
    triggerCloseAssistant,
    triggerCopyToClipboard,
    triggerFeedback,
    triggerSelectSuggestion,
    triggerSendQuery,
    triggerTabChange,
    triggerSummaryScroll,
    triggerCopySummary,
    triggerGenerateSummary,
    triggerGenerateContractReport,
    triggerDocumentViewerCopyAction,
    triggerDocumentViewerTranslateAction,
    triggerDocumentViewerExplainAction,
    triggerClickAnswerReference,
    triggerClickCustomPrompt,
    triggerCreateCustomPrompt,
    triggerDeleteCustomPrompt,
    triggerEditCustomPrompt,
    triggerSignatureClickAI,
  };
};
