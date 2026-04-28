import { jsx as o } from "react/jsx-runtime";
import { DisabledRowTooltip as c } from "../../../common/disabled-row-tooltip/disabled-row-tooltip.js";
import { DataTableDisabledRowProvider as n } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as a } from "../../../../../utils/hooks/use-css.js";
import { cellStyles as p } from "../../../common/table-cell/table-cell.styles.js";
const T = ({
  disableReason: e = "",
  height: t,
  isRowDisabled: r,
  isRowHovered: l,
  children: i,
  ...m
}) => {
  const { containerStyles: s } = a(p, {
    height: t,
    isActionCell: !0,
    isRowDisabled: r,
    isRowHovered: l
  });
  return /* @__PURE__ */ o(
    n,
    {
      isRowDisabled: r,
      disableReason: e,
      children: /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(
        "div",
        {
          className: s,
          ...m,
          children: i
        }
      ) })
    }
  );
};
export {
  T as TableActionCell
};
//# sourceMappingURL=table-actions-column-cell.js.map
