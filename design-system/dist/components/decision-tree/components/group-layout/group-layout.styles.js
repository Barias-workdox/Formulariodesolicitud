const t = {
  containerStyles: (e) => ({
    width: "100%",
    border: `1px solid ${e.colors.neutralSubtle}`,
    backgroundColor: e.colors.bgBase
  }),
  layoutHeaderContainerStyles: (e) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: e.spacing.spacingSm,
    borderBottom: `1px solid ${e.colors.neutralSubtle}`
  }),
  layoutHeaderTitleContainerStyles: () => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }),
  layoutHeaderActionContainerStyles: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }),
  layoutBodyStyles: (e) => ({
    padding: e.spacing.spacingSm,
    display: "flex",
    flexDirection: "column",
    rowGap: e.spacing.spacingSm
  })
};
export {
  t as styles
};
//# sourceMappingURL=group-layout.styles.js.map
