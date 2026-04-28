import { jsx as o, Fragment as r } from "react/jsx-runtime";
import { StatefulTooltipNext as l } from "../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useDataTableContext as p } from "../../../hooks/use-data-table-context.js";
import { useDataTableDisabledRow as m } from "../../../hooks/use-data-table-disabled-row.js";
const D = ({
  children: t,
  placement: n = "top"
}) => {
  const { isRowDisabled: i, disableReason: e } = m(), { translateDisableReason: s } = p();
  if (!(i && e && s))
    return /* @__PURE__ */ o(r, { children: t });
  const a = s(e);
  return a ? /* @__PURE__ */ o(
    l,
    {
      content: a,
      showArrow: !0,
      placement: n,
      children: /* @__PURE__ */ o("span", { children: t })
    }
  ) : /* @__PURE__ */ o(r, { children: t });
};
export {
  D as DisabledRowTooltip
};
//# sourceMappingURL=disabled-row-tooltip.js.map
