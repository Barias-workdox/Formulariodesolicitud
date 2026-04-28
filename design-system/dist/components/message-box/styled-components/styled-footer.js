import { themedStyled as o } from "../../../themes/utilities.js";
import { FOOTER_HEIGHT_PX as i } from "../message-box.constants.js";
const a = o("div", ({ $theme: n }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  backgroundColor: n.colors.neutralWashed,
  padding: `0 ${n.spacing.spacingXs}`,
  minHeight: i,
  gap: n.spacing.spacingXs
}));
export {
  a as StyledFooter
};
//# sourceMappingURL=styled-footer.js.map
