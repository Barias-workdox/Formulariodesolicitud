import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { CheckmarkFilled as y } from "@carbon/icons-react";
import { useCss as D } from "../utils/hooks/use-css.js";
function E({
  stroke: d,
  fill: x,
  progressStroke: m,
  progress: k = 0,
  shadowed: f = !0,
  completedColor: u
}) {
  const { css: o, theme: s } = D(), n = Math.max(1 - 0.9999999, 0), h = Math.max(1 - k, 0), r = h < 0.01, i = 50, c = 8, a = i / 2 - c / 2, t = Math.PI * a * 2, b = d || s.colors.neutralSubtle, g = x || s.colors.bgBase, C = m || s.colors.brand, l = u || s.colors.positive;
  return /* @__PURE__ */ p(
    "div",
    {
      className: o({
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }),
      children: [
        r && /* @__PURE__ */ e(
          y,
          {
            size: 20,
            color: l,
            className: o({ color: l, background: "white", borderRadius: "50%" })
          }
        ),
        !r && /* @__PURE__ */ e(
          "div",
          {
            className: o({
              position: "relative",
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              transition: "all 0.3s ease",
              boxShadow: f ? "0 2px 4px 0 rgba(0, 0, 0, 0.2)" : "none",
              outline: "none",
              border: "0",
              backgroundColor: r ? l : "#FFF"
            }),
            children: /* @__PURE__ */ p(
              "svg",
              {
                viewBox: "0 0 50 50",
                width: "20px",
                height: "20px",
                className: o({
                  position: "absolute",
                  left: "0",
                  top: "0"
                }),
                children: [
                  /* @__PURE__ */ e(
                    "circle",
                    {
                      cx: 25,
                      cy: 25,
                      r: a,
                      stroke: b,
                      fill: g,
                      strokeWidth: c,
                      style: {
                        strokeDasharray: t * n,
                        strokeDashoffset: t * n
                      }
                    }
                  ),
                  /* @__PURE__ */ e(
                    "circle",
                    {
                      cx: i / 2,
                      cy: i / 2,
                      r: a,
                      stroke: C,
                      fill: "transparent",
                      strokeWidth: c,
                      style: {
                        strokeDasharray: t,
                        strokeDashoffset: t * h
                      }
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
export {
  E as ProgressCircle
};
//# sourceMappingURL=progress-circle.js.map
