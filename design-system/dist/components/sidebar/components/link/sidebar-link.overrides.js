import { SIDEBAR_FAST_TRANSITION_DURATION as l, SIDEBAR_TRANSITION_TIMING_FUNCTION_EASE_OUT as n, SIDEBAR_MEDIUM_TRANSITION_DURATION as c } from "../../sidebar.constants.js";
import { TEXT_LINE_HEIGHT as s } from "./sidebar-link.constants.js";
const i = ({
  isActive: r,
  isHovered: a
}) => ({
  Root: {
    style: ({ $theme: o }) => ({
      borderRadius: o.spacing.spacingXs,
      backgroundColor: o.colors.neutralBase,
      transition: `background-color ${l} ${n}`,
      ...a && {
        backgroundColor: o.colors.neutralBase,
        ...r && {
          backgroundColor: o.colors.brandSubtle
        }
      },
      ...r && !a && {
        backgroundColor: o.colors.brandWashed
      }
    })
  }
}), g = ({
  isActive: r,
  isHovered: a
}) => ({
  Root: {
    style: ({ $theme: o }) => ({
      borderRadius: o.spacing.spacingXl,
      backgroundColor: o.colors.brandSubtle,
      transition: `background-color ${l} ${n}, color ${l} ${n}`,
      ...a && {
        backgroundColor: o.colors.brand,
        color: o.colors.textBase,
        ...r && {
          backgroundColor: o.colors.brand
        }
      },
      ...r && !a && {
        color: o.colors.textBase,
        backgroundColor: o.colors.brandSubdued
      }
    })
  },
  Initials: {
    style: ({ $theme: o }) => ({
      color: o.colors.brandMedium,
      transition: `color ${l} ${n}`,
      ...(r || a) && {
        color: o.colors.textBase
      }
    })
  }
}), u = ({
  isCollapsed: r,
  hideTextWhenCollapsed: a = !0
}) => ({
  Block: {
    style: ({ $theme: o }) => ({
      margin: `0 ${o.spacing.spacingXs} 0 ${o.spacing.spacingXs}`,
      color: "inherit",
      lineHeight: s,
      transition: `width ${c} ${n}, opacity ${l} ${n}`,
      width: !r || !a ? "auto" : "0",
      flex: "1 1 auto",
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    })
  }
});
export {
  g as getAvatarOverrides,
  i as getBackgroundIconOverrides,
  u as getTextOverrides
};
//# sourceMappingURL=sidebar-link.overrides.js.map
