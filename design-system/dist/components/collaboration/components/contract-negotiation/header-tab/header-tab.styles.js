const s = "70px", t = {
  tabHeaderStyles: (e) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${e.spacing.spacingMd}`,
    minHeight: s,
    borderBottom: `1px solid ${e.colors.neutralWashed}`
  }),
  tabHeaderTitleStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing.spacingXs
  })
};
export {
  t as styles
};
//# sourceMappingURL=header-tab.styles.js.map
