import { jsx as C } from "react/jsx-runtime";
import { memo as Q, useMemo as R } from "react";
import "baseui/typography";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import { noop as r } from "../../../../../utils/noop.js";
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
import { Messages as b } from "../../../../messages/messages.js";
import { CHAT_MESSAGES_KIND_MAP as k } from "../../../constants/chat-messages.constants.js";
import { ChatComposer as x } from "../chat-composer/chat-composer.js";
import { LegalWhisperChatComposer as G } from "../chat-composer/legal-whisper-chat-composer.js";
import { VirtualizedMessagesList as T } from "./components/virtualized-messages-list/virtualized-messages-list.js";
const y = ({ message: m }) => {
  const { kind: p } = m, { Component: o } = k[p];
  return /* @__PURE__ */ C(o, { ...m });
}, L = ({
  "data-testid": m,
  zIndex: p,
  customPrompts: o = [],
  disabled: t = !1,
  showSettings: M,
  showSuggestions: a,
  showLegalWhisperSelector: c,
  onLegalWhisperAreaChange: s = r,
  onLegalWhisperCountryChange: _ = r,
  legalWhisperAreaOptions: v = [],
  legalWhisperCountryOptions: D,
  legalWhisperAreaSelected: j,
  legalWhisperCountrySelected: z,
  showSuggestionList: E,
  chatComposerSuggestionList: H,
  suggestionListTitle: K,
  isQuestionWritingAllowed: N,
  isSuggestionsLoading: U,
  messages: I,
  isGeneratingAnswer: i,
  composerPlaceholder: V,
  showStopButton: d,
  webdoxAIOption: f = "brainCompanion",
  showUnratedAnswerAlert: e,
  onRateAnswer: q = r,
  onCreateMessage: B,
  onSuggestionsClick: F,
  onSuggestionClick: J = r,
  onSettingsClick: X,
  onStopAnswerGeneration: Y,
  onExecuteCustomPromptAction: Z = r,
  onOpenChatComposer: $ = r
}) => {
  const P = R(
    () => ({
      MessageComposer: {
        component: f === "legalWhisper" ? G : x,
        props: {
          customPrompts: o,
          showSettings: M,
          showSuggestions: a,
          showSuggestionList: E,
          isSuggestionsLoading: U,
          "data-testid": m,
          disabled: t,
          isGeneratingAnswer: i,
          isQuestionWritingAllowed: N,
          chatComposerSuggestionList: H,
          showStopButton: d,
          // Always show the settings selector for legal whisper within chat messages
          showSettingsSelector: !0,
          onStopAnswerGeneration: Y,
          onCreateMessage: B,
          onSuggestionsClick: F,
          onSettingsClick: X,
          onSuggestionClick: J,
          onLegalWhisperAreaChange: s,
          onLegalWhisperCountryChange: _,
          legalWhisperAreaOptions: v,
          legalWhisperCountryOptions: D,
          legalWhisperAreaSelected: j,
          legalWhisperCountrySelected: z,
          suggestionListTitle: K,
          showLegalWhisperSelector: c,
          zIndex: p,
          placeholder: V,
          webdoxAIOption: f,
          onExecuteCustomPromptAction: Z,
          onOpenChatComposer: $,
          showUnratedAnswerAlert: e,
          onRateAnswer: q
        }
      },
      MessageItem: {
        component: y
      },
      MessageList: {
        component: T,
        props: {
          isGeneratingAnswer: i
        }
      }
    }),
    [
      H,
      V,
      o,
      m,
      t,
      i,
      N,
      U,
      v,
      j,
      D,
      z,
      B,
      Z,
      s,
      _,
      $,
      q,
      X,
      Y,
      J,
      F,
      c,
      M,
      d,
      E,
      a,
      e,
      K,
      f,
      p
    ]
  );
  return /* @__PURE__ */ C(
    b,
    {
      "data-testid": m,
      isLoading: t,
      isMentionable: !1,
      isPaginated: !1,
      direction: "reverse",
      showBorder: !1,
      canCreate: !0,
      canUpdate: !1,
      canDelete: !1,
      currentUserId: -1,
      messages: I,
      overrides: P
    }
  );
}, hm = Q(L);
export {
  hm as ChatMessages
};
//# sourceMappingURL=chat-messages.js.map
