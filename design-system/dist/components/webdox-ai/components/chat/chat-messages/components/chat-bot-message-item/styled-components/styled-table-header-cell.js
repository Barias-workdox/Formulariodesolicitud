import { styles as a } from "../../../../../../../markdown/markdown.styles.js";
import { MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH as i } from "../../../../../../constants/webdox-ai.constants.js";
import { themedStyled as p } from "../../../../../../../../themes/utilities.js";
const s = p("th", ({ $theme: t }) => ({
  ...a.tableHeaderStyles(t),
  ...t.typography.ParagraphSmall,
  position: "sticky",
  minWidth: i,
  textAlign: "left",
  padding: `${t.spacing.spacingSm} ${t.spacing.spacingXs}`
}));
export {
  s as StyledTableHeaderCell
};
//# sourceMappingURL=styled-table-header-cell.js.map
