import { themedStyled as a } from "../../../../../../../../themes/utilities.js";
const d = a("pre", ({ $theme: r }) => ({
  ...r.typography.ParagraphSmall,
  whiteSpace: "pre-wrap",
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
  d as StyledPre
};
//# sourceMappingURL=styled-pre.js.map
