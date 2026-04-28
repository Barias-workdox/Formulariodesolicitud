import { jsx as i, jsxs as n, Fragment as s } from "react/jsx-runtime";
import { Button as m } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
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
import "@carbon/icons-react";
import { desktopButtonOverrides as d, mobileButtonOverrides as u } from "./enhanced-empty-state-primary-button.styles.js";
const c = ({
  "data-testid": r = "enhanced-empty-state__primary-button",
  children: t,
  ...o
}) => /* @__PURE__ */ i(
  m,
  {
    ...o,
    "data-testid": r,
    overrides: d,
    children: t
  }
), y = ({
  "data-testid": r = "enhanced-empty-state__primary-button",
  children: t,
  ...o
}) => /* @__PURE__ */ i(
  m,
  {
    ...o,
    "data-testid": r,
    size: "compact",
    overrides: u,
    children: t
  }
), M = ({
  "data-testid": r,
  children: t,
  onClick: o,
  startEnhancer: p,
  disabled: a
}) => {
  const e = {
    "data-testid": r,
    kind: "primary",
    onClick: o,
    startEnhancer: p,
    disabled: a
  };
  return /* @__PURE__ */ n(s, { children: [
    /* @__PURE__ */ i(y, { ...e, children: t }),
    /* @__PURE__ */ i(c, { ...e, children: t })
  ] });
};
export {
  c as DesktopButton,
  M as EnhancedEmptyStatePrimaryButton,
  y as MobileButton
};
//# sourceMappingURL=enhanced-empty-state-primary-button.js.map
