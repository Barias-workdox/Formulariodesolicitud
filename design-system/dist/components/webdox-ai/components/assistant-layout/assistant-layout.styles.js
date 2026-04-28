import { COMMON_HEIGHT_32 as r } from "../../../../constants/common.constants.js";
import { themedStyled as i } from "../../../../themes/utilities.js";
const e = i("div", ({ $theme: o }) => ({
  boxSizing: "border-box",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: o.colors.bgBase
})), d = i("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  gap: o.spacing.spacingXs,
  padding: o.spacing.spacingMd
})), s = i("div", ({ $theme: o }) => ({
  display: "flex",
  minWidth: r,
  minHeight: r,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: o.spacing.spacing2xs,
  background: o.colors.bgBrandAI
})), c = i("div", () => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  overflow: "hidden",
  zIndex: 1
})), t = {
  Root: {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "hidden"
    }
  },
  TabHighlight: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.brand
    })
  },
  TabBorder: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.neutralDepressed,
      margin: `0 ${o.spacing.spacingMd}`
    })
  },
  TabList: {
    style: {
      padding: 0,
      margin: 0
    }
  },
  TabBar: {
    style: ({ $theme: o }) => ({
      padding: `0 ${o.spacing.spacingMd}`
    })
  },
  Tab: {
    style: ({ $isActive: o, $theme: n }) => ({
      margin: 0,
      flex: 1,
      padding: `${n.spacing.spacingSm} 0`,
      fontWeight: "400",
      ...o && {
        letterSpacing: 0,
        color: n.colors.brand,
        ":hover": {
          color: n.colors.brand
        },
        ":focus-visible": {
          color: n.colors.brand,
          outlineColor: n.colors.brand
        }
      }
    })
  },
  TabPanel: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase,
      padding: 0
    })
  }
};
export {
  s as StyledBrainIconContainer,
  c as StyledChatContainer,
  e as StyledContainer,
  d as StyledHeader,
  t as tabsOverrides
};
//# sourceMappingURL=assistant-layout.styles.js.map
