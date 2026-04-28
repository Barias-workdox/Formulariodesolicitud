import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { useMemo as c } from "react";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedStyled as d, themedUseStyletron as p } from "../../themes/utilities.js";
import { Text as x } from "../text/text.js";
import { innerTextStyles as h, getTextStyles as l, fillRotationStyles as S, fillRotationFiftyPercentStyles as y, innerFillContainerStyles as f, circleContainerStyles as T } from "./percentage-circle.styles.js";
const g = d("div", () => ({
  "*": {
    boxSizing: "inherit"
  },
  "*::before": {
    boxSizing: "inherit"
  },
  "*::after": {
    boxSizing: "inherit"
  }
})), R = ({
  current: r,
  total: n,
  colors: e,
  size: o
}) => {
  const [t] = p(), s = r * 100 / n, m = c(
    () => r === n ? e.currentText : e.totalText,
    [n, r, e.currentText, e.totalText]
  );
  return /* @__PURE__ */ i(g, { children: /* @__PURE__ */ a("div", { className: t(T(e, o)), children: [
    /* @__PURE__ */ a(
      x,
      {
        variant: "bodySmall",
        $style: h(e),
        children: [
          /* @__PURE__ */ i("span", { className: t(l(e.currentText)), children: r }),
          /* @__PURE__ */ i("span", { className: t(l(m)), children: "/" }),
          /* @__PURE__ */ i("span", { className: t(l(m)), children: n })
        ]
      }
    ),
    /* @__PURE__ */ a("div", { className: t(f(s)), children: [
      /* @__PURE__ */ i("div", { className: t(S(s, e)) }),
      s > 50 && /* @__PURE__ */ i("div", { className: t(y(e)) })
    ] })
  ] }) });
};
export {
  R as ProgressCircle
};
//# sourceMappingURL=percentage-circle.js.map
