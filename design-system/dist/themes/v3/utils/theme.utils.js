import { createDarkTheme as m, createTheme as o } from "baseui";
import { responsiveTheme as s } from "../../responsive.js";
import { baseOverrides as t } from "../theme-base.js";
const p = ({ colors: e = {}, dark: r = !1 } = { colors: {} }) => ({
  ...(r ? m : o)({
    ...t,
    colors: e
  }),
  ...s
});
export {
  p as createDesignSystemTheme
};
//# sourceMappingURL=theme.utils.js.map
