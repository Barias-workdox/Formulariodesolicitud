import { jsx as t, jsxs as h } from "react/jsx-runtime";
import { useState as _, useCallback as e } from "react";
import { Search as O, RequestQuote as W } from "@carbon/icons-react";
import { Footer as f } from "../../../../../../footer/footer.container.js";
import { Header as x } from "../../../../../../header/header.container.js";
import { Input as P } from "../../../../../../input/next/input.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "baseui/popover";
import "baseui";
import "../../../../../../popover/popover.styles.js";
import { StatelessPopover as R } from "../../../../../../popover/stateless-popover.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../../../../utils/i18n/utils.js";
import { LegalWhisperConversationsListEmptyState as b } from "../../../../legal-whisper-conversations-list-empty-state/legal-whisper-conversations-list-empty-state.js";
import { VirtualizedConversationsList as k } from "../../../../virtualized-conversations-list/virtualized-conversations-list.js";
import { InputSelector as B } from "../input-selector/input-selector.js";
import { ConversationListItem as j } from "./components/conversation-list-item/conversation-list-item.js";
import { VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE as z } from "./conversation-selector-with-popover.constants.js";
import { popoverOverrides as F } from "./conversation-selector-with-popover.overrides.js";
import { StyledBody as M } from "./styled-components/styled-body.js";
import { StyledPopoverContent as Z } from "./styled-components/styled-popover-content.js";
import { StyledList as q } from "./styled-components/styled-list.js";
import "./styled-components/styled-list-item.js";
import "./styled-components/styled-list-item-label-wrapper.js";
const Et = ({
  dataTestId: n = "conversation-selector-with-popover",
  conversations: s = [],
  isLoadingMore: d,
  selectedConversation: i,
  searchValue: l = "",
  onSelectConversation: g,
  onCreateConversation: a,
  onEditConversation: v,
  onDeleteConversation: C,
  onSearch: o,
  onLoadMoreConversations: S,
  zIndex: m
}) => {
  const [c, u] = _(!1), { t: p } = T(), E = s.length === 0 && l.trim().length > 0, r = e(() => {
    o(""), u(!1);
  }, [o]), I = e(() => {
    u(!0);
  }, []), L = e(
    (A) => {
      o(A.target.value);
    },
    [o]
  ), w = e(() => {
    o("");
  }, [o]), y = e(() => {
    a(), r();
  }, [a, r]);
  return /* @__PURE__ */ t(
    R,
    {
      isOpen: c,
      onClickOutside: r,
      onEsc: r,
      ignoreBoundary: !0,
      placement: "topRight",
      zIndex: m,
      overrides: F,
      content: /* @__PURE__ */ h(Z, { children: [
        /* @__PURE__ */ t(
          x,
          {
            title: p("webdoxAI.legalWhisperSettings.recentConversations"),
            onClose: r,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ h(M, { children: [
          /* @__PURE__ */ t(
            P,
            {
              "data-testid": `${n}__search-input`,
              autoFocus: !0,
              startEnhancer: /* @__PURE__ */ t(O, {}),
              onClear: w,
              value: l,
              onChange: L,
              placeholder: p("general.search")
            }
          ),
          E ? /* @__PURE__ */ t(b, {}) : /* @__PURE__ */ t(q, { children: /* @__PURE__ */ t(
            k,
            {
              ConversationListItemComponent: j,
              estimateSize: z,
              conversations: s,
              dataTestId: n,
              isLoadingMore: d,
              onDeleteConversation: C,
              onEditConversation: v,
              onPageEnd: S,
              onSelectConversation: g,
              selectedConversation: i,
              zIndex: m
            }
          ) })
        ] }),
        /* @__PURE__ */ t(
          f,
          {
            size: "small",
            fullWidthActions: !0,
            actions: /* @__PURE__ */ t(
              f.Button,
              {
                appearance: "outlined",
                onClick: y,
                startEnhancer: W,
                children: p("webdoxAI.legalWhisperSettings.newConversation")
              }
            )
          }
        )
      ] }),
      showArrow: !0,
      children: /* @__PURE__ */ t(
        B,
        {
          value: (i == null ? void 0 : i.title) ?? "",
          isOpen: c,
          handleOpen: I,
          zIndex: m,
          dataTestId: n
        }
      )
    }
  );
};
export {
  Et as ConversationSelectorWithPopover
};
//# sourceMappingURL=conversation-selector-with-popover.js.map
