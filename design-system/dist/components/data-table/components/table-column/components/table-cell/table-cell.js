import { jsx as f } from "react/jsx-runtime";
import { memo as N, useCallback as p } from "react";
import { DataTableDisabledRowProvider as q } from "../../../../providers/data-table-disabled-row.provider.js";
import { useCss as A } from "../../../../../utils/hooks/use-css.js";
import { cellStyles as B } from "../../../common/table-cell/table-cell.styles.js";
const U = N(function({
  dataTestId: o = "data-table__cell",
  children: i,
  isHeaderHovered: d,
  align: P,
  disableReason: h = "",
  isRowHovered: u,
  isRowChecked: y,
  isRowClickable: T,
  isRowDisabled: a = !1,
  isDragging: b,
  height: g,
  role: e,
  rowIndex: s,
  tabIndex: c,
  onClick: t,
  onContextMenu: l,
  onKeyDown: m,
  ...S
}) {
  const { containerStyles: _ } = A(B, {
    isHeaderHovered: d,
    isRowHovered: u,
    isRowChecked: y,
    isDragging: b,
    isRowDisabled: a,
    align: P,
    isRowClickable: T,
    height: g
  }), j = p(
    (r) => {
      r.preventDefault(), l == null || l(r, s);
    },
    [l, s]
  ), z = p(
    (r) => {
      r.stopPropagation(), t && !a && t(r);
    },
    [t, a]
  ), E = p(
    (r) => {
      (r.key === "Enter" || r.key === " ") && t && m && !a && (r.preventDefault(), r.stopPropagation(), t(r), m(r));
    },
    [t, m, a]
  );
  return /* @__PURE__ */ f(
    q,
    {
      isRowDisabled: a,
      disableReason: h,
      children: /* @__PURE__ */ f(
        "div",
        {
          "data-testid": o,
          className: _,
          onContextMenu: j,
          ...t ? {
            onClick: z,
            onKeyDown: E,
            role: e ?? "button",
            tabIndex: c ?? 0
          } : {
            role: e,
            tabIndex: c,
            onKeyDown: m
          },
          ...S,
          children: i
        }
      )
    }
  );
});
export {
  U as TableCell
};
//# sourceMappingURL=table-cell.js.map
