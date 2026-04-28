import { DATA_TABLE_Z_INDEX as n } from "../../data-table.constants.js";
import { getTransitionStyles as i } from "../../../../utils/styles.utils.js";
import { commonStyles as e } from "../../data-table.styles.js";
const l = {
  containerStyles: (o, { $isScrollable: t, $rowHeight: r }) => ({
    ...e,
    position: "sticky",
    right: 0,
    flexShrink: 0,
    minWidth: r,
    transition: i(["box-shadow"]),
    boxShadow: `0px 8px 24px 0 ${t ? "rgba(149, 157, 165, 0.20)" : "transparent"}`,
    zIndex: n.fixedColumn,
    backgroundColor: o.colors.bgBase,
    "::after": {
      content: '""',
      height: "100%",
      width: "1px",
      position: "absolute",
      zIndex: n.fixedColumn,
      top: 0,
      left: 0,
      backgroundColor: o.colors.neutralSubtle,
      transition: i(["opacity"]),
      opacity: t ? 1 : 0
    }
  })
};
export {
  l as actionsColumnsStyles
};
//# sourceMappingURL=table-actions-column.styles.js.map
