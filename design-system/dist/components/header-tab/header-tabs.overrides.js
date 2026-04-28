const i = ({
  paddingSize: p,
  tabPaddingSize: s,
  topPaddingSize: g,
  tabFontSize: n
}) => ({
  TabList: {
    style: ({ $theme: a }) => ({
      padding: `${a.spacing[g]} ${a.spacing[p]} 0 ${a.spacing[p]} `
    })
  },
  Tab: {
    style: ({ $theme: a }) => ({
      paddingTop: a.spacing[s],
      paddingBottom: a.spacing[s],
      ...a.typography[n],
      fontWeight: 500
    })
  },
  TabPanel: {
    style: ({ $theme: a, children: c }) => ({
      /**
       * render padding only if there are children to avoid extra space
       */
      padding: c ? a.spacing[p] : 0
    })
  }
});
export {
  i as getHeaderTabOverrides
};
//# sourceMappingURL=header-tabs.overrides.js.map
