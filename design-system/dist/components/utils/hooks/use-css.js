import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as i } from "../../../themes/utilities.js";
const f = (e, s, c = !1) => {
  const [o, m] = i();
  return {
    ...Object.keys(e ?? {}).reduce(
      (n, r) => {
        const t = e[r];
        return typeof t == "function" && !c ? n[r] = o(
          t(
            m,
            s
          )
        ) : typeof t == "function" && c ? n[r] = o(
          t({ $theme: m, ...s })
        ) : n[r] = o(t), n;
      },
      {}
    ),
    css: o,
    theme: m
  };
}, N = ({
  $styles: e,
  ...s
}) => f(e, s, !0), U = () => (e, s) => f(e, s);
export {
  U as createThemedUseCss,
  f as useCss,
  N as useStyleOverrides
};
//# sourceMappingURL=use-css.js.map
