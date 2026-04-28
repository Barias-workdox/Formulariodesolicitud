import { jsxs as E, jsx as t } from "react/jsx-runtime";
import { useCallback as m } from "react";
import { Search as T } from "@carbon/icons-react";
import { Input as L } from "../../../../../input/next/input.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import { Text as u } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as v } from "../../../../../utils/i18n/utils.js";
import { useCss as _ } from "../../../../../utils/hooks/use-css.js";
import { LegalWhisperConversationsListEmptyState as x } from "../../../legal-whisper-conversations-list-empty-state/legal-whisper-conversations-list-empty-state.js";
import { VirtualizedConversationsList as y } from "../../../virtualized-conversations-list/virtualized-conversations-list.js";
import { VIRTUALIZED_LIST_ITEMS_GAP as A, VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE as W } from "../../legal-whisper-settings.constants.js";
import { ConversationListItem as b } from "./components/conversation-list-item/conversation-list-item.js";
import "./styled-components/styled-list-item.js";
import { StyledContainer as M } from "./styled-components/styled-container.js";
import { StyledEmptyStateWrapper as R } from "./styled-components/styled-empty-state-wrapper.js";
const ot = ({
  dataTestId: n,
  zIndex: s,
  conversations: o,
  isLoadingMore: p = !1,
  selectedConversation: a,
  searchValue: e = "",
  onSelectConversation: l,
  onEditConversation: c,
  onDeleteConversation: f,
  onLoadMoreConversations: h,
  onSearch: r
}) => {
  const { t: i } = v(), { theme: I } = _(), g = o.length === 0 && e.trim().length > 0, C = m(() => {
    r("");
  }, [r]), d = m(
    (S) => {
      r(S.target.value);
    },
    [r]
  );
  return /* @__PURE__ */ E(M, { children: [
    /* @__PURE__ */ t(
      u,
      {
        variant: "body",
        fontWeight: "700",
        margin: `${I.spacing.spacingXs} 0`,
        children: i("webdoxAI.legalWhisperSettings.recentConversations")
      }
    ),
    /* @__PURE__ */ t(
      L,
      {
        startEnhancer: /* @__PURE__ */ t(T, {}),
        onClear: C,
        value: e,
        onChange: d,
        placeholder: i("general.search")
      }
    ),
    g ? /* @__PURE__ */ t(R, { children: /* @__PURE__ */ t(x, {}) }) : /* @__PURE__ */ t(
      y,
      {
        ConversationListItemComponent: b,
        conversations: o,
        dataTestId: n,
        estimateSize: W,
        isLoadingMore: p,
        listGap: A,
        onDeleteConversation: f,
        onEditConversation: c,
        onPageEnd: h,
        onSelectConversation: l,
        selectedConversation: a,
        zIndex: s
      }
    )
  ] });
};
export {
  ot as ConversationSelector
};
//# sourceMappingURL=conversation-selector.js.map
