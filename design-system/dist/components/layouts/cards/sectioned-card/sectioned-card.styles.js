const s = {
  rootStyles: (o, { hasElevation: e, overrides: { Root: r = {} } }) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${o.colors.neutralSubtle}`,
    boxShadow: e ? `0px 3px 0px 0px ${o.colors.neutralSubtle}` : void 0,
    backgroundColor: o.colors.bgBase,
    width: "100%",
    margin: "0 auto",
    marginBottom: o.spacing.spacingMd,
    ...r
  }),
  headerStyles: (o, { hasBody: e, overrides: { Header: r = {} } }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: o.spacing.spacingMd,
    gap: o.spacing.spacingMd,
    borderBottom: e ? `1px solid ${o.colors.neutralSubtle}` : void 0,
    ...r
  }),
  headerTitleStyles: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 0
  },
  headerTitleTextStyles: {
    wordBreak: "break-word",
    margin: 0
  },
  bodyStyles: (o, { overrides: { Body: e = {} } }) => ({
    padding: o.spacing.spacingMd,
    flexGrow: 1,
    ...e
  }),
  footerStyles: (o, { overrides: { Footer: e = {} } }) => ({
    borderTop: `1px solid ${o.colors.neutralSubtle}`,
    padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
    ...e
  })
};
export {
  s as styles
};
//# sourceMappingURL=sectioned-card.styles.js.map
