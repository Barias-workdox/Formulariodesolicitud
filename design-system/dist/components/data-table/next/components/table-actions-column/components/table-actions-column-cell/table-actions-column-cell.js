import { jsx as o } from "react/jsx-runtime";
import { DataTableDisabledRowProvider as c } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as n } from "../../../../../../utils/hooks/use-css.js";
import { DisabledRowTooltip as a } from "../../../common/disabled-row-tooltip/disabled-row-tooltip.js";
import { cellStyles as p } from "../../../common/table-cell/table-cell.styles.js";
const T = ({
  disableReason: e = "",
  height: t,
  isRowHovered: l,
  isRowDisabled: r,
  children: i,
  ...m
}) => {
  const { containerStyles: s } = n(p, {
    height: t,
    isActionCell: !0,
    isRowHovered: l,
    isRowDisabled: r
  });
  return /* @__PURE__ */ o(
    c,
    {
      isRowDisabled: r,
      disableReason: e,
      children: /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(
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
