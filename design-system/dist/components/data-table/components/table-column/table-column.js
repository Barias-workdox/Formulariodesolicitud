import { jsxs as T, jsx as o } from "react/jsx-runtime";
import { useRef as se, useState as w, useDeferredValue as ie } from "react";
import { MIN_COLUMN_WIDTH as le } from "../../data-table.constants.js";
import { useDataTableContext as k } from "../../hooks/use-data-table-context.js";
import { renderVirtualizedRows as te } from "../../utils/data-table.utils.js";
import "../../contexts/data-table-disabled-row.context.js";
import "../../../truncated-text/truncated-text.js";
import { noop as re } from "../../../../utils/noop.js";
import { LoadingState as ne } from "./components/loading-state/loading-state.js";
import { ResizeColumnLine as ae } from "./components/resize-column-line/resize-column-line.js";
import { TableCell as de } from "./components/table-cell/table-cell.js";
import { TableHeaderCell as ce } from "./components/table-header-cell/table-header-cell.js";
import { StyledTableColumn as me, StyledTableColumnContent as fe } from "./table-column.styles.js";
const he = ({
  virtualItems: t,
  columnData: s
}) => {
  const i = ie(t);
  return /* @__PURE__ */ o(
    "div",
    {
      "aria-hidden": !0,
      style: { height: 0, overflow: "hidden", visibility: "hidden" },
      children: i.map(
        (r) => s[r.index] != null ? /* @__PURE__ */ o(
          "div",
          {
            style: { display: "flex", whiteSpace: "nowrap", padding: "0 1.5rem" },
            children: s[r.index]
          },
          r.key
        ) : null
      )
    }
  );
}, Te = ({
  dataTestId: t = "data-table__column",
  id: s,
  columnIndex: i,
  label: r,
  isDraggable: C,
  isDragging: n = !1,
  isSortable: E,
  isFixed: R = !1,
  isRemovable: j,
  isResizable: u = !1,
  dataType: B,
  align: v = "left",
  width: N,
  minWidth: $ = le,
  maxWidth: H,
  columnData: c,
  updateIsDragDisabled: l
}) => {
  const b = se(null), [a, p] = w(!1), [O, P] = w(!1), [m, V] = w(() => N), {
    isLoading: W,
    isScrollable: F,
    isRowClickable: U = !1,
    showRowsSelection: q = !1,
    autoMeasureCells: A = !1,
    showHeaders: G,
    hoveredRowIndex: I,
    rowHeight: S,
    orderBy: J = "",
    orderDirection: K = "asc",
    virtualItems: y,
    data: f,
    handleOnChange: _,
    onClickRow: Q = re,
    onContextMenu: X,
    updateHoveredRowIndex: L,
    isColumnDisabledByReason: Y
  } = k(), d = c.length > 0, {
    paginationSettings: { isEnabled: Z, method: x } = {},
    rowsSelected: g = [],
    rowsDisabled: z = {}
  } = k(), h = W && !(Z && x === "infinite"), D = (e) => {
    e !== m && (V(e), _({ payload: { id: s, width: e }, event: "resize-column-width" }));
  };
  return /* @__PURE__ */ T(
    me,
    {
      ref: b,
      $isFirstColumn: i === 0,
      $isLastColumn: i === ((f == null ? void 0 : f.length) || 0) - 1,
      $isDragging: n,
      $isFixed: R && d,
      $isScrollable: F,
      $isHeaderHovered: a,
      $isSelectable: q,
      $isResizeHovered: O,
      $isResizable: u && !h,
      $width: m,
      $minWidth: $,
      $maxWidth: H,
      children: [
        /* @__PURE__ */ T(fe, { children: [
          G && /* @__PURE__ */ o(
            ce,
            {
              dataTestId: `${t}__header-cell`,
              id: s,
              label: r,
              isDragging: n,
              isSortable: E,
              isHovered: a,
              align: v,
              isRemovable: j,
              isDraggable: C && d,
              isFixed: R,
              orderBy: J,
              orderDirection: K,
              dataType: B,
              handleOnChange: _,
              onMouseEnter: () => {
                l == null || l(!C), p(!0);
              },
              onMouseLeave: () => {
                l == null || l(!0), p(!1);
              }
            }
          ),
          A && d && /* @__PURE__ */ o(
            he,
            {
              virtualItems: y,
              columnData: c
            }
          ),
          te({
            virtualItems: y,
            renderRow: (e) => {
              const M = z[e], ee = e in z && Y(M, "data", s);
              return /* @__PURE__ */ o(
                de,
                {
                  dataTestId: `${t}__cell-${e}`,
                  isHeaderHovered: a,
                  align: v,
                  disableReason: M,
                  isRowChecked: g.some((oe) => oe === e),
                  isRowDisabled: ee,
                  isRowHovered: I === e,
                  isRowClickable: U,
                  isDragging: n,
                  height: S,
                  rowIndex: e,
                  onMouseEnter: () => {
                    L(e);
                  },
                  onMouseLeave: () => {
                    L(-1);
                  },
                  onClick: () => {
                    Q(e);
                  },
                  onContextMenu: X,
                  children: c[e]
                },
                `${i}-${e}`
              );
            }
          }),
          h && /* @__PURE__ */ o(
            ne,
            {
              columnIndex: i,
              isDragging: n,
              isHeaderHovered: a,
              rowHeight: S
            }
          )
        ] }),
        u && !h && d && /* @__PURE__ */ o(
          ae,
          {
            dataTestId: `${t}__resize-line`,
            columnRef: b,
            minWidth: $,
            maxWidth: H,
            width: m,
            updateWidth: D,
            setIsResizeHovered: P
          }
        )
      ]
    }
  );
};
export {
  Te as TableColumn
};
//# sourceMappingURL=table-column.js.map
