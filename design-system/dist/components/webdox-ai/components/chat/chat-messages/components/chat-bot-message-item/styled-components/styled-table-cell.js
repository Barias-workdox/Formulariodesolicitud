import { styles as t } from "../../../../../../../markdown/markdown.styles.js";
import { MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH as a } from "../../../../../../constants/webdox-ai.constants.js";
import { themedStyled as p } from "../../../../../../../../themes/utilities.js";
const e = p("td", ({ $theme: l }) => ({
  ...t.tableCellStyles(l),
  ...l.typography.ParagraphSmall,
  minWidth: a,
  padding: l.spacing.spacingXs,
  verticalAlign: "top"
}));
export {
  e as StyledTableCell
};
//# sourceMappingURL=styled-table-cell.js.map
