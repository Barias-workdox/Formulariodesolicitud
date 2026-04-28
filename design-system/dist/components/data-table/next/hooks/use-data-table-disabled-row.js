import { useContext as o } from "react";
import "../contexts/data-table.context.js";
import { DataTableDisabledRowContext as t } from "../contexts/data-table-disabled-row.context.js";
const r = () => {
  const e = o(t);
  return e || { isRowDisabled: !1, disableReason: void 0 };
};
export {
  r as useDataTableDisabledRow
};
//# sourceMappingURL=use-data-table-disabled-row.js.map
