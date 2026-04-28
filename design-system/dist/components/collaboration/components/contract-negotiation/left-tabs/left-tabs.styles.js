const r = (o, { showPanels: l }) => ({
  TabPanel: {
    style: {
      backgroundColor: o.colors.bgBase,
      borderRight: `1px solid ${o.colors.divisionLine}`,
      width: "250px",
      overflow: "unset",
      display: "flex",
      flexDirection: "column"
    }
  },
  Tab: {
    style: {
      ...!l && {
        color: o.colors.neutralSubdued,
        ":hover": {
          color: o.colors.neutralMedium
        }
      }
    }
  }
}), i = (o, { showPanels: l, showTabList: e }) => ({
  TabHighlight: {
    style: {
      left: 0,
      right: "unset",
      ...!l && { width: 0 }
    }
  },
  Root: {
    style: {
      backgroundColor: o.colors.bgBase,
      flexDirection: "row-reverse",
      ...e && { borderRight: `1px solid ${o.colors.divisionLine}` }
    }
  },
  TabList: {
    style: {
      ...!e && { display: "none" }
    }
  }
});
export {
  i as leftOrientationTabsOverridesStyles,
  r as leftTabOverridesStyles
};
//# sourceMappingURL=left-tabs.styles.js.map
