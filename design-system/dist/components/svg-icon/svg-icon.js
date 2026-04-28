import { jsx as r } from "react/jsx-runtime";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as e } from "../../themes/utilities.js";
const l = ({ svg: t, width: i = "auto", height: m = "auto" }) => {
  const [o] = e();
  return /* @__PURE__ */ r(
    "div",
    {
      className: o({
        width: i,
        height: m
      }),
      children: typeof t == "string" ? /* @__PURE__ */ r(
        "img",
        {
          src: t,
          alt: "svg icon",
          className: o({ height: "100%", width: "100%" })
        }
      ) : t
    }
  );
};
export {
  l as SvgIcon
};
//# sourceMappingURL=svg-icon.js.map
