import { jsx as o } from "react/jsx-runtime";
import { Checkbox as m } from "../../../../../../checkbox/checkbox.js";
import { useDataTableContext as C } from "../../../../hooks/use-data-table-context.js";
import { useCss as p } from "../../../../../../utils/hooks/use-css.js";
import { getOverrideProps as v, getOverride as f } from "../../../../../../../utils/overrides.utils.js";
import { headerCellStyles as h } from "../../../common/table-header-cell/table-header-cell.styles.js";
const k = ({
  "data-testid": r,
  isAllCheck: s,
  isIndeterminate: i,
  overrides: n,
  onClickAll: l
}) => {
  const { containerStyles: a } = p(h, {
    align: "center",
    isActionCell: !0
  }), { overrides: e } = C(), c = v(e == null ? void 0 : e.TableRowsSelectionHeaderCell), { CellContent: d = {} } = c.overrides ?? n ?? {}, t = f(d);
  return /* @__PURE__ */ o("div", { className: a, children: t !== void 0 ? /* @__PURE__ */ o(t, {}) : /* @__PURE__ */ o(
    m,
    {
      isIndeterminate: i,
      "data-testid": r,
      checked: s,
      onChange: l
    }
  ) });
};
export {
  k as TableRowsSelectionHeaderCell
};
//# sourceMappingURL=table-rows-selection-header-cell.js.map
