import { jsxs as z, jsx as i } from "react/jsx-runtime";
import { useRef as oe, useState as d } from "react";
import { MIN_COLUMN_WIDTH as te } from "../../data-table.constants.js";
import { useDataTableContext as M } from "../../hooks/use-data-table-context.js";
import { renderVirtualizedRows as se } from "../../utils/data-table.utils.js";
import "../../../../truncated-text/truncated-text.js";
import "../../contexts/data-table.context.js";
import "../../contexts/data-table-disabled-row.context.js";
import { noop as le } from "../../../../../utils/noop.js";
import { LoadingState as ie } from "./components/loading-state/loading-state.js";
import { ResizeColumnLine as ne } from "./components/resize-column-line/resize-column-line.js";
import { TableCell as re } from "./components/table-cell/table-cell.js";
import { TableHeaderCell as ae } from "./components/table-header-cell/table-header-cell.js";
import { StyledTableColumn as me, StyledTableColumnContent as ce } from "./table-column.styles.js";
const ze = ({
  dataTestId: n = "data-table__column",
  id: r,
  columnIndex: t,
  label: y,
  isDraggable: h,
  isDragging: s = !1,
  isSortable: E,
  isFixed: w = !1,
  isRemovable: k,
  isResizable: R = !1,
  dataType: j,
  align: C = "left",
  width: B,
  minWidth: $ = te,
  maxWidth: H,
  columnData: v,
  updateIsDragDisabled: o
}) => {
  const u = oe(null), [l, b] = d(!1), [N, O] = d(!1), [a, P] = d(() => B), {
    isLoading: W,
    isScrollable: F,
    isRowClickable: U = !1,
    showRowsSelection: V = !1,
    showHeaders: q,
    hoveredRowIndex: A,
    rowHeight: S,
    orderBy: G = "",
    orderDirection: J = "asc",
    virtualItems: K,
    data: m,
    handleOnChange: _,
    onClickRow: Q = le,
    onContextMenu: X,
    updateHoveredRowIndex: p,
    isColumnDisabledByReason: Y
  } = M(), c = v.length > 0, {
    paginationSettings: { isEnabled: Z, method: I } = {},
    rowsSelected: g = [],
    rowsDisabled: L = {}
  } = M(), f = W && !(Z && I === "infinite"), x = (e) => {
    e !== a && (P(e), _({ payload: { id: r, width: e }, event: "resize-column-width" }));
  };
  return /* @__PURE__ */ z(
    me,
    {
      ref: u,
      $isFirstColumn: t === 0,
      $isLastColumn: t === ((m == null ? void 0 : m.length) || 0) - 1,
      $isDragging: s,
      $isFixed: w && c,
      $isScrollable: F,
      $isHeaderHovered: l,
      $isSelectable: V,
      $isResizeHovered: N,
      $isResizable: R && !f,
      $width: a,
      $minWidth: $,
      $maxWidth: H,
      children: [
        /* @__PURE__ */ z(ce, { children: [
          q && /* @__PURE__ */ i(
            ae,
            {
              dataTestId: `${n}__header-cell`,
              id: r,
              label: y,
              isDragging: s,
              isSortable: E,
              isHovered: l,
              align: C,
              isRemovable: k,
              isDraggable: h && c,
              isFixed: w,
              orderBy: G,
              orderDirection: J,
              dataType: j,
              handleOnChange: _,
              onMouseEnter: () => {
                o == null || o(!h), b(!0);
              },
              onMouseLeave: () => {
                o == null || o(!0), b(!1);
              }
            }
          ),
          se({
            virtualItems: K,
            renderRow: (e) => {
              const T = L[e], D = e in L && Y(T, "data", r);
              return /* @__PURE__ */ i(
                re,
                {
                  dataTestId: `${n}__cell-${e}`,
                  isHeaderHovered: l,
                  align: C,
                  disableReason: T,
                  isRowChecked: g.some((ee) => ee === e),
                  isRowDisabled: D,
                  isRowHovered: A === e,
                  isRowClickable: U,
                  isDragging: s,
                  height: S,
                  rowIndex: e,
                  onMouseEnter: () => {
                    p(e);
                  },
                  onMouseLeave: () => {
                    p(-1);
                  },
                  onClick: () => {
                    Q(e);
                  },
                  onContextMenu: X,
                  children: v[e]
                },
                `${t}-${e}`
              );
            }
          }),
          f && /* @__PURE__ */ i(
            ie,
            {
              columnIndex: t,
              isDragging: s,
              isHeaderHovered: l,
              rowHeight: S
            }
          )
        ] }),
        R && !f && c && /* @__PURE__ */ i(
          ne,
          {
            dataTestId: `${n}__resize-line`,
            columnRef: u,
            minWidth: $,
            maxWidth: H,
            width: a,
            updateWidth: x,
            setIsResizeHovered: O
          }
        )
      ]
    }
  );
};
export {
  ze as TableColumn
};
//# sourceMappingURL=table-column.js.map
