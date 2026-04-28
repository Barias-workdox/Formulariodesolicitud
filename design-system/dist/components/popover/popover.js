import { jsx as o } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { StatefulPopover as s } from "baseui/popover";
import { PLACEMENT as E } from "baseui/popover";
import { mergeOverridesDeep as v } from "../utils/baseui/helpers.js";
import { getPopoverOverrides as d, StyledWrapper as l } from "./popover.styles.js";
const u = ({
  children: m,
  autoFocus: t = !1,
  overrides: r,
  zIndex: e,
  ...p
}) => {
  const i = f(
    () => v(d({ zIndex: e }), r),
    [r, e]
  );
  return /* @__PURE__ */ o(
    s,
    {
      autoFocus: t,
      overrides: i,
      ...p,
      children: /* @__PURE__ */ o(l, { children: m })
    }
  );
};
export {
  E as PLACEMENT,
  u as Popover
};
//# sourceMappingURL=popover.js.map
