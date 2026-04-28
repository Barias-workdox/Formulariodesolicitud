import { jsx as e } from "react/jsx-runtime";
import { useCallback as L, useMemo as D } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../utils/i18n/utils.js";
import { StyledChatContainer as q } from "../components/assistant-layout/assistant-layout.styles.js";
import "dompurify";
import "../../text/text.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-default-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-primary-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-secondary-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-tertiary-message-layout.js";
import "../components/chat/chat-messages/components/user-message/styled-components/styled-alignment-container.js";
import "../components/chat/chat-messages/chat-messages.js";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "../../message-box/next/contexts/message-box.context.js";
import "@tiptap/react";
import "../../message-box/next/components/basic-message-box-actions/styled-components/styled-desktop-wrapper.js";
import "../../message-box/next/components/basic-message-box-actions/styled-components/styled-mobile-wrapper.js";
import "../../message-box/next/utils/compose-message-box-test-id.utils.js";
import "../../message-box/next/components/message-box-actions/styled-components/styled-container.js";
import "../../message-box/next/components/message-box-actions/styled-components/styled-extra-actions-container.js";
import "react-use";
import "../../message-box/next/styled-components/styled-root.js";
import "../../message-box/next/styled-components/styled-message-box-container.js";
import "../../message-box/next/styled-components/styled-textarea-container.js";
import "../../message-box/next/styled-components/styled-addons-container.js";
import "../../message-box/next/components/text-editor-toolbar/styled-components/styled-container.js";
import "../../message-box/next/components/compact-message-box-actions/styled-components/styled-container.js";
import "../../message-box/next/providers/message-box.provider.js";
import "../../notification/next/notification.js";
import "../constants/webdox-ai-regex.constants.js";
import "../contexts/plan-usage.context.js";
import "baseui/tooltip";
import "baseui/popover";
import "../../popover/popover.styles.js";
import "../../list/list.js";
import "../../list/virtualized-list.js";
import "../../list/components/avatar-list-item/avatar-list-item.js";
import "../../list/components/file-list-item/file-list-item.js";
import "../../list/components/list-item/list-item.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-empty-state-container.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-footer.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-popover-content.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-prompts-list.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-header.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-item-end-enhancer.js";
import "../components/add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-container.js";
import "../../background-icon/background-icon.styles.js";
import { conversationUtils as B } from "../utils/conversation.util.js";
import { messageUtils as U } from "../utils/message.util.js";
import "../contexts/custom-prompt-modals.context.js";
import "zod";
import "../components/webdox-ai-button/webdox-ai-button.js";
import "../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
import "../../menu/stateful-menu/stateful-menu.js";
import "../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "../../avatar/avatar.styles.js";
import "../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/tag";
import "../../truncated-text/truncated-text.js";
import "../components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../components/assistant-layout/assistant-layout.js";
import "../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../data-table/data-table.styles.js";
import "../components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../constants/placement.constants.js";
import "../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../dynamic-dialog/next/components/styled-components.js";
import "../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../tag/next/tag.styled-components.js";
import "../components/usage-overview-popover/usage-overview-popover.js";
import "../components/text-rotator/text-rotator.styles.js";
import "../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../components/data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../components/data-extraction/data-extraction.styles.js";
import "../components/data-extraction/styled-components/styled-container.js";
import "../components/data-extraction/styled-components/styled-header.js";
import "../components/data-extraction/styled-components/styled-content.js";
import "../components/data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../components/webdox-ai-spinner/styled-components/styled-container.js";
import "../components/brain-companion-layout/styled-components/styled-container.js";
import "../components/brain-companion-layout/styled-components/styled-chat-container.js";
import "../components/legal-whisper-layout/styled-components/styled-container.js";
import "../components/legal-whisper-layout/styled-components/styled-chat-container.js";
import "../components/legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../components/legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../components/virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../components/virtualized-conversations-list/styled-components/styled-list.js";
import "../components/prompt-quick-actions/styled-components/styled-prompt-quick-actions.js";
import "../components/chat/chat-composer/styled-components/styled-extra-actions-container.js";
import "../components/chat/chat-composer/styled-components/styled-usage-plan-container.js";
import "../components/chat/chat-composer/styled-components/styled-settings-container.js";
import "../components/chat/chat-composer/styled-components/styled-conversation-selector-wrapper.js";
import "../contexts/legal-whisper-conversations.context.js";
import "../../footer/footer.container.js";
import "../../header/header.container.js";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../input/next/input.overrides.js";
import "../components/conversation-list-item-content/styled-components/styled-title-wrapper.js";
import "../components/chat/chat-composer/components/conversation-selector-with-popover/styled-components/styled-body.js";
import "../components/chat/chat-composer/components/conversation-selector-with-popover/styled-components/styled-popover-content.js";
import "../components/chat/chat-composer/components/conversation-selector-with-popover/styled-components/styled-list.js";
import "../components/chat/chat-composer/components/conversation-selector-with-popover/styled-components/styled-list-item.js";
import "../components/chat/chat-composer/components/conversation-selector-with-popover/styled-components/styled-list-item-label-wrapper.js";
import "react-hook-form";
import "baseui/form-control";
import "baseui/textarea";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../select/next/styled-components/styled-icons-container.js";
import "../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../select/next/components/select-dropdown-container.js";
import "../../select/next/components/select-optgroup-header.js";
import "../../radio/radio-group.js";
import "baseui/radio";
import "../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../color-picker/next/color-picker.js";
import "../../checkbox/checkbox.js";
import "../../file-uploader/file-uploader.js";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../dynamic-text-input/dynamic-text-input.js";
import "../../input/input.js";
import "../../layouts/title-layout/title-layout.styles.js";
import "../components/chat/chat-composer/components/country-and-area-selector-with-popover/styled-components/styled-body.js";
import "../components/chat/chat-composer/components/country-and-area-selector-with-popover/styled-components/styled-popover-content.js";
import "../components/chat/chat-composer/suggestion-list/suggestion-list.styled.js";
import "../components/chat/chat-composer/unrated-answer-alert/styled-components/styled-container.js";
import { LegalWhisperChatMessages as j } from "../components/chat/legal-whisper-chat-messages/legal-whisper-chat-messages.js";
const br = ({
  areaOptions: s,
  selectedArea: a,
  conversation: l,
  countryOptions: n,
  selectedCountry: d,
  dataTestId: g,
  disabled: f = !1,
  isGeneratingAnswer: c = !1,
  showSettingsSelector: u = !1,
  showSuggestionList: h = !1,
  showUnratedAnswerAlert: w,
  suggestionList: C,
  zIndex: i,
  onAreaChange: A,
  onCopyToClipboardButtonClick: r,
  onCountryChange: M,
  onCreateMessage: b,
  onRateAnswer: y,
  onSuggestionClick: W
}) => {
  const { t } = T(), { questions: o = [] } = l ?? {}, v = o.length === 0, m = L(
    ({ id: k }) => {
      const p = B.findAnswerByAnswerId(o, k);
      p && r({ id: p.id });
    },
    [r, o]
  ), x = [
    {
      variant: "systemAnswer",
      id: "legal-whisper-default-message",
      kind: "answer",
      value: t("webdoxAI.legalWhisperDefaultMessage.content"),
      tempProps: {
        title: t("webdoxAI.legalWhisperDefaultMessage.title"),
        footerText: t("webdoxAI.legalWhisperDefaultMessage.disclaimer")
      },
      content: "",
      read: !0
    }
  ], I = D(
    () => U.mapQuestionsIntoMessages(o, {
      onCopyToClipboardButtonClick: m,
      disclaimer: t("webdoxAI.chat.legalWhisper.disclaimer"),
      showFeedback: !1,
      zIndex: i,
      questionLayoutKind: "tertiary",
      loadingVariant: "descriptiveLoading",
      suiteAIOption: "legalWhisper"
    }),
    [o, m, t, i]
  );
  return /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(
    j,
    {
      areaOptions: s,
      selectedArea: a,
      countryOptions: n,
      selectedCountry: d,
      dataTestId: g,
      disabled: f,
      isGeneratingAnswer: c,
      messages: v ? x : I,
      onAreaChange: A,
      onCountryChange: M,
      onCreateMessage: b,
      onRateAnswer: y,
      onSuggestionClick: W,
      showSettingsSelector: u,
      showSuggestionList: h,
      showUnratedAnswerAlert: w,
      suggestionList: C,
      zIndex: i
    }
  ) });
};
export {
  br as LegalWhisperChatController
};
//# sourceMappingURL=legal-whisper-chat.controller.js.map
