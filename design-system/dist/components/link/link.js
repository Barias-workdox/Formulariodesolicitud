import { jsx as y } from "react/jsx-runtime";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as L } from "../../themes/utilities.js";
import { sanitizeUrl as S } from "../../utils/url.utils.js";
import { getLinkStyles as _ } from "./link.styles.js";
import { styledLinkTextColors as D } from "./link.styles.js";
const h = ({
  dataTestId: r,
  underlined: e = !0,
  children: n,
  href: o,
  disabled: t = !1,
  kind: i = "default",
  size: m = "medium",
  target: s = "_blank",
  onClick: l,
  fontWeight: p,
  ...a
}) => {
  const [c, k] = L(), f = r || (o ? `link__${S(o)}` : "link"), u = { rel: "noopener noreferrer", target: s }, x = _(k, {
    disabled: t,
    underlined: e,
    kind: i,
    size: m,
    fontWeight: p
  });
  return /* @__PURE__ */ y(
    "a",
    {
      "data-testid": `${f}--link`,
      href: t ? void 0 : o,
      onClick: t ? void 0 : l,
      tabIndex: t ? -1 : 0,
      "aria-disabled": t,
      className: c(x),
      ...!t && u,
      ...a,
      children: n
    }
  );
};
export {
  h as Link,
  D as styledLinkTextColors
};
//# sourceMappingURL=link.js.map
