const a = {
  activityTabContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  tabMainContainer: {
    height: "100%",
    overflow: "auto"
  },
  tabContentStyles: (i) => ({
    display: "flex",
    flexDirection: "column",
    padding: `${i.spacing.spacingMd} ${i.spacing.spacingMd} 0`,
    overflowY: "auto",
    gap: i.spacing.spacingXl
  }),
  approversContainerStyles: (i) => ({
    padding: `${i.spacing.spacingXl} ${i.spacing.spacingMd}`
  }),
  selectContainerStyles: (i) => ({
    paddingTop: i.spacing.spacingXs,
    paddingBottom: i.spacing.spacingMd
  }),
  thirdPartyGridContainerStyles: (i) => ({
    display: "grid",
    gap: i.spacing.spacingXl
  })
};
export {
  a as styles
};
//# sourceMappingURL=activity-tab.styles.js.map
