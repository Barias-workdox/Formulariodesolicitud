import { jsx as s, Fragment as T, jsxs as U } from "react/jsx-runtime";
import { useMemo as p } from "react";
import { Tag as P } from "../../../tag/tag.js";
import { useCss as y } from "../../../utils/hooks/use-css.js";
import { useTranslation as A } from "../../../utils/i18n/utils.js";
import { DocumentUploadDetailsReason as N } from "../document-upload-details-reason/document-upload-details-reason.js";
import { DocumentUploadSubtaskDetails as O } from "../document-upload-sub-task-details/document-upload-sub-task-details.js";
import { taskStyles as j } from "./document-upload-task-details.styles.js";
import { DocumentUploadTaskTitle as b } from "./document-upload-task-title.js";
const w = (t, a, i) => ({
  documentPending: {
    color: a.colors.warningStrong,
    kind: "warning",
    text: t("collaborationUploadDetails.documentStatus.pending")
  },
  documentApproved: {
    color: a.colors.positiveStrong,
    kind: "positive",
    text: t("collaborationUploadDetails.documentStatus.approved")
  }
})[i], E = ({
  subtasks: t,
  documentTypeLabel: a,
  categoryLabel: i,
  reason: d,
  uniqueId: u,
  required: g,
  description: f,
  onDocumentClick: D
}) => {
  const { taskContainer: v, theme: m } = y(j), { t: l } = A(), c = t.some(({ resources: o }) => o.length === 0), S = p(() => {
    const o = t.reduce((e, r) => {
      const n = r.thirdParty.id;
      return (!e[n] || r.createdAt > e[n].createdAt) && (e[n] = r), e;
    }, {});
    return Object.values(o);
  }, [t]), { color: k, kind: h, text: x } = p(() => w(l, m, c ? "documentPending" : "documentApproved"), [c, l, m]);
  return /* @__PURE__ */ s(T, { children: /* @__PURE__ */ U(
    "div",
    {
      "data-testid": "document-upload-task-item",
      className: v,
      children: [
        /* @__PURE__ */ s(
          P,
          {
            variant: "solid",
            kind: h,
            color: k,
            size: "small",
            children: x
          }
        ),
        /* @__PURE__ */ s(
          b,
          {
            uniqueId: u,
            documentTypeLabel: a,
            categoryLabel: i,
            required: g,
            description: f
          }
        ),
        S.map(({ resources: o, id: e, thirdParty: r }) => {
          const [n] = o;
          return /* @__PURE__ */ s(
            O,
            {
              resource: n,
              thirdPartyName: `${r.firstName} ${r.lastName}`,
              onDocumentClick: D
            },
            e
          );
        }),
        d && /* @__PURE__ */ s(N, { reason: d })
      ]
    }
  ) });
};
export {
  E as DocumentUploadTaskDetails
};
//# sourceMappingURL=document-upload-task-details.js.map
