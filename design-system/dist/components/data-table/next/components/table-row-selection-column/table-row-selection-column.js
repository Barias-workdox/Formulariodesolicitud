import { jsxs as T, jsx as d } from "react/jsx-runtime";
import { useMemo as j, useCallback as h } from "react";
import { Checkbox as M } from "../../../../checkbox/checkbox.js";
import { useDataTableContext as $ } from "../../hooks/use-data-table-context.js";
import { useCss as x } from "../../../../utils/hooks/use-css.js";
import { renderVirtualizedRows as L } from "../../utils/data-table.utils.js";
import { TableRowSelectionCell as O } from "./components/table-row-selection-cell/table-row-selection-cell.js";
import { TableRowsSelectionHeaderCell as B } from "./components/table-rows-selection-header-cell/table-rows-selection-header-cell.js";
import { rowSelectionColumnsStyles as E } from "./table-row-selection-column.styles.js";
const U = () => {
  var b;
  const {
    "data-testid": r,
    isScrollable: R,
    columnsConfig: u = [],
    rowsSelected: n = [],
    rowsDisabled: c = {},
    data: o = [],
    showHeaders: S,
    virtualItems: f,
    hoveredRowIndex: k,
    rowHeight: p,
    updateHoveredRowIndex: m,
    handleOnChange: w,
    isColumnDisabledByReason: g
  } = $(), s = j(() => new Set(n), [n]), v = !((b = u[0]) != null && b.isFixed) && R, { containerStyles: z } = x(E, {
    showColumnShadow: v
  }), i = h(
    (e) => {
      w({
        event: "row-selection",
        payload: {
          rowsSelected: e
        }
      });
    },
    [w]
  ), y = h(
    (e) => () => {
      const l = s.has(e) ? n.filter((t) => t !== e) : [...n, e].sort();
      i(l);
    },
    [s, n, i]
  ), D = h(() => {
    if (s.size > 0) {
      i([]);
      return;
    }
    const e = (o == null ? void 0 : o.length) ?? 0, l = Array.from({ length: e }, (t, a) => a).filter(
      (t) => !(t in c)
    );
    i(l);
  }, [o == null ? void 0 : o.length, c, s.size, i]), C = ((o == null ? void 0 : o.length) ?? 0) - Object.keys(c).length, I = s.size > 0 && s.size === C, A = s.size > 0 && s.size < C;
  return /* @__PURE__ */ T("div", { className: z, children: [
    S && /* @__PURE__ */ d(
      B,
      {
        "data-testid": r ? `${r}--checkbox-all` : void 0,
        onClickAll: D,
        isAllCheck: I,
        isIndeterminate: A
      }
    ),
    L({
      virtualItems: f,
      renderRow: (e) => {
        const l = s.has(e), t = e in c, a = c[e], H = t && g(a, "actions");
        return /* @__PURE__ */ d(
          O,
          {
            disableReason: a,
            isRowHovered: k === e,
            isRowChecked: l,
            isRowDisabled: H,
            height: p,
            onMouseEnter: () => m(e),
            onMouseLeave: () => m(-1),
            children: /* @__PURE__ */ d(
              M,
              {
                "data-testid": r ? `${r}--checkbox-${e}` : void 0,
                checked: l,
                disabled: t,
                onChange: y(e)
              }
            )
          },
          e
        );
      }
    })
  ] });
};
export {
  U as TableRowSelectionColumn
};
//# sourceMappingURL=table-row-selection-column.js.map
