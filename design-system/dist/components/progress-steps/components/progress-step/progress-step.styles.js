import { themedStyled as i } from "../../../../themes/utilities.js";
const s = {
  checked: {
    default: "positiveSubtle",
    hover: "positiveDepressed"
  },
  default: {
    default: "brandSubtle",
    hover: "brandDepressed"
  },
  pending: {
    default: "neutralWashed",
    hover: "neutralWashed"
  },
  warning: {
    default: "warningSubtle",
    hover: "warningDepressed"
  }
}, d = i(
  "div",
  ({ $theme: e, $type: o, $isEnabledMouseEvents: r, $width: n }) => ({
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: o !== "compressed" ? "column" : "row",
    alignItems: "center",
    gap: e.spacing.spacingXs,
    padding: `${e.spacing.spacing2xs} ${e.spacing.spacingXs}`,
    cursor: r ? "pointer" : "not-allowed",
    width: o !== "compressed" ? n : void 0,
    boxSizing: "border-box",
    ":focus": {
      outline: `1px solid ${e.colors.brandMedium}`,
      backgroundColor: "rgb(255, 255, 255, 0.1)"
    }
  })
), a = i(
  "div",
  ({ $theme: e, $kind: o, $isHovered: r }) => {
    const n = r ? s[o].hover : s[o].default;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: e.colors[n],
      transition: "all 0.25s ease-out",
      flexShrink: 0
    };
  }
);
export {
  a as StyledIconWrapper,
  d as StyledProgressStep
};
//# sourceMappingURL=progress-step.styles.js.map
