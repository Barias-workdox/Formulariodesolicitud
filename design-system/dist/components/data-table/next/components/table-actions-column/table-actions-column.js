import { jsxs as f, jsx as l } from "react/jsx-runtime";
import { useDataTableContext as p } from "../../hooks/use-data-table-context.js";
import { useCss as D } from "../../../../utils/hooks/use-css.js";
import { renderVirtualizedRows as H } from "../../utils/data-table.utils.js";
import { TableActionCell as g } from "./components/table-actions-column-cell/table-actions-column-cell.js";
import { TableActionsColumnHeaderCell as v } from "./components/table-actions-column-header-cell/table-actions-column-header-cell.js";
import { actionsColumnsStyles as A } from "./table-actions-column.styles.js";
const x = () => {
  const {
    data: n = [],
    rowHeight: e,
    rowsDisabled: s = {},
    hoveredRowIndex: i,
    isScrollable: a,
    columnsConfig: m = [],
    allColumnsConfig: c = [],
    showHeaders: d,
    showHeaderActionButton: u = !0,
    virtualItems: w,
    handleOnChange: b,
    updateHoveredRowIndex: t,
    isColumnDisabledByReason: C
  } = p(), { containerStyles: h } = D(A, {
    $isScrollable: a,
    $rowHeight: e
  });
  return /* @__PURE__ */ f("div", { className: h, children: [
    d && /* @__PURE__ */ l(
      v,
      {
        columnsConfig: m,
        allColumnsConfig: c,
        handleOnChange: b,
        showButton: u
      }
    ),
    H({
      virtualItems: w,
      renderRow: (o) => {
        const r = s[o], R = o in s && C(r, "actions");
        return /* @__PURE__ */ l(
          g,
          {
            disableReason: r,
            isRowHovered: i === o,
            isRowDisabled: R,
            height: e,
            onMouseEnter: () => {
              t(o);
            },
            onMouseLeave: () => {
              t(-1);
            },
            children: n[o].at(-1)
          },
          o
        );
      }
    })
  ] });
};
export {
  x as TableActionsColumn
};
//# sourceMappingURL=table-actions-column.js.map
