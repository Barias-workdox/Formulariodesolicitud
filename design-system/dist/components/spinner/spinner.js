import { jsxs as S, jsx as i } from "react/jsx-runtime";
import { useCss as x } from "../utils/hooks/use-css.js";
const h = (t) => {
  switch (t) {
    case "sm":
      return 16;
    case "md":
      return 32;
    case "lg":
      return 64;
  }
}, k = (t) => {
  switch (t) {
    case "sm":
      return 2;
    case "md":
      return 4;
    case "lg":
      return 6;
  }
}, P = (t, n) => h(t) / 2 - n / 2, b = 75, N = {
  containerStyles: {
    margin: "auto",
    display: "block",
    shapeRendering: "auto",
    animationPlayState: "running",
    animationDelay: "0s"
  },
  animationStyles: {
    animationPlayState: "running",
    animationDelay: "0s"
  }
};
function M({
  "data-testid": t = "loading-spinner",
  size: n = "md",
  color: o = "brand",
  secondaryColor: a = "brandWashed"
}) {
  const { containerStyles: g, animationStyles: c, theme: m } = x(N), p = m.colors[o] || o, y = m.colors[a] || a, l = k(n), r = P(n, l), s = h(n), e = s / 2, d = {
    cx: e,
    cy: e,
    r,
    fill: "none",
    strokeWidth: l
  }, $ = `${2 * Math.PI * r * b / 100}, ${2 * Math.PI * r}`, f = `0 ${e} ${e};360 ${e} ${e}`, u = `${s}px`;
  return /* @__PURE__ */ S(
    "svg",
    {
      "data-testid": t,
      className: g,
      width: u,
      height: u,
      viewBox: `0 0 ${s} ${s}`,
      preserveAspectRatio: "xMidYMid",
      children: [
        a && /* @__PURE__ */ i(
          "circle",
          {
            ...d,
            stroke: y
          }
        ),
        /* @__PURE__ */ i(
          "circle",
          {
            ...d,
            className: c,
            strokeDasharray: $,
            stroke: p,
            children: /* @__PURE__ */ i(
              "animateTransform",
              {
                "data-testid": `${t}__animation`,
                className: c,
                values: f,
                attributeName: "transform",
                type: "rotate",
                repeatCount: "indefinite",
                dur: "1s",
                keyTimes: "0;1"
              }
            )
          }
        )
      ]
    }
  );
}
export {
  M as Spinner
};
//# sourceMappingURL=spinner.js.map
