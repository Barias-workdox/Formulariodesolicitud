import { themedStyled as a } from "../../../../themes/utilities.js";
const l = a("div", ({ $theme: n, $captionMode: o, $disabled: r }) => ({
  display: "flex",
  alignItems: "center",
  borderLeft: `solid 1px ${n.colors.neutralSubtle}`,
  height: "100%",
  padding: `0 ${n.spacing.spacingXs}`,
  gap: n.spacing.spacingXs,
  backgroundColor: r ? n.colors.neutralWashed : o ? n.colors.neutralBase : "transparent"
}));
export {
  l as StyledInputControlsContainer
};
//# sourceMappingURL=styled-input-controls-container.js.map
