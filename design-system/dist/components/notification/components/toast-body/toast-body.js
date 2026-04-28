import { jsx as o, jsxs as B } from "react/jsx-runtime";
import { StyledBody as I } from "baseui/toast";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as S } from "../../../../themes/utilities.js";
import { BackgroundIcon as g } from "../../../background-icon/background-icon.js";
import { useCss as x } from "../../../utils/hooks/use-css.js";
import { toasterContainerStyles as P, getToastIconProps as j, getKindValues as v, styledBody as C } from "./toast-body.styles.js";
const z = ({
  $kind: t,
  $type: e,
  width: s,
  children: m,
  $closeable: n = !0,
  $isFocusVisible: c = !1,
  $isRendered: i = !0,
  $isVisible: p = !0,
  ...d
}) => {
  const [, l] = S(), r = v(t), { bodyWrapper: a, childrenWrapper: y } = x(P), f = j(r), { icon: u, ...h } = f;
  return /* @__PURE__ */ o(
    I,
    {
      ...d,
      $isRendered: i,
      $isVisible: p,
      $isFocusVisible: c,
      $closeable: n,
      $type: e,
      $kind: t,
      $style: C(l, { style: r, width: s }),
      children: /* @__PURE__ */ B("div", { className: a, children: [
        /* @__PURE__ */ o(
          g,
          {
            ...h,
            Icon: u
          }
        ),
        /* @__PURE__ */ o("div", { className: y, children: m })
      ] })
    }
  );
};
export {
  z as StyledToastBody
};
//# sourceMappingURL=toast-body.js.map
