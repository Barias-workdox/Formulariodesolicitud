import { jsxs as E, jsx as W } from "react/jsx-runtime";
import { useState as n, useCallback as m, useMemo as O } from "react";
import { LegalWhisperConversationsContext as j } from "../contexts/legal-whisper-conversations.context.js";
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
import "react-hook-form";
import "baseui/form-control";
import "../../text/text.js";
import "baseui/tooltip";
import "../../radio/radio-group.js";
import "baseui/radio";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../input/next/input.overrides.js";
import "../webdox-ai.styles.js";
import "yup";
import "baseui/checkbox";
import "../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../select/next/styled-components/styled-icons-container.js";
import "../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../select/next/components/select-dropdown-container.js";
import "../../select/next/components/select-optgroup-header.js";
import "../../forms/components/datepicker/datepicker-control.js";
import "../../color-picker/next/color-picker.js";
import "../../checkbox/checkbox.js";
import "../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../avatar/avatar.styles.js";
import "../../input/input.js";
import "../../layouts/title-layout/title-layout.styles.js";
import "../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../tag/next/tag.styled-components.js";
import { DeleteLegalWhisperConversationModal as P } from "../modals/delete-legal-whisper-conversation-modal/delete-legal-whisper-conversation-modal.js";
import { EditLegalWhisperConversationFormModalContainer as T } from "../modals/edit-legal-whisper-conversation-modal/edit-legal-whisper-conversation-form-modal.container.js";
const Zt = ({
  children: b,
  conversations: s,
  isLoadingMoreConversations: l = !1,
  onCreateConversation: a,
  onDeleteConversation: d,
  onEditConversation: c,
  onLoadMoreConversations: u,
  onSearch: f,
  onSelectConversation: h,
  searchValue: v,
  selectedConversation: C,
  zIndex: g
}) => {
  const [L, p] = n(), [t, e] = n(), [k, i] = n(!1), o = m(() => {
    p(void 0), i(!1), setTimeout(() => {
      e(void 0);
    }, 500);
  }, []), w = m(async () => {
    if (t) {
      i(!0);
      try {
        await d(t), o();
      } catch {
        i(!1);
      }
    }
  }, [o, d, t]), x = m(
    async (r) => {
      const { title: M } = r;
      if (!(!t || !M)) {
        i(!0);
        try {
          await c({
            conversation: t,
            newValues: { title: M }
          }), o();
        } catch {
          i(!1);
        }
      }
    },
    [t, o, c]
  ), y = m(
    (r) => {
      p(
        "edit"
        /* Edit */
      ), e(r);
    },
    []
  ), A = m(
    (r) => {
      p(
        "delete"
        /* Delete */
      ), e(r);
    },
    []
  ), D = O(
    () => ({
      conversations: s,
      isLoadingMoreConversations: l,
      searchValue: v,
      selectedConversation: C,
      onCreateConversation: a,
      onDeleteConversation: A,
      onEditConversation: y,
      onLoadMoreConversations: u,
      onSearch: f,
      onSelectConversation: h
    }),
    [
      s,
      A,
      y,
      l,
      a,
      u,
      f,
      h,
      v,
      C
    ]
  );
  return /* @__PURE__ */ E(j.Provider, { value: D, children: [
    b,
    /* @__PURE__ */ W(
      P,
      {
        conversationTitle: (t == null ? void 0 : t.title) ?? "",
        isLoading: k,
        isOpen: L === "delete",
        onClose: o,
        onSubmit: w,
        zIndex: g
      }
    ),
    /* @__PURE__ */ W(
      T,
      {
        conversation: t,
        isOpen: L === "edit",
        onClose: o,
        onSubmit: x,
        zIndex: g
      }
    )
  ] });
};
export {
  Zt as LegalWhisperConversationsProvider
};
//# sourceMappingURL=legal-whisper-conversations.provider.js.map
