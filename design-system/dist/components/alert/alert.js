import { jsxs as l } from "react/jsx-runtime";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as n } from "../../themes/utilities.js";
import { getColors as p, containerStyles as c } from "./alert.styles.js";
const S = ({ icon: o, kind: t, children: r, overrides: e = {} }) => {
  const [m, s] = n(), i = p(s, t);
  return /* @__PURE__ */ l(
    "div",
    {
      className: m({
        ...c(i),
        ...e.Root
      }),
      children: [
        o,
        r
      ]
    }
  );
};
export {
  S as Alert
};
//# sourceMappingURL=alert.js.map
