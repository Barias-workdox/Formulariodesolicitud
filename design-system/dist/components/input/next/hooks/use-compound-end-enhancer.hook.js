import { jsx as k } from "react/jsx-runtime";
import { useMemo as E, useCallback as l } from "react";
import { isNil as x } from "lodash";
import { noop as y } from "../../../../utils/noop.js";
import { CompoundEndEnhancer as M } from "../components/compound-end-enhancer/compound-end-enhancer.js";
const A = ({
  "data-testid": a,
  endEnhancer: t,
  value: m = "",
  clearable: e = !1,
  disabled: n = !1,
  showCopyContentButton: h = !1,
  onClear: u = y,
  error: o = !1,
  isLoading: f = !1,
  positive: c = !1
}) => {
  const s = E(() => x(m) || m === "", [m]), p = E(
    () => !s && e && !n,
    [e, s, n]
  ), r = E(
    () => !s && h && !n,
    [h, s, n]
  ), C = E(
    () => p || r || f || !x(t) || o || c,
    [p, r, f, t, o, c]
  ), _ = l(
    (j) => /* @__PURE__ */ k(
      M,
      {
        "data-testid": `${a}__end-enhancer`,
        canClear: p,
        canCopy: r,
        endEnhancer: t,
        error: o,
        isLoading: f,
        onClear: u,
        positive: c,
        value: m,
        ...j
      }
    ),
    [p, r, a, t, o, f, u, c, m]
  );
  return {
    showEndEnhancer: C,
    getEndEnhancerElement: _
  };
};
export {
  A as useCompoundEndEnhancer
};
//# sourceMappingURL=use-compound-end-enhancer.hook.js.map
