const p = {
  containerStyles: (s) => ({
    display: "grid",
    gap: s.spacing.spacingXs
  }),
  documentContainerStyles: (s) => ({
    borderLeft: `3px solid ${s.colors.neutralSubtle}`,
    paddingLeft: s.spacing.spacingMd
  }),
  titleStyles: (s) => ({
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: `${s.spacing.spacingXs} 0px ${s.spacing.spacingXs} 0px`
  }),
  documentStyles: (s) => ({
    padding: `${s.spacing.spacingXs} 0px`
  })
};
export {
  p as styles
};
//# sourceMappingURL=activity-documents.styles.js.map
