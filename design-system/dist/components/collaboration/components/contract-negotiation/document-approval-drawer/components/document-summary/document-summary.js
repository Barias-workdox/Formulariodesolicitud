import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { FileIcon as S } from "../../../../../../file-icon/file-icon.js";
import "react";
import { Tag as w } from "../../../../../../tag/tag.js";
import { Text as t } from "../../../../../../text/text.js";
import { tooltipCaptionOverridesStyles as s, tooltipCaptionStyles as m } from "../../../../../../tooltip/tooltip.styles.js";
import { StatefulTooltip as c } from "../../../../../../tooltip/stateful-tooltip.js";
import { useCss as g } from "../../../../../../utils/hooks/use-css.js";
import { useTranslation as x } from "../../../../../../utils/i18n/utils.js";
import { getDocumentVersion as b } from "../../../utils/document-version.js";
import { styles as N, rowTitleStyles as d } from "./document-summary.styles.js";
const F = ({
  document: { name: i, fileExt: p, officeDocumentVersion: h },
  documentLastModificationText: l
}) => {
  const { t: n } = x(), { infoContainerStyles: f, infoItemStyles: a, documentInfoStyles: u, divisionLineStyles: v, theme: r } = g(N), { versionNumber: y } = h;
  return /* @__PURE__ */ o("div", { className: f, children: [
    /* @__PURE__ */ o("div", { className: a, children: [
      /* @__PURE__ */ e(
        t,
        {
          variant: "upperDetails",
          color: "neutral",
          fontWeight: "500",
          margin: 0,
          $style: d(r),
          children: n("contractNegotiationCollaboration.document")
        }
      ),
      /* @__PURE__ */ o("div", { className: u, children: [
        /* @__PURE__ */ e(
          S,
          {
            fileExtension: p,
            height: "20px",
            width: "20px"
          }
        ),
        /* @__PURE__ */ e(
          c,
          {
            placement: "right",
            showArrow: !0,
            content: () => /* @__PURE__ */ e(
              t,
              {
                variant: "bodySmall",
                $style: m(r),
                children: i
              }
            ),
            overrides: s(),
            children: /* @__PURE__ */ e(
              t,
              {
                variant: "bodySmall",
                margin: 0,
                color: "neutralSubdued",
                flex: 1,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                children: i
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          w,
          {
            kind: "primary",
            variant: "overlay",
            children: b(y)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: v }),
    /* @__PURE__ */ o("div", { className: a, children: [
      /* @__PURE__ */ e(
        t,
        {
          variant: "upperDetails",
          color: "neutral",
          fontWeight: "500",
          margin: 0,
          $style: d(r),
          children: n("contractNegotiationCollaboration.lastModification")
        }
      ),
      /* @__PURE__ */ e(
        c,
        {
          placement: "right",
          showArrow: !0,
          content: () => /* @__PURE__ */ e(
            t,
            {
              variant: "bodySmall",
              $style: m(r),
              children: l
            }
          ),
          overrides: s(),
          children: /* @__PURE__ */ e(
            t,
            {
              variant: "bodySmall",
              margin: 0,
              color: "neutralSubdued",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              children: l
            }
          )
        }
      )
    ] })
  ] });
};
export {
  F as DocumentSummary
};
//# sourceMappingURL=document-summary.js.map
