import { themedStyled as r } from "../../../../../../themes/utilities.js";
const a = r("button", ({ $theme: o }) => ({
  ...o.typography.ParagraphSmall,
  display: "flex",
  alignItems: "center",
  height: "auto",
  gap: o.spacing.spacingXs,
  textAlign: "left",
  cursor: "pointer",
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  lineHeight: 1,
  padding: `${o.spacing.spacingSm} ${o.spacing.spacingMd}`,
  color: o.colors.neutralSubdued,
  ":hover": {
    backgroundColor: o.colors.neutralBase,
    color: o.colors.neutralMedium
  },
  ":disabled": {
    color: o.colors.neutralDepressed,
    cursor: "not-allowed"
  }
}));
export {
  a as StyledPopoverMenuItemButton
};
//# sourceMappingURL=popover-menu-item.styles.js.map
