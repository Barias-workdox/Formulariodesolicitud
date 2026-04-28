import { jsxs as e, Fragment as a, jsx as m } from "react/jsx-runtime";
import { Fragment as c } from "react";
import { ProgressSteps as d } from "baseui/progress-steps";
import { Spinner as g } from "../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { useInfiniteScrollPagination as h } from "../../hooks/use-infinite-scroll-pagination.hook.js";
const $ = ({
  activities: r,
  isLoading: o = !1,
  isPaginated: t = !1,
  onPageEnd: n
}) => {
  const { endOfPageNode: i } = h({
    onPageEnd: n,
    disabled: !t || o
  });
  return /* @__PURE__ */ e(a, { children: [
    /* @__PURE__ */ m(d, { children: r.map(({ id: p, component: s }, l) => {
      const f = l === r.length - 1;
      return /* @__PURE__ */ e(c, { children: [
        s,
        f && t && i
      ] }, p);
    }) }),
    o && /* @__PURE__ */ m(g, {})
  ] });
};
export {
  $ as Timeline
};
//# sourceMappingURL=timeline.js.map
