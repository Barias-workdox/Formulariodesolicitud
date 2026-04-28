import { jsx as t, Fragment as m } from "react/jsx-runtime";
import { DEFAULT_SKELETON_ROW_COUNT as i } from "../../../../data-table.constants.js";
import { TableCellSkeleton as s } from "../table-cell-skeleton/table-cell-skeleton.js";
const h = ({
  columnIndex: r,
  isDragging: o = !1,
  rowHeight: n,
  isHeaderHovered: l
}) => /* @__PURE__ */ t(m, { children: Array.from({ length: i }, (d, a) => {
  const e = `${r}-cell-skeleton-${a}`;
  return /* @__PURE__ */ t(
    s,
    {
      "data-testid": e,
      isDragging: o,
      isHeaderHovered: l,
      rowIndex: 1,
      height: n
    },
    e
  );
}) });
export {
  h as LoadingState
};
//# sourceMappingURL=loading-state.js.map
