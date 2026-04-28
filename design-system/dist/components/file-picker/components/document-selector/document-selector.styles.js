const n = {
  containerStyles: (e) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: e.spacing.spacingSm
  }),
  leftAreaContainerStyles: (e) => ({
    display: "flex",
    overflow: "hidden",
    gap: e.spacing.spacingSm
  }),
  uploadButtonContainerStyles: {
    flexShrink: 0
  },
  filenameContainerStyles: () => ({
    display: "flex",
    alignItems: "center",
    overflow: "hidden"
  }),
  rightAreaContainerStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing.spacingSm
  }),
  progressCircleContainerStyles: () => ({
    display: "flex",
    alignItems: "center"
  })
};
export {
  n as styles
};
//# sourceMappingURL=document-selector.styles.js.map
