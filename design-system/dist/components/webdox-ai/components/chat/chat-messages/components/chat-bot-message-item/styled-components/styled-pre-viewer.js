import { themedStyled as o } from "../../../../../../../../themes/utilities.js";
const d = o("pre", ({ $theme: r }) => ({
  ...r.typography.ParagraphSmall,
  backgroundColor: r.colors.neutralWashed,
  padding: r.spacing.spacingSm,
  margin: 0,
  ":has(*) code": {
    border: "none",
    backgroundColor: "transparent",
    padding: 0,
    color: r.colors.neutralSubdued
  }
}));
export {
  d as StyledPreViewer
};
//# sourceMappingURL=styled-pre-viewer.js.map
