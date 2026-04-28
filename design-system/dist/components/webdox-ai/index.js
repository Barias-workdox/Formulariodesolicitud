import { WebdoxAIBroadcastProvider as e, getWebdoxAIBroadcastContext as r } from "./contexts/webdox-ai-broadcast.context.js";
import { LegalWhisperConversationsContext as _ } from "./contexts/legal-whisper-conversations.context.js";
import { ORGANIZATION_ENTITY as s } from "./interfaces/document-metadata.interfaces.js";
import { ChatBotNegativeFeedbackModal as T } from "./modals/chat-bot-negative-feedback-modal/chat-bot-negative-feedback-modal.js";
import { ChatBotNegativeFeedbackModalContainer as I } from "./modals/chat-bot-negative-feedback-modal/chat-bot-negative-feedback-modal.container.js";
import { CustomPromptFormModal as C } from "./modals/custom-prompt-form-modal/custom-prompt-form-modal.js";
import { DeleteCustomPromptModal as i } from "./modals/delete-custom-prompt-modal/delete-custom-prompt-modal.js";
import { DeleteLegalWhisperConversationModal as x } from "./modals/delete-legal-whisper-conversation-modal/delete-legal-whisper-conversation-modal.js";
import { EditLegalWhisperConversationFormModalContainer as R } from "./modals/edit-legal-whisper-conversation-modal/edit-legal-whisper-conversation-form-modal.container.js";
import { convertApiFeedbackToEntity as O, convertEntityFeedbackToApi as f } from "./utils/webdox-ai-api.utils.js";
import { findPlanByName as D, getUsagePlanData as G, getWebdoxAIUsageStatus as d, isUsagePlanFound as H, planHasCredits as g } from "./utils/webdox-ai-plans.utils.js";
import { ALL_MESSAGE_LAYOUT_KINDS as u, DEFAULT_CHAT_BOT_CHUNK_STATE as P, GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD as U, GENERATIVE_ANSWER_WORD_PROPS as W, GENERATIVE_TEXT_VARIANT as X } from "./constants/chat-bot.constant.js";
import { ConversationConstants as V, conversationConstants as c } from "./constants/conversation.constant.js";
import { MessageConstants as F, messageConstants as h } from "./constants/message.constant.js";
import { AssistantTrackingConstants as k, assistantTrackingConstants as Z } from "./constants/assistant-tracking.constant.js";
import { AssistantConstants as K, assistantConstants as y } from "./constants/assistant.constant.js";
import { CustomPromptAction as w } from "./constants/custom-prompt-modals.constants.js";
import { CHAT_QUESTION_MAX_WIDTH as j, CHAT_SHORTCUT_HEIGHT as q, DATA_EXTRACTION_BETA_ICON_SIZE as J, DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS as $, INFORMATION_POPOVER_WIDTH as oo, MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH as to, MAX_CHAT_MESSAGE_TABLE_HEIGHT as eo, MAX_CHAT_SHORTCUT_HEIGHT as ro, MAX_EXPANDED_CHAT_WIDTH as Eo, MESSAGES_SCROLL_OFFSET as _o, MESSAGE_ANIMATION_DURATION_MS as ao, MESSAGE_FOOTER_BUTTON_KIND_MAP as so, MESSAGE_MAX_LENGTH as Ao, MIN_LEGAL_QUOTES_VISIBLE as To, MIN_QUOTES_VISIBLE as no, VIRTUALIZED_LIST_ITEMS_GAP as Io, VIRTUALIZED_LIST_OVERSCAN as So, VIRTUALIZED_LIST_PADDING as Co, VIRTUALIZED_MESSAGE_ESTIMATE_SIZE as mo } from "./constants/webdox-ai.constants.js";
import { WEBDOX_AI_COLORS as po } from "./constants/webdox-ai-colors.constants.js";
import { ALL_QUOTES_VARIANTS as No, INDEX_ID_KEY_REGEX as Ro, WEBDOX_AI_PAGE_REGEX as Mo, WEBDOX_AI_RANGES_REGEX as Oo, WEBDOX_AI_RANGE_REGEX as fo } from "./constants/webdox-ai-regex.constants.js";
import { useChatBotChunkGenerativeText as Do } from "./hooks/use-chat-bot-chunk-generative-text.js";
import { useConversationState as Ho } from "./hooks/use-conversation-state.js";
import { useMessages as lo } from "./hooks/use-messages.hook.js";
import { useVirtualizedMessageScroll as Po } from "./hooks/use-virtualized-messages-scroll.hook.js";
import { useCustomPromptModalsContext as Wo } from "./hooks/use-custom-prompt-modals-context.hook.js";
import { useAnswerRatingValidationSchema as Bo } from "./hooks/use-answer-rating-validation-schema.hook.js";
import { useAnswerRatingNavigation as co } from "./hooks/use-answer-rating-navigation.hook.js";
import { useChatAssistantTracking as Fo } from "./hooks/use-chat-assistant-tracking.js";
import { useCustomPromptValidationSchema as bo } from "./hooks/use-custom-prompt-validation-schema.hook.js";
import { useMessageTableHeaderHover as Zo } from "./hooks/use-message-table-header-hover.hook.js";
import { usePartialQuotesRendering as Ko } from "./hooks/use-partial-quotes-rendering.hook.js";
export {
  u as ALL_MESSAGE_LAYOUT_KINDS,
  No as ALL_QUOTES_VARIANTS,
  K as AssistantConstants,
  k as AssistantTrackingConstants,
  j as CHAT_QUESTION_MAX_WIDTH,
  q as CHAT_SHORTCUT_HEIGHT,
  T as ChatBotNegativeFeedbackModal,
  I as ChatBotNegativeFeedbackModalContainer,
  V as ConversationConstants,
  w as CustomPromptAction,
  C as CustomPromptFormModal,
  J as DATA_EXTRACTION_BETA_ICON_SIZE,
  P as DEFAULT_CHAT_BOT_CHUNK_STATE,
  $ as DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS,
  i as DeleteCustomPromptModal,
  x as DeleteLegalWhisperConversationModal,
  R as EditLegalWhisperConversationFormModalContainer,
  U as GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD,
  W as GENERATIVE_ANSWER_WORD_PROPS,
  X as GENERATIVE_TEXT_VARIANT,
  Ro as INDEX_ID_KEY_REGEX,
  oo as INFORMATION_POPOVER_WIDTH,
  _ as LegalWhisperConversationsContext,
  to as MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH,
  eo as MAX_CHAT_MESSAGE_TABLE_HEIGHT,
  ro as MAX_CHAT_SHORTCUT_HEIGHT,
  Eo as MAX_EXPANDED_CHAT_WIDTH,
  _o as MESSAGES_SCROLL_OFFSET,
  ao as MESSAGE_ANIMATION_DURATION_MS,
  so as MESSAGE_FOOTER_BUTTON_KIND_MAP,
  Ao as MESSAGE_MAX_LENGTH,
  To as MIN_LEGAL_QUOTES_VISIBLE,
  no as MIN_QUOTES_VISIBLE,
  F as MessageConstants,
  s as ORGANIZATION_ENTITY,
  Io as VIRTUALIZED_LIST_ITEMS_GAP,
  So as VIRTUALIZED_LIST_OVERSCAN,
  Co as VIRTUALIZED_LIST_PADDING,
  mo as VIRTUALIZED_MESSAGE_ESTIMATE_SIZE,
  po as WEBDOX_AI_COLORS,
  Mo as WEBDOX_AI_PAGE_REGEX,
  Oo as WEBDOX_AI_RANGES_REGEX,
  fo as WEBDOX_AI_RANGE_REGEX,
  e as WebdoxAIBroadcastProvider,
  y as assistantConstants,
  Z as assistantTrackingConstants,
  c as conversationConstants,
  O as convertApiFeedbackToEntity,
  f as convertEntityFeedbackToApi,
  D as findPlanByName,
  G as getUsagePlanData,
  r as getWebdoxAIBroadcastContext,
  d as getWebdoxAIUsageStatus,
  H as isUsagePlanFound,
  h as messageConstants,
  g as planHasCredits,
  co as useAnswerRatingNavigation,
  Bo as useAnswerRatingValidationSchema,
  Fo as useChatAssistantTracking,
  Do as useChatBotChunkGenerativeText,
  Ho as useConversationState,
  Wo as useCustomPromptModalsContext,
  bo as useCustomPromptValidationSchema,
  Zo as useMessageTableHeaderHover,
  lo as useMessages,
  Ko as usePartialQuotesRendering,
  Po as useVirtualizedMessageScroll
};
//# sourceMappingURL=index.js.map
