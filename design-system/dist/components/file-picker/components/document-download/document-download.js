import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { Download as l, Document as p, TrashCan as c } from "@carbon/icons-react";
import { Button as u } from "../../../button/button.js";
import { IconButton as h } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as f } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as v } from "../../../text/text.js";
import { styles as w, buttonOverrides as x } from "./document-download.styles.js";
const q = ({
  "data-testid": o,
  filename: i,
  showDeleteButton: e,
  isDeleting: r,
  onDownload: n,
  onDelete: d
}) => {
  const { containerStyles: m, deleteButtonContainerStyles: s } = f(w);
  return /* @__PURE__ */ a(
    "div",
    {
      "data-testid": o,
      className: m,
      children: [
        /* @__PURE__ */ t(
          u,
          {
            "data-testid": `${o}--download-button`,
            fullWidth: !0,
            overrides: x,
            size: "32px",
            kind: "link-secondary",
            startEnhancer: p,
            endEnhancer: l,
            onClick: n,
            children: /* @__PURE__ */ t(
              v,
              {
                variant: "bodySmall",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                margin: 0,
                children: i
              }
            )
          }
        ),
        e && /* @__PURE__ */ t("div", { className: s, children: /* @__PURE__ */ t(
          h,
          {
            "data-testid": `${o}--delete-button`,
            size: "32px",
            disabled: r,
            isLoading: r,
            onClick: d,
            children: /* @__PURE__ */ t(c, {})
          }
        ) })
      ]
    }
  );
};
export {
  q as DocumentDownload
};
//# sourceMappingURL=document-download.js.map
