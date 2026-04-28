import { jsx as p } from "react/jsx-runtime";
import { useMemo as S, useCallback as C } from "react";
import { isNil as n } from "lodash";
import { CompoundStartEnhancer as h } from "../components/compound-start-enhancer/compound-start-enhancer.js";
const f = ({
  leading: o,
  prefixText: m = "",
  size: t,
  startEnhancer: r
}) => {
  const u = S(
    () => !n(o) || m !== "" || !n(r),
    [o, m, r]
  ), c = C(
    (s) => /* @__PURE__ */ p(
      h,
      {
        size: t,
        prefixText: m,
        leading: o,
        startEnhancer: r,
        ...s
      }
    ),
    [o, m, t, r]
  );
  return {
    showStartEnhancer: u,
    getStartEnhancerElement: c
  };
};
export {
  f as useCompoundStartEnhancer
};
//# sourceMappingURL=use-compound-start-enhancer.hook.js.map
