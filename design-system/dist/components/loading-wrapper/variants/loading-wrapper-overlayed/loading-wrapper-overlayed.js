import { jsx as r, Fragment as t, jsxs as c } from "react/jsx-runtime";
import { useRef as f } from "react";
import { LoadingWrapper as u } from "../../loading-wrapper.js";
import { StyledRelativeContainer as g, StyledContainer as h, StyledSpinnerContainer as y } from "./loading-wrapper-overlayed.styles.js";
const L = ({
  isLoading: o,
  isRelative: i,
  $backgroundColor: a,
  $opacity: d = 0.8,
  spinnerSize: l,
  spinnerColor: p,
  title: m,
  children: e
}) => {
  const s = f(null);
  if (!o)
    return /* @__PURE__ */ r(t, { children: e });
  const n = /* @__PURE__ */ c(t, { children: [
    e,
    /* @__PURE__ */ r(
      h,
      {
        ref: s,
        $backgroundColor: a,
        $opacity: d,
        children: /* @__PURE__ */ r(y, { children: /* @__PURE__ */ r(
          u,
          {
            isLoading: !0,
            spinnerSize: l,
            spinnerColor: p,
            title: m,
            overrides: { Container: { height: "auto" } }
          }
        ) })
      }
    )
  ] });
  return i ? /* @__PURE__ */ r(g, { children: n }) : n;
};
export {
  L as LoadingWrapperOverlayed
};
//# sourceMappingURL=loading-wrapper-overlayed.js.map
