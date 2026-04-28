import { jsx as i, jsxs as E } from "react/jsx-runtime";
import { useRef as I } from "react";
import { useVirtualizer as V } from "@tanstack/react-virtual";
import { Spinner as _ } from "../../../spinner/next/spinner.js";
import { useInfiniteScrollPagination as $ } from "../../../../hooks/use-infinite-scroll-pagination.hook.js";
import { StyledConversationsListSpinnerWrapper as y } from "./styled-components/styled-conversations-list-spinner-wrapper.js";
import { StyledList as L } from "./styled-components/styled-list.js";
import { VIRTUALIZED_LIST_OVERSCAN as P } from "./virtualized-conversations-list.constants.js";
const b = ({
  conversations: n,
  dataTestId: m,
  isLoadingMore: r,
  estimateSize: p,
  ConversationListItemComponent: a,
  listGap: f,
  onDeleteConversation: c,
  onEditConversation: h,
  onPageEnd: g,
  onSelectConversation: x,
  selectedConversation: o,
  zIndex: S
}) => {
  const d = I(null), s = V({
    count: n.length,
    getScrollElement: () => d.current,
    estimateSize: () => p,
    overscan: P,
    gap: f
  }), { endOfPageNode: u } = $({
    onPageEnd: () => {
      r || g();
    }
  });
  return /* @__PURE__ */ i(L, { ref: d, children: /* @__PURE__ */ i("div", { style: { height: `${s.getTotalSize()}px`, position: "relative" }, children: s.getVirtualItems().map((e) => {
    const z = e.index === n.length - 5, l = e.index === n.length - 1, t = n[e.index];
    return /* @__PURE__ */ E(
      "div",
      {
        "data-index": e.index,
        ref: s.measureElement,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${e.size}px`,
          transform: `translateY(${e.start}px)`
        },
        children: [
          /* @__PURE__ */ i(
            a,
            {
              conversation: t,
              dataTestId: `${m}__conversation-list-item-${e.index}`,
              isLast: l,
              isSelected: t.id === (o == null ? void 0 : o.id),
              onClick: () => x(t),
              onDeleteConversation: () => c(t),
              onEditConversation: () => h(t),
              zIndex: S
            }
          ),
          z && !r && u,
          l && r && /* @__PURE__ */ i(y, { children: /* @__PURE__ */ i(
            _,
            {
              dataTestId: `${m}__loading-more-spinner`,
              kind: "custom",
              size: "medium"
            }
          ) })
        ]
      },
      e.key
    );
  }) }) });
};
export {
  b as VirtualizedConversationsList
};
//# sourceMappingURL=virtualized-conversations-list.js.map
