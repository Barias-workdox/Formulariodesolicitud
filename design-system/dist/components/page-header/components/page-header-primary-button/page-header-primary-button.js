import { jsx as m } from "react/jsx-runtime";
import { Button as p } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as e, COMMON_HEIGHT_44 as s } from "../../../../constants/common.constants.js";
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
import { useResponsiveProps as a } from "../../../../utils/use-responsive-props.util.js";
import { buttonOverrides as n } from "./page-header-primary-button.overrides.js";
const I = ({
  dataTestId: r = "page-header__primary-button",
  children: o,
  ...t
}) => {
  const i = a(
    { large: { size: s } },
    { size: e }
  );
  return /* @__PURE__ */ m(
    p,
    {
      "data-testid": r,
      kind: "primary",
      overrides: n,
      ...t,
      ...i,
      children: o
    }
  );
};
export {
  I as PageHeaderPrimaryButton
};
//# sourceMappingURL=page-header-primary-button.js.map
