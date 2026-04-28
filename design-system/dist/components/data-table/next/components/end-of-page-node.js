import { jsx as r, Fragment as l } from "react/jsx-runtime";
import { useInfiniteScrollPagination as c } from "../../../../hooks/use-infinite-scroll-pagination.hook.js";
import { INFINITE_SCROLL_PAGINATION_MARGIN as g } from "../data-table.constants.js";
import { useDataTableContext as p } from "../hooks/use-data-table-context.js";
const E = () => {
  var i, o;
  const {
    listRef: t,
    containerRef: n,
    paginationSettings: { isEnabled: a, method: d, onPageEnd: s = () => {
    } } = {}
  } = p(), e = a && d === "infinite", { endOfPageNode: m } = c({
    disabled: !e,
    intersectionOptions: {
      root: (i = n == null ? void 0 : n.current) == null ? void 0 : i.parentElement,
      rootMargin: g,
      threshold: 0.1
    },
    onPageEnd: s
  });
  return e ? /* @__PURE__ */ r("div", { style: { width: `${(o = t == null ? void 0 : t.current) == null ? void 0 : o.clientWidth}px` }, children: m }) : /* @__PURE__ */ r(l, {});
};
export {
  E as EndOfPageNode
};
//# sourceMappingURL=end-of-page-node.js.map
