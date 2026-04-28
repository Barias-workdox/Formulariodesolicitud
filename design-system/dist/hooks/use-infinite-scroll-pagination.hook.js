import { jsx as f } from "react/jsx-runtime";
import { useRef as r, useEffect as a } from "react";
import { useIntersection as c } from "react-use";
const u = ({
  "data-testid": s = "design_system__infinite_scroll_pagination",
  disabled: e = !1,
  intersectionOptions: o = {},
  onPageEnd: t
}) => {
  const n = r(null), { isIntersecting: i } = c(n, o) || {};
  return a(() => {
    !e && i && t();
  }, [e, i, t]), {
    endOfPageNode: /* @__PURE__ */ f(
      "div",
      {
        "data-testid": `${s}-end_node`,
        ref: n
      }
    )
  };
};
export {
  u as useInfiniteScrollPagination
};
//# sourceMappingURL=use-infinite-scroll-pagination.hook.js.map
