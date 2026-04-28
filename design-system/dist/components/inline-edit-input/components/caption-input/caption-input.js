import { jsxs as w, Fragment as $, jsx as t } from "react/jsx-runtime";
import { Edit as B } from "@carbon/icons-react";
import { StatefulTooltipNext as b } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { getOverride as r, getOverrideProps as i } from "../../../../utils/overrides.utils.js";
import "../../../button/button.js";
import { IconButton as k } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { Spinner as z } from "../../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as E } from "../../../text/text.js";
import { useCss as N } from "../../../utils/hooks/use-css.js";
import { DEFAULT_ICON_SIZE as j } from "../../inline-edit-input.constants.js";
const c = {
  captionTextStyles: (o) => ({
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: 0,
    marginTop: 0,
    marginRight: o.spacing.spacingXs,
    color: o.colors.neutralSubdued
  }),
  spinnerContainerStyles: {
    // Required to have the same height and width of the icon buttons
    padding: "10px"
  }
}, Y = ({
  "data-testid": o,
  captionText: e,
  zIndex: d,
  disabled: a,
  colors: u = {},
  iconSize: S = j,
  isLoading: f,
  overrides: x,
  onCaptionClick: h,
  onToggle: g
}) => {
  const { theme: n, spinnerContainerStyles: v } = N(c), {
    Tooltip: p,
    Text: s,
    IconButton: l,
    Spinner: m
  } = x || {}, T = r(p) || b, y = r(s) || E, C = r(l) || k, I = r(m) || z, { editIcon: O } = u;
  return /* @__PURE__ */ w($, { children: [
    /* @__PURE__ */ t(
      T,
      {
        placement: "auto",
        showArrow: !0,
        content: e,
        zIndex: d,
        ...i(p),
        children: /* @__PURE__ */ t(
          y,
          {
            "data-testid": `${o}-tooltip-text`,
            variant: "bodySmall",
            onClick: () => h(),
            $style: c.captionTextStyles(n),
            ...i(s),
            children: e
          }
        )
      }
    ),
    !a && (f ? /* @__PURE__ */ t("div", { className: v, children: /* @__PURE__ */ t(
      I,
      {
        size: "sm",
        ...i(m)
      }
    ) }) : /* @__PURE__ */ t(
      C,
      {
        "data-testid": `${o}-edit-button`,
        size: "auto",
        kind: "link-tertiary",
        shape: "circle",
        onClick: g,
        ...i(l),
        children: /* @__PURE__ */ t(
          B,
          {
            size: S,
            fill: O ?? n.colors.neutralSubdued
          }
        )
      }
    ))
  ] });
};
export {
  Y as CaptionInput,
  c as styles
};
//# sourceMappingURL=caption-input.js.map
