const t = "332px", n = {
  headerContainerStyles: () => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  }),
  headerStyles: (e) => ({
    display: "flex",
    flex: 1,
    alignItems: "center",
    gap: e.spacing.spacingMd
  }),
  textStyles: () => ({
    maxWidth: t,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  actionContainerStyles: (e) => ({
    paddingRight: e.spacing.spacingXs
  })
};
export {
  n as styles
};
//# sourceMappingURL=collaboration-header.styles.js.map
