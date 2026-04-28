import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { Avatar as h } from "../../../avatar/avatar.js";
import { Text as m } from "../../../text/text.js";
import { StatefulTooltipNext as f } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as v } from "../../../utils/hooks/use-css.js";
import { useTranslation as S } from "../../../utils/i18n/utils.js";
import { CollaborationDocumentTag as x } from "./collaboration-document-tag/collaboration-document-tag.js";
import { styles as i } from "./document-approval-details-list.styles.js";
const c = (t) => `${t.firstName} ${t.lastName}`.trim() ?? "", N = (t, a) => !t || !a ? null : t.resources.find(({ document: n }) => n.id === a) || null, L = ({
  subtasks: t,
  selectedDocumentId: a
}) => {
  const { t: n } = S(), {
    itemListContentStyles: d,
    thirdPartyContentStyles: p,
    itemListWrapperStyles: u,
    reasonRejectionLabelStyles: y,
    theme: s
  } = v(i);
  return /* @__PURE__ */ e("div", { children: t.map((r) => {
    const o = N(r, a);
    return o ? /* @__PURE__ */ l(
      "div",
      {
        "aria-label": "document-approval-list",
        className: u,
        children: [
          /* @__PURE__ */ e(
            h,
            {
              size: "32px",
              name: c(r.thirdParty)
            }
          ),
          /* @__PURE__ */ l("div", { className: d, children: [
            /* @__PURE__ */ l("div", { className: p, children: [
              /* @__PURE__ */ e(
                m,
                {
                  variant: "bodySmall",
                  $style: i.thirdPartyText(),
                  color: s.colors.neutral,
                  children: c(r.thirdParty)
                }
              ),
              /* @__PURE__ */ e(
                m,
                {
                  variant: "bodySmall",
                  $style: i.thirdPartyText(),
                  color: s.colors.neutralSubdued,
                  children: /* @__PURE__ */ e(
                    f,
                    {
                      placement: "bottom",
                      showArrow: !0,
                      content: r.thirdParty.email,
                      children: r.thirdParty.email
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ e(
              x,
              {
                status: o.status || "pending",
                date: o.updatedAt
              }
            ),
            o.status === "rejected" && /* @__PURE__ */ l(
              m,
              {
                variant: "bodySmall",
                $style: i.reasonRejectionStyles(s),
                children: [
                  /* @__PURE__ */ e("span", { className: y, children: `${n("collaborationDetails.reason")}: ` }),
                  o.rejectionReason
                ]
              }
            )
          ] })
        ]
      },
      r.id
    ) : null;
  }) });
};
export {
  L as DocumentApprovalDetailsList,
  c as getThirdPartyName
};
//# sourceMappingURL=document-approval-details-list.js.map
