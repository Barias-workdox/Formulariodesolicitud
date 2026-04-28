import { jsx as l } from "react/jsx-runtime";
import { useInfiniteScrollPagination as c } from "../../../hooks/use-infinite-scroll-pagination.hook.js";
import { INFINITE_SCROLL_PAGINATION_MARGIN as m } from "../data-table.constants.js";
import { useDataTableContext as f } from "../hooks/use-data-table-context.js";
const h = () => {
  var e, i;
  const {
    listRef: n,
    containerRef: o,
    paginationSettings: { isEnabled: r, method: a, onPageEnd: d } = {}
  } = f(), t = r && a === "infinite", { endOfPageNode: s } = c({
    disabled: !t,
    intersectionOptions: {
      root: (e = o.current) == null ? void 0 : e.parentElement,
      rootMargin: m,
      threshold: 0.1
    },
    onPageEnd: d
  });
  return t ? /* @__PURE__ */ l("div", { style: { width: `${(i = n == null ? void 0 : n.current) == null ? void 0 : i.clientWidth}px` }, children: s }) : null;
};
export {
  h as EndOfPageNode
};
//# sourceMappingURL=end-of-page-node.js.map
