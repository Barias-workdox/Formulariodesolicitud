const l = (o, { showPanels: r }) => ({
  TabPanel: {
    style: {
      backgroundColor: o.colors.bgBase,
      borderLeft: `1px solid ${o.colors.divisionLine}`,
      width: "350px",
      overflow: "unset"
    }
  },
  Tab: {
    style: {
      ...!r && {
        color: o.colors.neutralSubdued,
        ":hover": {
          color: o.colors.neutralMedium
        }
      }
    }
  }
}), s = (o, { showPanels: r }) => ({
  TabHighlight: {
    style: {
      left: "unset",
      right: 0,
      ...!r && { width: 0 }
    }
  },
  Root: {
    style: {
      backgroundColor: o.colors.bgBase,
      borderLeft: `1px solid ${o.colors.divisionLine}`,
      flexDirection: "row"
    }
  }
});
export {
  s as rightOrientationTabsOverridesStyles,
  l as rightTabOverridesStyles
};
//# sourceMappingURL=right-tabs.styles.js.map
