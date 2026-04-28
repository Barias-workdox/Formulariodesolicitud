import { jsx as t, Fragment as a } from "react/jsx-runtime";
import { DEFAULT_SKELETON_ROW_COUNT as i } from "../../../../data-table.constants.js";
import { TableCellSkeleton as d } from "../table-cell-skeleton/table-cell-skeleton.js";
const h = ({
  columnIndex: r,
  isDragging: o,
  rowHeight: n,
  isHeaderHovered: l
}) => /* @__PURE__ */ t(a, { children: Array.from({ length: i }, (s, m) => {
  const e = `${r}-cell-skeleton-${m}`;
  return /* @__PURE__ */ t(
    d,
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
