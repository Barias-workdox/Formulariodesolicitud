import { COMMON_HEIGHT_32 as a } from "../../../../../../../../../constants/common.constants.js";
const s = {
  Root: {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      overflow: "hidden"
    }
  },
  TabBorder: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.neutralSubtle
    })
  },
  TabHighlight: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.brand
    })
  },
  TabList: {
    style: { padding: 0, margin: 0 }
  },
  Tab: {
    style: ({ $isActive: o, $theme: r }) => ({
      ...r.typography.ParagraphSmall,
      margin: 0,
      height: a,
      flex: 1,
      padding: `0 ${r.spacing.spacingSm}`,
      whiteSpace: "nowrap",
      fontWeight: "400",
      ...o && {
        fontWeight: "500",
        letterSpacing: 0,
        color: r.colors.brand,
        backgroundColor: r.colors.bgBase,
        ":hover": {
          color: r.colors.brand,
          backgroundColor: r.colors.bgBase
        },
        ":focus-visible": {
          color: r.colors.brand,
          backgroundColor: r.colors.bgBase
        }
      }
    })
  },
  TabPanel: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase,
      padding: `${o.spacing.spacingXs} 0 0`
    })
  }
};
export {
  s as tabsOverrides
};
//# sourceMappingURL=legal-whisper-quotes-tabs.overrides.js.map
