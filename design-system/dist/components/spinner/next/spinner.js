import { jsx as r, jsxs as j, Fragment as z } from "react/jsx-runtime";
import { useState as B, useEffect as F, useMemo as a } from "react";
import { Text as L } from "../../text/text.js";
import { useCss as S } from "../../utils/hooks/use-css.js";
import { getSizeConfig as D, getSpinnerColors as E, createSpinnerStyles as T, getTextVariantFromSize as Y } from "./spinner.styles.js";
const q = 75;
function O({
  dataTestId: t = "loading-spinner",
  kind: m,
  size: i,
  label: n,
  ariaLabel: _,
  fullWidth: p = !1,
  isRelative: d = !1,
  opacity: f = 0.8,
  backgroundColor: u = "bgBase",
  delay: s = 0,
  customColor: h,
  customSize: g
}) {
  const [c, M] = B(s === 0);
  F(() => {
    if (s > 0) {
      const W = setTimeout(() => {
        M(!0);
      }, s);
      return () => clearTimeout(W);
    }
  }, [s]);
  const e = a(() => D(i, g), [i, g]), { theme: o } = S(), l = a(
    () => E(m, o, h),
    [m, o, h]
  ), N = a(
    () => T({
      theme: o,
      config: e,
      isRelative: d,
      opacity: f,
      backgroundColor: u
    }),
    [o, e, l, d, f, u, i]
  ), { container: b, spinnerAnimation: y, overlay: P, contentWrapper: k, inlineWrapper: w, hiddenSpinner: v } = S(N), A = {
    cx: e.center,
    cy: e.center,
    r: e.radius,
    fill: "none",
    strokeWidth: e.strokeWidth
  }, C = a(
    () => `${2 * Math.PI * e.radius * q / 100}, ${2 * Math.PI * e.radius}`,
    [e.radius]
  ), V = n || _, x = /* @__PURE__ */ r(
    "svg",
    {
      "data-testid": t,
      className: `${b} ${y} ${c ? "" : v}`,
      width: e.size,
      height: e.size,
      viewBox: `0 0 ${e.size} ${e.size}`,
      preserveAspectRatio: "xMidYMid",
      role: "status",
      "aria-label": V,
      ...p && { "aria-busy": !0 },
      children: /* @__PURE__ */ r(
        "circle",
        {
          ...A,
          strokeDasharray: C,
          stroke: l.primary,
          strokeLinecap: "round"
        }
      )
    }
  ), $ = /* @__PURE__ */ j(z, { children: [
    x,
    n && c && /* @__PURE__ */ r(
      L,
      {
        variant: Y(i),
        color: l.textColor,
        textAlign: "center",
        "data-testid": `${t}__label`,
        children: n
      }
    )
  ] });
  return c ? p ? /* @__PURE__ */ r(
    "div",
    {
      className: P,
      "data-testid": `${t}__overlay`,
      children: /* @__PURE__ */ r("div", { className: k, children: $ })
    }
  ) : n ? /* @__PURE__ */ r(
    "div",
    {
      className: w,
      "data-testid": `${t}__inline-wrapper`,
      children: $
    }
  ) : x : /* @__PURE__ */ r("div", { className: v });
}
export {
  O as Spinner
};
//# sourceMappingURL=spinner.js.map
