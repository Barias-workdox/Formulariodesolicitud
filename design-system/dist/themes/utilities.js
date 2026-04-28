import { createThemedStyled as e, createThemedWithStyle as t, createThemedUseStyletron as r, createTheme as m } from "baseui";
import { spacing as o } from "./_deprecated/v2/tokens/spacing.js";
import { responsiveTheme as c } from "./responsive.js";
const l = e(), s = t(), y = r();
function S() {
  return e();
}
function p() {
  return t();
}
function u() {
  return r();
}
function f(n) {
  return {
    spacing: o,
    ...c,
    ...m(n)
  };
}
export {
  f as createAppTheme,
  l as themedStyled,
  S as themedStyledGeneric,
  y as themedUseStyletron,
  u as themedUseStyletronGeneric,
  s as themedWithStyle,
  p as themedWithStyleGeneric
};
//# sourceMappingURL=utilities.js.map
