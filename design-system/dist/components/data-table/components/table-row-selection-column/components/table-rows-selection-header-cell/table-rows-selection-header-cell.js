import { jsx as o } from "react/jsx-runtime";
import { Checkbox as m } from "../../../../../checkbox/checkbox.js";
import { useDataTableContext as C } from "../../../../hooks/use-data-table-context.js";
import { getOverrideProps as p, getOverride as v } from "../../../../../../utils/overrides.utils.js";
import { useCss as f } from "../../../../../utils/hooks/use-css.js";
import { headerCellStyles as h } from "../../../common/table-header-cell/table-header-cell.styles.js";
const k = ({
  "data-testid": r,
  isAllCheck: s,
  isIndeterminate: i,
  onClickAll: n,
  overrides: l
}) => {
  const { containerStyles: a } = f(h, {
    align: "center",
    isActionCell: !0
  }), { overrides: e } = C(), c = p(e == null ? void 0 : e.TableRowsSelectionHeaderCell), { CellContent: d = {} } = c.overrides ?? l ?? {}, t = v(d);
  return /* @__PURE__ */ o("div", { className: a, children: t !== void 0 ? /* @__PURE__ */ o(t, {}) : /* @__PURE__ */ o(
    m,
    {
      isIndeterminate: i,
      "data-testid": r,
      checked: s,
      onChange: n
    }
  ) });
};
export {
  k as TableRowsSelectionHeaderCell
};
//# sourceMappingURL=table-rows-selection-header-cell.js.map
