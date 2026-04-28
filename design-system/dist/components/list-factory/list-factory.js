import { jsxs as O, jsx as i } from "react/jsx-runtime";
import { EmptyState as g } from "../empty-state/empty-state.js";
import "../list/list.js";
import { VirtualizedList as N } from "../list/virtualized-list.js";
import "../list/components/avatar-list-item/avatar-list-item.js";
import "../list/components/file-list-item/file-list-item.js";
import { ListItem as u } from "../list/components/list-item/list-item.js";
import { Spinner as x } from "../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { COMMON_HEIGHT_36 as C, COMMON_FLOATING_MAX_HEIGHT as F, COMMON_FLOATING_MAX_WIDTH as T } from "../../constants/common.constants.js";
import { SearchContainer as A } from "../search-container/search-container.js";
import { useListFactoryItems as E } from "./hooks/use-list-factory-items.hook.js";
import { LIST_MIN_WIDTH as G } from "./list-factory.constants.js";
const V = ({
  "data-testid": t = "list",
  items: r,
  isFiltrable: p = !0,
  minWidth: a = G,
  maxWidth: c = T,
  maxHeight: _ = F,
  emptyStateProps: d,
  searchValue: f = "",
  multi: l = !1,
  paginationProps: o,
  onSearchValueChange: e,
  onItemClick: h
}) => {
  const { isFetchingNextPage: m, onPageEnd: I } = o || {}, s = !!o, L = (n) => {
    h({ item: n, multi: l }), n.items && e("");
  }, { renderListItems: M } = E({
    dataTestId: t,
    items: r,
    handleItemClick: L
  }), H = r.length > 0 || s ? /* @__PURE__ */ O(
    N,
    {
      "data-testid": `${t}__list`,
      isInfinite: s,
      isFetchingNextPage: m,
      withBorder: !1,
      $maxHeight: "fit-content",
      itemHeight: parseInt(C),
      onPageEnd: I,
      children: [
        M(),
        m && /* @__PURE__ */ i(
          u,
          {
            "data-testid": `${t}__loading`,
            label: /* @__PURE__ */ i(x, { size: "sm" })
          }
        )
      ]
    }
  ) : /* @__PURE__ */ i(g, { ...d });
  return /* @__PURE__ */ i(
    A,
    {
      dataTestId: `${t}__search-container`,
      minWidth: a,
      maxWidth: c,
      maxHeight: _,
      searchValue: f,
      onSearchChange: e,
      isFiltrable: p,
      children: H
    }
  );
};
export {
  V as ListFactory
};
//# sourceMappingURL=list-factory.js.map
