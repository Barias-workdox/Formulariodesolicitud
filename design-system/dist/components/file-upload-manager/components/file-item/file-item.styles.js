import { FILES_LIST_ITEM_HEIGHT as e } from "../../file-upload-manager.constants.js";
import { themedStyled as n } from "../../../../themes/utilities.js";
const d = n(
  "div",
  ({ $theme: i, $isHovered: t = !1 }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: `${i.spacing.spacing2xs} ${i.spacing.spacingXs}`,
    alignItems: "center",
    maxWidth: "100%",
    height: `${e}px`,
    gap: i.spacing.spacingXs,
    backgroundColor: t ? i.colors.neutralWashed : void 0,
    boxSizing: "border-box"
  })
), o = n("div", ({ $theme: i }) => ({
  padding: `${i.spacing.spacingXs} ${i.spacing.spacing2xs}`
})), l = n("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
  maxWidth: "100%"
}), c = n("div", {
  display: "flex",
  minWidth: 0
}), p = n("div", {
  flexShrink: 1,
  minWidth: 0,
  maxWidth: "50%"
}), r = n("div", {
  flexShrink: 1,
  minWidth: 0
});
export {
  d as StyledContainer,
  l as StyledFileDetails,
  o as StyledIconWrapper,
  r as StyledNameContainer,
  c as StyledPathAndNameContainer,
  p as StyledPathContainer
};
//# sourceMappingURL=file-item.styles.js.map
