import { themedStyled as e } from "../../themes/utilities.js";
const s = e("div", ({ $theme: o }) => ({
  backgroundColor: o.colors.bgBase,
  borderColor: o.colors.neutralSubtle,
  borderStyle: "solid",
  borderWidth: "1px"
})), t = e("div", ({ $theme: o, $isOpen: d }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: o.spacing.spacingXs,
  justifyContent: "space-between",
  borderBottom: d ? `1px solid ${o.colors.neutralSubtle}` : "none",
  overflow: "hidden",
  gap: o.spacing.spacingXs,
  backgroundColor: o.colors.neutralWashed
})), l = e("div", ({ $theme: o }) => ({
  display: "flex",
  gap: o.spacing.spacing2xs
})), r = e("div", ({ $height: o, $isOpen: d }) => ({
  overflow: "hidden",
  transition: "height 0.3s ease-in-out",
  height: d ? o : "0px"
}));
export {
  l as StyledActionIcons,
  r as StyledBody,
  t as StyledHeader,
  s as StyledRoot
};
//# sourceMappingURL=collapsible-content.styles.js.map
