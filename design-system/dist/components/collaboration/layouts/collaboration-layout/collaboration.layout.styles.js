const t = "58px", i = "116px", s = {
  layoutStyles: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh"
  },
  headerStyles: (e) => ({
    display: "flex",
    flex: 1,
    alignItems: "center",
    height: t,
    maxHeight: t,
    borderBottom: `1px solid ${e.colors.divisionLine}`,
    padding: `0 ${e.spacing.spacingMd}`
  }),
  contentStyles: (e, { showBanner: l = !1 }) => ({
    display: "flex",
    flex: 1,
    maxHeight: `calc(100vh - ${l ? i : t})`
  })
};
export {
  t as HEADER_HEIGHT,
  i as HEADER_WITH_BANNER_HEIGHT,
  s as styles
};
//# sourceMappingURL=collaboration.layout.styles.js.map
