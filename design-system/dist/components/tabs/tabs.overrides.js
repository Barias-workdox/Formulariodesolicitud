const l = {
  Root: {
    style: ({ $orientation: o }) => ({
      flex: 1,
      display: "flex",
      overflow: "hidden",
      ...o === "horizontal" ? { flexDirection: "column" } : { flex: void 0 }
    })
  },
  TabList: {
    style: ({ $orientation: o, $theme: i }) => ({
      backgroundColor: "transparent",
      padding: `0 ${i.spacing.spacingXl}`,
      marginBottom: "-1px",
      ...o === "vertical" && { marginRight: "-2px" }
    })
  },
  TabBorder: {
    style: ({ $theme: o, $orientation: i }) => ({
      backgroundColor: i === "horizontal" ? o.colors.divisionLine : "transparent",
      ...i === "horizontal" ? { height: "1px" } : { width: "1px" }
    })
  },
  TabHighlight: {
    style: ({
      $theme: o,
      $orientation: i
    }) => ({
      backgroundColor: o.colors.brand,
      ...i === "horizontal" ? { height: "1px" } : { width: "1px", right: "1px" }
    })
  }
}, r = {
  Root: {
    style: ({ $orientation: o }) => ({
      flexShrink: 0,
      display: o === "horizontal" ? "inline-block" : "inline-flex"
    })
  },
  TabList: {
    style: ({ $orientation: o }) => ({
      padding: 0,
      marginBottom: o === "horizontal" ? "-1px" : 0,
      marginRight: 0
    })
  },
  TabBorder: {
    style: ({ $theme: o, $orientation: i }) => ({
      display: i === "horizontal" ? "block" : "none",
      backgroundColor: o.colors.divisionLine,
      ...i === "horizontal" ? { height: "1px" } : { width: "1px" }
    })
  },
  TabHighlight: {
    style: ({ $theme: o, $orientation: i }) => ({
      backgroundColor: o.colors.brand,
      ...i === "horizontal" ? { height: "1px" } : { width: "1px" }
    })
  }
}, t = {
  default: l,
  medium: r
};
export {
  l as defaultTabsOverrides,
  r as mediumTabsOverrides,
  t as overridesByKindMap
};
//# sourceMappingURL=tabs.overrides.js.map
