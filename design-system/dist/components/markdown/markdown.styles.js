import { cellStyles as o } from "../data-table/components/common/table-cell/table-cell.styles.js";
import { headerCellStyles as e } from "../data-table/components/common/table-header-cell/table-header-cell.styles.js";
import { getTableContainerStyles as a } from "../data-table/data-table.styles.js";
const s = {
  imgStyles: { maxWidth: "100%" },
  preStyles: (l) => ({
    backgroundColor: l.colors.neutralWashed,
    border: `1px solid ${l.colors.neutralSubtle}`,
    padding: l.spacing.spacingSm,
    borderRadius: "4px",
    ":has(*) code": {
      border: "none",
      backgroundColor: "transparent",
      padding: 0,
      color: "inherit"
    }
  }),
  codeStyles: (l) => ({
    backgroundColor: l.colors.negativeSubtle,
    color: l.colors.negative,
    padding: `0 ${l.spacing.spacing2xs}`,
    borderRadius: "4px"
  }),
  blockquoteStyles: (l) => ({
    margin: `0 0 ${l.spacing.spacingSm}`,
    padding: `${l.spacing.spacingSm} ${l.spacing.spacingLg}`,
    borderLeft: `6px solid ${l.colors.neutralSubtle}`
  }),
  tableStyles: (l) => ({
    ...a({ $theme: l }),
    display: "table",
    borderSpacing: 0,
    width: "auto",
    maxWidth: "100%"
  }),
  tableHeaderStyles: (l) => ({
    ...e.containerStyles(l),
    display: "table-cell",
    textAlign: void 0,
    position: void 0
  }),
  tableCellStyles: (l) => ({
    ...o.containerStyles(l),
    display: "table-cell",
    textAlign: void 0,
    textWrap: void 0
  })
};
export {
  s as styles
};
//# sourceMappingURL=markdown.styles.js.map
