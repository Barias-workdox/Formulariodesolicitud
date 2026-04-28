import { SIDEBAR_FAST_TRANSITION_DURATION as r, SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT as n } from "../../sidebar.constants.js";
import { COMMON_FONT_WEIGHT_SEMIBOLD as i } from "./sidebar-link.constants.js";
const u = {
  rootStyles: (o, { isAvatar: l, isActive: a, isHovered: c, isDisabled: t, isCollapsed: s }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: "none",
    color: o.colors.neutralSubdued,
    borderRadius: l ? s ? o.spacing.spacingXl : `${o.spacing.spacingXl} ${o.spacing.spacingXs}` : o.spacing.spacingXs,
    backgroundColor: o.colors.transparent,
    transition: `background-color ${r} ${n}, color ${r} ${n}, width ${r} ${n}`,
    width: s ? "fit-content" : "100%",
    ...c && {
      backgroundColor: o.colors.neutralBase,
      color: o.colors.neutralMedium,
      fontWeight: i
    },
    ...a && {
      fontWeight: i,
      backgroundColor: o.colors.brandWashed,
      color: o.colors.brandMedium,
      ...c && {
        backgroundColor: o.colors.brandSubtle,
        color: o.colors.brandMedium
      }
    },
    ...t && {
      opacity: 0.5,
      pointerEvents: "none"
    },
    ":focus-visible": {
      outlineOffset: "-2px",
      outline: `2px solid ${o.colors.neutral}`
    }
  }),
  chevronStyles: (o) => ({
    marginRight: o.spacing.spacingXs
  })
};
export {
  u as styles
};
//# sourceMappingURL=sidebar-link.styles.js.map
