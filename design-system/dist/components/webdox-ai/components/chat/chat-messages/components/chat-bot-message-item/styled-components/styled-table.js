import { styles as t } from "../../../../../../../markdown/markdown.styles.js";
import { themedStyled as l } from "../../../../../../../../themes/utilities.js";
const s = l("table", ({ $theme: e }) => ({
  ...t.tableStyles(e),
  border: "unset"
})), a = l("table", ({ $theme: e }) => ({
  ...t.tableStyles(e),
  border: "unset",
  width: "100%",
  ":has(*) thead": {
    color: "unset",
    ":hover": {
      color: "unset"
    }
  }
}));
export {
  s as StyledTable,
  a as StyledTableViewer
};
//# sourceMappingURL=styled-table.js.map
