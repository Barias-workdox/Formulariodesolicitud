import { jsx as o } from "react/jsx-runtime";
import { DataTableDisabledRowProvider as n } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as a } from "../../../../../../utils/hooks/use-css.js";
import { DisabledRowTooltip as p } from "../../../common/disabled-row-tooltip/disabled-row-tooltip.js";
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
  const { containerStyles: c } = a(d, {
    height: t,
    isRowHovered: i,
    isRowChecked: l,
    isRowDisabled: e,
    isActionCell: !0
  });
  return /* @__PURE__ */ o(
    n,
    {
      isRowDisabled: e,
      disableReason: r,
      children: /* @__PURE__ */ o(p, { children: /* @__PURE__ */ o(
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
