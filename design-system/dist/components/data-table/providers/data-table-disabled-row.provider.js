import { jsx as t } from "react/jsx-runtime";
import "../contexts/data-table.context.js";
import { DataTableDisabledRowContext as a } from "../contexts/data-table-disabled-row.context.js";
const b = ({
  children: o,
  isRowDisabled: r,
  disableReason: e
}) => /* @__PURE__ */ t(a.Provider, { value: { isRowDisabled: r, disableReason: e }, children: o });
export {
  b as DataTableDisabledRowProvider
};
//# sourceMappingURL=data-table-disabled-row.provider.js.map
