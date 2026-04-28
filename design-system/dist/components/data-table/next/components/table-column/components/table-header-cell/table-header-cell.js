import { jsx as e, jsxs as T } from "react/jsx-runtime";
import { memo as _ } from "react";
import { Draggable as v } from "@carbon/icons-react";
import { headerCellStyles as x } from "../../../common/table-header-cell/table-header-cell.styles.js";
import { TableHeaderLabel as B } from "../../../common/table-header-label/table-header-label.js";
import { getColumnLabel as H } from "../../../../utils/data-table.utils.js";
import { useCss as L } from "../../../../../../utils/hooks/use-css.js";
import { OrderByButton as S } from "./components/order-by-button/order-by-button.js";
const A = _(function({
  dataTestId: a = "data-table__header-cell",
  id: o,
  label: t,
  isSortable: l,
  isHovered: m,
  align: s,
  isDragging: d,
  isDraggable: n,
  isFixed: i,
  isRemovable: c,
  orderBy: p,
  orderDirection: f,
  dataType: b,
  handleOnChange: y,
  ...h
}) {
  const u = o === p, { containerStyles: C, dragIconContainerStyles: g, wrapperStyles: N } = L(x, {
    isHovered: m,
    align: s,
    isDragging: d,
    isDraggable: n,
    isFixed: i,
    isSortable: l
  }), r = H(t, "header");
  return /* @__PURE__ */ e(
    "div",
    {
      ...h,
      className: C,
      children: /* @__PURE__ */ T("div", { className: N, children: [
        /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(v, { size: 16 }) }),
        typeof r == "string" || typeof r == "number" ? /* @__PURE__ */ e(B, { children: r }) : r,
        /* @__PURE__ */ e(
          S,
          {
            dataTestId: `${a}__order-by`,
            id: o,
            label: t,
            orderDirection: f,
            isOrderedByThis: u,
            isSortable: l,
            isRemovable: c,
            dataType: b,
            handleOnChange: y
          }
        )
      ] })
    }
  );
});
export {
  A as TableHeaderCell
};
//# sourceMappingURL=table-header-cell.js.map
