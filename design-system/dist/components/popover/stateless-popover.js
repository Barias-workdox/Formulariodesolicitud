import { jsx as o } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { Popover as s } from "baseui/popover";
import { mergeOverridesDeep as v } from "../utils/baseui/helpers.js";
import { getPopoverOverrides as d, StyledWrapper as f } from "./popover.styles.js";
const P = ({
  children: m,
  overrides: r,
  zIndex: e,
  ...t
}) => {
  const p = i(
    () => v(d({ zIndex: e }), r),
    [r, e]
  );
  return /* @__PURE__ */ o(
    s,
    {
      overrides: p,
      ...t,
      children: /* @__PURE__ */ o(f, { children: m })
    }
  );
};
export {
  P as StatelessPopover
};
//# sourceMappingURL=stateless-popover.js.map
