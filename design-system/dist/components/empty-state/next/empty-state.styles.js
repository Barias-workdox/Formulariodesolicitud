const n = {
  containerStyles: (e) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: e.spacing.spacingMd
  }),
  textsContainerStyles: (e) => ({
    display: "flex",
    flexDirection: "column",
    gap: e.spacing.spacingXs,
    alignItems: "center"
  }),
  buttonsContainerStyles: (e) => ({
    display: "flex",
    gap: e.spacing.spacingMd
  }),
  linkStyles: (e) => ({
    textDecorationColor: e.colors.brand
  })
};
export {
  n as styles
};
//# sourceMappingURL=empty-state.styles.js.map
