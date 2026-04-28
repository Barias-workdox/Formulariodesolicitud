import { jsx as t } from "react/jsx-runtime";
import { View as p, Download as a, TrashCan as c } from "@carbon/icons-react";
import "../../button/button.js";
import { IconButton as d } from "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
const s = (o) => ({
  delete: /* @__PURE__ */ t(c, {}),
  download: /* @__PURE__ */ t(a, {}),
  view: /* @__PURE__ */ t(p, {})
})[o], B = ({
  "data-testid": o,
  action: i,
  disabled: r = !1,
  buttonKind: n = "link-tertiary",
  onClick: e
}) => {
  const m = s(i);
  return /* @__PURE__ */ t(
    d,
    {
      "data-testid": o,
      disabled: r,
      kind: n,
      onClick: e,
      size: "auto",
      children: m
    }
  );
};
export {
  B as FeedFileAction,
  s as getFeedFileActionIcon
};
//# sourceMappingURL=feed-file-action.js.map
