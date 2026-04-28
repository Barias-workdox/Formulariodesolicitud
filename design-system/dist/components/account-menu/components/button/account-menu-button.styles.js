import { themedStyled as n } from "../../../../themes/utilities.js";
const s = n(
  "button",
  ({ $theme: o, $isActive: r, $isHovered: e, $isDisabled: l, $isTriggerButton: t }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "32px",
    textDecoration: "none",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: t ? `0px ${o.spacing.spacingXs} 0px 0px` : `0px ${o.spacing.spacingXs}`,
    color: o.colors.neutral,
    backgroundColor: o.colors.transparent,
    transition: "background-color 0.15s ease-out, color 0.15s ease-out",
    width: "100%",
    borderRadius: t ? o.borders.borderSm : "0px",
    ...(e || r) && {
      backgroundColor: o.colors.neutralBase,
      color: o.colors.neutralMedium,
      fontWeight: 500
    },
    ...l && {
      opacity: 0.5,
      pointerEvents: "auto",
      cursor: "not-allowed"
    },
    ":focus-within": {
      outlineOffset: "-2px",
      outline: `2px solid ${o.colors.neutral}`
    },
    ":focus": {
      outlineOffset: "-2px",
      outline: `2px solid ${o.colors.neutral}`
    },
    ":focus-visible": {
      outlineOffset: "-2px",
      outline: `2px solid ${o.colors.neutral}`
    }
  })
), c = n(
  "div",
  () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    color: "inherit"
  })
), a = n(
  "div",
  () => ({
    display: "flex",
    flexDirection: "row"
  })
);
export {
  s as StyledAccountMenuButton,
  a as StyledAccountMenuButtonTitle,
  c as StyledEndEnhancer
};
//# sourceMappingURL=account-menu-button.styles.js.map
