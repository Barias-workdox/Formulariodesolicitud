import { jsxs as s, Fragment as A, jsx as t } from "react/jsx-runtime";
import { ProgressSteps as x } from "baseui/progress-steps";
import { Spinner as u } from "../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { useInfiniteScrollPagination as S } from "../../hooks/use-infinite-scroll-pagination.hook.js";
import { ActivityItem as j } from "./components/activity-item/activity-item.js";
import { ActivityComment as D } from "./components/activity-comment/activity-comment.js";
import { ActivityUsers as I } from "./components/activity-users/activity-users.js";
import { ActivityDocuments as P } from "./components/activity-documents/activity-documents.js";
const G = ({
  "data-testid": a = "activity-timeline",
  activities: i = [],
  isPaginated: r,
  isLoading: o,
  onPageEnd: l = () => {
  }
}) => {
  const { endOfPageNode: f } = S({
    onPageEnd: l,
    disabled: !r || o
  });
  return /* @__PURE__ */ s(A, { children: [
    /* @__PURE__ */ t(x, { children: i.map(
      ({
        id: m,
        createdAt: d,
        overrides: y,
        description: h,
        type: v = "custom",
        extraData: { comment: e, users: n = [], documents: p = [] } = {}
      }, g) => {
        const c = g === i.length - 1;
        return /* @__PURE__ */ s(
          j,
          {
            "data-testid": `${a}__${m}-activity`,
            createdAt: d,
            description: h,
            type: v,
            overrides: y,
            isLast: c,
            children: [
              e && /* @__PURE__ */ t(D, { comment: e }),
              n.length > 0 && /* @__PURE__ */ t(I, { users: n }),
              p.length > 0 && /* @__PURE__ */ t(P, { documents: p }),
              c && r && f
            ]
          },
          m
        );
      }
    ) }),
    o && /* @__PURE__ */ t(u, {})
  ] });
};
export {
  G as ActivityTimeline
};
//# sourceMappingURL=activity-timeline.js.map
