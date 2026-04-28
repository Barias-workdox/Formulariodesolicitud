import { themedStyled as t } from "../../../../../../themes/utilities.js";
const l = ({
  disabled: e,
  isActive: o,
  isSelected: n
}) => e ? {
  color: "neutralDepressed",
  fontWeight: "400"
} : n ? {
  color: "brandMedium",
  fontWeight: "500"
} : o ? {
  color: "brandMedium",
  fontWeight: "400"
} : {
  color: "neutralSubdued",
  fontWeight: "400"
}, i = t("div", ({ $theme: e }) => ({
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingXs,
  flex: 1
})), d = t("span", () => ({
  overflow: "hidden",
  flex: 1
}));
export {
  d as StyledLabelContainer,
  i as StyledRoot,
  l as getItemLabelTextStyles
};
//# sourceMappingURL=item-label.styles.js.map
