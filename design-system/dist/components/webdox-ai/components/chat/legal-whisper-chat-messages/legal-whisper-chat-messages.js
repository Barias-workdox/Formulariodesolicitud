import { jsx as _ } from "react/jsx-runtime";
import { memo as E, useMemo as P } from "react";
import "baseui/typography";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import "@carbon/icons-react";
import "baseui/input";
import "baseui/popover";
import "baseui";
import "../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../avatar/avatar.styles.js";
import "baseui/modal";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../text/text.js";
import "../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../background-icon/background-icon.styles.js";
import "../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import { Messages as g } from "../../../../messages/messages.js";
import { CHAT_MESSAGES_KIND_MAP as j } from "../../../constants/chat-messages.constants.js";
import "../../../../message-box/next/contexts/message-box.context.js";
import "@tiptap/react";
import "../../../../message-box/next/components/basic-message-box-actions/styled-components/styled-desktop-wrapper.js";
import "../../../../message-box/next/components/basic-message-box-actions/styled-components/styled-mobile-wrapper.js";
import "../../../../message-box/next/utils/compose-message-box-test-id.utils.js";
import "../../../../message-box/next/components/message-box-actions/styled-components/styled-container.js";
import "../../../../message-box/next/components/message-box-actions/styled-components/styled-extra-actions-container.js";
import "../../../../message-box/next/styled-components/styled-root.js";
import "../../../../message-box/next/styled-components/styled-message-box-container.js";
import "../../../../message-box/next/styled-components/styled-textarea-container.js";
import "../../../../message-box/next/styled-components/styled-addons-container.js";
import "../../../../message-box/next/components/text-editor-toolbar/styled-components/styled-container.js";
import "../../../../message-box/next/components/compact-message-box-actions/styled-components/styled-container.js";
import "../../../../message-box/next/providers/message-box.provider.js";
import "../../../../notification/next/notification.js";
import "../../../constants/webdox-ai-regex.constants.js";
import "../../../contexts/plan-usage.context.js";
import "../../../../popover/popover.styles.js";
import "../../../../list/list.js";
import "../../../../list/virtualized-list.js";
import "../../../../list/components/avatar-list-item/avatar-list-item.js";
import "../../../../list/components/file-list-item/file-list-item.js";
import "../../../../list/components/list-item/list-item.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-empty-state-container.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-footer.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-popover-content.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-prompts-list.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-header.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-item-end-enhancer.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-container.js";
import "nanoid";
import "../../../contexts/custom-prompt-modals.context.js";
import "zod";
import "../../webdox-ai-button/webdox-ai-button.js";
import "../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "../../../../truncated-text/truncated-text.js";
import "../../webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../assistant-layout/assistant-layout.js";
import "../../webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../../legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../../data-table/data-table.styles.js";
import "../../business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../../constants/placement.constants.js";
import "../../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../../dynamic-dialog/next/components/styled-components.js";
import "../../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../../../tag/next/tag.styled-components.js";
import "../../usage-overview-popover/usage-overview-popover.js";
import "../../text-rotator/text-rotator.styles.js";
import "../../data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../../data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../data-extraction/data-extraction.styles.js";
import "../../data-extraction/styled-components/styled-container.js";
import "../../data-extraction/styled-components/styled-header.js";
import "../../data-extraction/styled-components/styled-content.js";
import "../../data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../webdox-ai-spinner/styled-components/styled-container.js";
import "../../brain-companion-layout/styled-components/styled-container.js";
import "../../brain-companion-layout/styled-components/styled-chat-container.js";
import "../../legal-whisper-layout/styled-components/styled-container.js";
import "../../legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../../virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../virtualized-conversations-list/styled-components/styled-list.js";
import "../../prompt-quick-actions/styled-components/styled-prompt-quick-actions.js";
import "../chat-composer/styled-components/styled-extra-actions-container.js";
import "../chat-composer/styled-components/styled-usage-plan-container.js";
import "../chat-composer/styled-components/styled-settings-container.js";
import "../chat-composer/styled-components/styled-conversation-selector-wrapper.js";
import { LegalWhisperChatComposer as x } from "../chat-composer/legal-whisper-chat-composer.js";
import { VirtualizedMessagesList as z } from "../chat-messages/components/virtualized-messages-list/virtualized-messages-list.js";
const B = ({ message: o }) => {
  const { kind: m } = o, { Component: r } = j[m];
  return /* @__PURE__ */ _(r, { ...o });
}, H = ({
  areaOptions: o,
  selectedArea: m,
  countryOptions: r,
  selectedCountry: e,
  dataTestId: p,
  disabled: t,
  isGeneratingAnswer: i,
  messages: v,
  showSuggestionList: s,
  showSettingsSelector: a,
  showUnratedAnswerAlert: M,
  suggestionList: f,
  zIndex: c,
  onAreaChange: l,
  onCountryChange: L,
  onCreateMessage: h,
  onRateAnswer: C,
  onSuggestionClick: W
}) => {
  const D = P(
    () => ({
      MessageComposer: {
        component: x,
        props: {
          dataTestId: p,
          areaOptions: o,
          selectedArea: m,
          countryOptions: r,
          selectedCountry: e,
          disabled: t,
          isGeneratingAnswer: i,
          showSuggestionList: s,
          showSettingsSelector: a,
          showUnratedAnswerAlert: M,
          suggestionList: f,
          zIndex: c,
          onAreaChange: l,
          onCountryChange: L,
          onCreateMessage: h,
          onRateAnswer: C,
          onSuggestionClick: W
        }
      },
      MessageItem: {
        component: B
      },
      MessageList: {
        component: z,
        props: {
          isGeneratingAnswer: i
        }
      }
    }),
    [
      p,
      o,
      m,
      r,
      e,
      t,
      i,
      s,
      a,
      M,
      f,
      c,
      l,
      L,
      h,
      C,
      W
    ]
  );
  return /* @__PURE__ */ _(
    g,
    {
      "data-testid": p,
      isLoading: t,
      isMentionable: !1,
      isPaginated: !1,
      direction: "reverse",
      showBorder: !1,
      canCreate: !0,
      canUpdate: !1,
      canDelete: !1,
      currentUserId: -1,
      messages: v,
      overrides: D
    }
  );
}, Dr = E(H);
export {
  Dr as LegalWhisperChatMessages
};
//# sourceMappingURL=legal-whisper-chat-messages.js.map
