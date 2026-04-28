import { jsxs as u, jsx as e } from "react/jsx-runtime";
import { useMemo as C } from "react";
import { CompoundEndEnhancer as l } from "../../../../input/next/components/compound-end-enhancer/compound-end-enhancer.js";
import { StyledIconsContainer as x } from "../../styled-components/styled-icons-container.js";
import "../../styled-components/styled-start-enhancer-container.js";
import { ArrowIcon as h } from "../arrow-icon.js";
const A = ({
  "data-testid": m,
  isInputDirty: r,
  $clearable: t,
  $disabled: o,
  $isEmpty: n,
  $isLoading: i,
  $positive: s,
  $error: c,
  $isOpen: p,
  endEnhancer: a,
  ...d
}) => {
  const f = C(
    () => t && !o && (r || !n),
    [t, o, n, r]
  );
  return /* @__PURE__ */ u(x, { children: [
    /* @__PURE__ */ e(
      l,
      {
        ...d,
        "data-testid": m,
        canClear: f,
        error: c,
        isLoading: i,
        positive: s,
        endEnhancer: a
      }
    ),
    /* @__PURE__ */ e(
      h,
      {
        isOpen: p,
        color: o ? "neutralDepressed" : "neutral"
      }
    )
  ] });
};
export {
  A as SelectIconsContainer
};
//# sourceMappingURL=select-icons-container.js.map
