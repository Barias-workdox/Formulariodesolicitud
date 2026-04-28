import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { DocumentBlank as I } from "@carbon/icons-react";
import { ListHeading as T, ListItem as C } from "baseui/list";
import { FileTypeIcon as L } from "../../../../../../file-type-icon/file-type-icon.js";
import { Text as i } from "../../../../../../text/text.js";
import { tooltipCaptionOverridesStyles as b, tooltipCaptionStyles as D } from "../../../../../../tooltip/tooltip.styles.js";
import "baseui/tooltip";
import { useCss as N } from "../../../../../../utils/hooks/use-css.js";
import { StatefulTooltipNext as _ } from "../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { DocumentStatusTag as $ } from "../document-status-tag/document-status-tag.js";
import { styles as m, documentsListHeadingOverrides as k, documentsListItemOverrides as O } from "./documents-list.styles.js";
const q = ({
  dataTestId: a,
  listHeadingText: c,
  documents: d = [],
  selectedDocumentId: p,
  isLoading: u = !1,
  onClick: f
}) => {
  const { listStyles: h, documentInfoStyles: y, theme: t } = N(m);
  return /* @__PURE__ */ r("ul", { className: h, children: [
    /* @__PURE__ */ e(
      T,
      {
        overrides: k(t),
        heading: /* @__PURE__ */ r(
          i,
          {
            as: "span",
            variant: "bodySmall",
            fontWeight: "500",
            color: "neutral",
            margin: 0,
            alignItems: "center",
            display: "flex",
            gridGap: t.spacing.spacingXs,
            children: [
              /* @__PURE__ */ e(I, { color: t.colors.neutralDepressed }),
              c
            ]
          }
        )
      }
    ),
    d.map(({ document: { id: o, name: n, fileExt: g, negotiable: S = !1 }, status: s }, v) => {
      const l = p === o, x = () => {
        u || f(o);
      };
      return /* @__PURE__ */ r(
        C,
        {
          overrides: O(t, {
            dataTestId: `${a}__document-${v}`,
            isSelected: l
          }),
          onClick: x,
          children: [
            /* @__PURE__ */ r("div", { className: y, children: [
              /* @__PURE__ */ e(
                L,
                {
                  fileExtension: g,
                  size: 20,
                  "data-testid": "document-list__document-icon"
                }
              ),
              /* @__PURE__ */ e(
                _,
                {
                  placement: "right",
                  showArrow: !0,
                  content: () => /* @__PURE__ */ e(
                    i,
                    {
                      variant: "bodySmall",
                      $style: D(t),
                      children: n
                    }
                  ),
                  overrides: b(),
                  children: /* @__PURE__ */ e(
                    i,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: l ? "neutral" : "neutralSubdued",
                      $style: m.documentNameTextStyles(),
                      children: n
                    }
                  )
                }
              )
            ] }),
            s && S && /* @__PURE__ */ e($, { status: s })
          ]
        },
        o
      );
    })
  ] });
};
export {
  q as DocumentsList
};
//# sourceMappingURL=documents-list.js.map
