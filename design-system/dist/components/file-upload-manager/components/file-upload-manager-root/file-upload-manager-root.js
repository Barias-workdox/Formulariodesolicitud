import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { Close as f } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as n } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { CollapsibleContent as x } from "../../../collapsible-content/collapsible-content.js";
import { ArrowIcon as g } from "../../../select/next/components/arrow-icon.js";
import { FileUploadManagerTitle as u } from "../file-upload-manager-title.js";
import { StyledRoot as A, StyledActionsWrapper as C } from "./file-upload-manager-root.styles.js";
const I = ({
  $isOpen: t,
  $onToggle: i,
  onCloseUpload: r,
  position: p
}) => {
  const e = p == "TOP" ? t : !t;
  return /* @__PURE__ */ d(C, { children: [
    /* @__PURE__ */ o(
      n,
      {
        "data-testid": "toggle-button",
        size: "24px",
        onClick: i,
        children: /* @__PURE__ */ o(g, { isOpen: e })
      }
    ),
    r && /* @__PURE__ */ o(
      n,
      {
        "data-testid": "close-button",
        size: "24px",
        onClick: r,
        children: /* @__PURE__ */ o(f, {})
      }
    )
  ] });
}, q = ({
  "data-testid": t,
  initialState: i,
  children: r,
  files: p,
  status: e,
  position: m,
  headerRef: s,
  rootRef: c,
  margin: a,
  onCloseUpload: l
}) => /* @__PURE__ */ o(
  x,
  {
    initialState: i,
    title: /* @__PURE__ */ o(
      u,
      {
        files: p,
        status: e
      }
    ),
    overrides: {
      Root: {
        component: A,
        props: {
          "data-testid": t,
          ref: c,
          $position: m,
          $margin: `${a}px`
        }
      },
      Header: {
        props: { ref: s }
      },
      ActionIcons: {
        component: I,
        props: { onCloseUpload: l, position: m }
      }
    },
    children: r
  }
);
export {
  q as FileUploadManagerRoot
};
//# sourceMappingURL=file-upload-manager-root.js.map
