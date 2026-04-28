import { DATA_TABLE_Z_INDEX as r, ROW_SELECTION_COLUMN_WIDTH as i } from "../../data-table.constants.js";
import { getTransitionStyles as n } from "../../../../../utils/styles.utils.js";
import { commonStyles as e } from "../../data-table.styles.js";
const c = {
  containerStyles: (o, { showColumnShadow: t }) => ({
    ...e,
    position: "sticky",
    left: 0,
    width: i,
    borderRight: `1px solid ${o.colors.neutralSubtle}`,
    transition: n(["box-shadow"]),
    boxShadow: `0px 8px 24px 0 ${t ? "rgba(149, 157, 165, 0.20)" : "transparent"}`,
    backgroundColor: o.colors.bgBase,
    zIndex: r.rowSelectionColumn,
    "::after": {
      content: '""',
      height: "100%",
      width: "1px",
      position: "absolute",
      zIndex: r.rowSelectionColumn,
      top: 0,
      left: 0,
      backgroundColor: o.colors.neutralSubtle,
      transition: n(["opacity"]),
      opacity: t ? 1 : 0
    }
  })
};
export {
  c as rowSelectionColumnsStyles
};
//# sourceMappingURL=table-row-selection-column.styles.js.map
