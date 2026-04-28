import { jsx as v } from "react/jsx-runtime";
import { useMemo as B } from "react";
import { ProgressBar as O } from "baseui/progress-bar";
import { mergeOverridesDeep as P } from "../utils/baseui/helpers.js";
import { getProgressBarOverrides as c } from "./progress-bar.overrides.js";
const M = ({
  completed: r,
  value: s,
  successValue: o = 100,
  infinite: m = !1,
  showLabel: t = !1,
  size: i = "medium",
  steps: a = 1,
  maxValue: f = 100,
  minValue: g = 0,
  getProgressLabel: p,
  overrides: e,
  ...d
}) => {
  const n = B(() => {
    const u = c({ completed: r });
    return P(u, e);
  }, [r, e]);
  return /* @__PURE__ */ v(
    O,
    {
      ...d,
      value: s,
      getProgressLabel: p,
      successValue: o,
      infinite: m,
      showLabel: t,
      size: i,
      steps: a,
      maxValue: f,
      minValue: g,
      overrides: n
    }
  );
};
export {
  M as ProgressBar
};
//# sourceMappingURL=progress-bar.js.map
