import { jsx as l } from "react/jsx-runtime";
import { memo as a } from "react";
import { CellSkeleton as m } from "../../../common/cell-skeleton.js";
import { TableCell as s } from "../table-cell/table-cell.js";
const k = a(function({
  "data-testid": e,
  isHeaderHovered: o,
  isDragging: t,
  height: i,
  rowIndex: r
}) {
  return /* @__PURE__ */ l(
    s,
    {
      "data-testid": e,
      isDragging: t,
      isHeaderHovered: o,
      isRowClickable: !1,
      isRowHovered: !1,
      isRowChecked: !1,
      rowIndex: r,
      height: i,
      children: /* @__PURE__ */ l(m, { "data-testid": `${e}--skeleton` })
    }
  );
});
export {
  k as TableCellSkeleton
};
//# sourceMappingURL=table-cell-skeleton.js.map
