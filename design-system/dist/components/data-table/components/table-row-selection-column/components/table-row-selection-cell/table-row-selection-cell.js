import { jsx as o } from "react/jsx-runtime";
import { DisabledRowTooltip as n } from "../../../common/disabled-row-tooltip/disabled-row-tooltip.js";
import { DataTableDisabledRowProvider as a } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as p } from "../../../../../utils/hooks/use-css.js";
import { cellStyles as d } from "../../../common/table-cell/table-cell.styles.js";
const T = ({
  disableReason: r = "",
  height: t,
  isRowChecked: l,
  isRowDisabled: e,
  isRowHovered: i,
  children: m,
  ...s
}) => {
  const { containerStyles: c } = p(d, {
    height: t,
    isRowHovered: i,
    isRowChecked: l,
    isRowDisabled: e,
    isActionCell: !0
  });
  return /* @__PURE__ */ o(
    a,
    {
      isRowDisabled: e,
      disableReason: r,
      children: /* @__PURE__ */ o(n, { children: /* @__PURE__ */ o(
        "div",
        {
          className: c,
          ...s,
          children: m
        }
      ) })
    }
  );
};
export {
  T as TableRowSelectionCell
};
//# sourceMappingURL=table-row-selection-cell.js.map
