import { jsx as t } from "react/jsx-runtime";
import { useMemo as s, useCallback as p } from "react";
import { ChevronUp as c, ChevronDown as f } from "@carbon/icons-react";
import { Input as u } from "../../../../../../input/next/input.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import { getInputOverrides as v } from "./input-selector.overrides.js";
const C = ({
  value: e,
  isOpen: o,
  handleOpen: r
}) => {
  const i = s(
    () => v({ isOpen: o, handleOpen: r }),
    [o, r]
  ), m = p(
    (n) => {
      n.key === "Enter" && r();
    },
    [r]
  );
  return /* @__PURE__ */ t(
    u,
    {
      size: "sm",
      endEnhancer: o ? /* @__PURE__ */ t(c, {}) : /* @__PURE__ */ t(f, {}),
      kind: "white",
      width: "100%",
      clearable: !1,
      value: e,
      onKeyDown: m,
      overrides: i
    }
  );
};
export {
  C as InputSelector
};
//# sourceMappingURL=input-selector.js.map
