import { jsx as c } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { LabelXSmall as l, ParagraphXSmall as e, ParagraphSmall as p, ParagraphMedium as i, ParagraphLarge as o, HeadingXSmall as m, LabelSmall as L, HeadingSmall as D, HeadingMedium as H, HeadingLarge as P, DisplaySmall as T, DisplayMedium as C, DisplayLarge as M } from "baseui/typography";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import { DEFAULT_FONT as X, typographies as F } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
const s = {
  display1: M,
  display2: C,
  display3: T,
  "title-large": P,
  "title-medium": H,
  "title-small": D,
  subtitle: m,
  subtitle2: o,
  paragraph1: i,
  paragraph2: p,
  "small-paragraph": e,
  "small-details": L,
  "upper-details": l,
  h1: m,
  h2: o,
  body: i,
  bodySmall: p,
  microCopy: e,
  upperDetails: l
}, R = x(function({
  variant: r,
  fontWeight: d = "400",
  textAlign: g = "start",
  children: n,
  "data-testid": t,
  $style: a = {},
  onClick: u,
  color: y,
  ...f
}, h) {
  const S = s[r] ?? s.body;
  return /* @__PURE__ */ c(
    S,
    {
      overrides: {
        Block: {
          style: (b) => ({
            ...typeof a == "function" ? a(b) : a,
            ...F[r] ?? {},
            ...X,
            fontWeight: d,
            textAlign: g
          }),
          props: {
            ...t && { "data-testid": t },
            ref: h,
            onClick: u
          }
        }
      },
      color: y,
      ...f,
      children: n
    }
  );
});
export {
  R as Text
};
//# sourceMappingURL=text.js.map
