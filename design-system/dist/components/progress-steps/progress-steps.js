import { jsx as t, jsxs as p } from "react/jsx-runtime";
import { Fragment as w } from "react";
import { useCss as A } from "../utils/hooks/use-css.js";
import { ProgressStep as C } from "./components/progress-step/progress-step.js";
import { styles as D } from "./progress-steps.styles.js";
const z = ({
  "data-testid": r = "design-system__progress-steps",
  size: d = "sm",
  type: o = "default",
  hideText: l = !1,
  responsiveBreakpoint: c = "medium",
  stepWidth: n,
  children: e,
  onStepClick: a
}) => {
  const { rootStyles: y, wrapperStepStyles: f, compressedDividerStyles: v, dividerStyles: g } = A(D), i = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ t("div", { className: y, children: i.map((N, s) => {
    const m = o === "compressed", S = s > 0, _ = s < i.length - 1, {
      key: u,
      props: {
        "data-testid": $ = `${r}--step-${s}`,
        title: h,
        kind: j,
        $width: k = n
      }
    } = N;
    return /* @__PURE__ */ p(w, { children: [
      /* @__PURE__ */ p("div", { className: f, children: [
        /* @__PURE__ */ t(
          C,
          {
            "data-testid": $,
            onClick: a !== void 0 && (() => a(s)),
            index: s,
            title: h,
            kind: j,
            size: d,
            type: o,
            hideText: l,
            responsiveBreakpoint: c,
            $width: k
          }
        ),
        S && !m && /* @__PURE__ */ t(
          "div",
          {
            "data-testid": `${r}__separator`,
            role: "separator",
            className: g
          }
        )
      ] }),
      _ && m && /* @__PURE__ */ t(
        "div",
        {
          "data-testid": `${r}__separator`,
          role: "separator",
          className: v
        }
      )
    ] }, u ?? s);
  }) });
};
export {
  z as ProgressSteps
};
//# sourceMappingURL=progress-steps.js.map
