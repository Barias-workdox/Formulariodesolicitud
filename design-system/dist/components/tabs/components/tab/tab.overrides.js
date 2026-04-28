import { DEFAULT_FONT as d } from "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { mergeOverridesDeep as i } from "../../../utils/baseui/helpers.js";
const a = ({ $theme: o, $isActive: r }) => ({
  color: r ? o.colors.brand : o.colors.neutralSubdued,
  backgroundColor: "transparent",
  fontWeight: r ? 500 : 400,
  letterSpacing: r ? "-0.05px" : void 0,
  ...d,
  ":hover": {
    background: "transparent",
    color: r ? o.colors.brand : o.colors.neutral
  },
  ":focus-visible": {
    background: "transparent",
    color: r ? o.colors.brand : o.colors.neutral,
    outline: `1px solid ${o.colors.brand}`,
    outlineOffset: "-1px"
  }
}), n = ({ $theme: o, $orientation: r }) => ({
  flex: 1,
  overflow: "auto",
  backgroundColor: o.colors.neutralBase,
  ...r === "horizontal" ? {
    padding: o.spacing.spacingXl
  } : {
    padding: 0
  }
}), p = {
  Tab: {
    style: ({ $isActive: o, $theme: r }) => ({
      ...a({ $theme: r, $isActive: o }),
      fontSize: r.typography.ParagraphXSmall.fontSize
    })
  },
  TabPanel: {
    style: n
  }
}, c = {
  Tab: {
    style: ({ $theme: o, $isActive: r }) => ({
      ...a({ $theme: o, $isActive: r }),
      height: "44px",
      gap: o.spacing.spacingXs,
      padding: `0 ${o.spacing.spacingMd}`,
      fontSize: o.typography.ParagraphMedium.fontSize
    })
  },
  TabPanel: {
    style: n
  },
  ArtworkContainer: {
    style: {
      margin: 0
    }
  }
}, g = {
  default: p,
  medium: c
}, y = ({
  "data-testid": o,
  overrides: r = {},
  showPanels: s = !0,
  kind: l
}) => {
  const t = {
    Tab: {
      props: {
        "data-testid": o
      }
    }
  }, e = s ? {} : {
    TabPanel: { component: () => null }
  };
  return i(t, g[l], e, r);
};
export {
  y as getTabOverridesByKind,
  c as mediumTabOverrides
};
//# sourceMappingURL=tab.overrides.js.map
