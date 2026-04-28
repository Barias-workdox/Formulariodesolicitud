const n = "74px", s = {
  containerStyles: () => ({
    display: "flex",
    flexDirection: "column",
    flex: 1
  }),
  contentStyles: (e) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: e.spacing.spacingMd,
    border: `1px solid ${e.colors.neutralSubtle}`,
    borderRadius: e.borders.borderSm
  }),
  headerStyles: (e) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: n,
    borderBottom: `solid 1px ${e.colors.neutralSubtle}`,
    padding: `0 ${e.spacing.spacingXl}`
  }),
  headerRightContainerStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing.spacingMd
  }),
  footerStyles: (e) => ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    borderTop: `solid 1px ${e.colors.neutralSubtle}`,
    padding: e.spacing.spacingMd,
    gap: e.spacing.spacingXs
  })
}, t = () => ({
  Root: {
    maxWidth: "50%"
  }
});
export {
  s as styles,
  t as titleLayoutOverrides
};
//# sourceMappingURL=contract-negotiation-body.styles.js.map
