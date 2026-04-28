import { COMMON_ICON_SIZE_20 as p, COMMON_ICON_SIZE_16 as t, COMMON_HEIGHT_44 as i, COMMON_HEIGHT_32 as r } from "../../../constants/common.constants.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import { typographies as o } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
const N = {
  "32px": {
    height: "32px",
    padding: "spacingXs",
    fontSize: o.bodySmall.fontSize ?? ""
  },
  "44px": {
    height: "44px",
    padding: "spacingMd",
    fontSize: o.body.fontSize ?? ""
  }
}, c = [
  "background-color",
  "border-color",
  "color",
  "box-shadow",
  "outline-color"
], d = {
  "32px": "32px",
  "44px": "32px"
}, e = {
  [r]: t,
  [i]: p
};
export {
  e as ENHANCER_SIZE,
  d as RESPONSIVE_SIZE_MAP,
  N as SIZE_CONFIG,
  c as TRANSITION_PROPERTIES
};
//# sourceMappingURL=button.constants.js.map
