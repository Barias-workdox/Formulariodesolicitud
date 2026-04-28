const n = {
  infoContainerStyles: (i) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${i.colors.divisionLine}`,
    padding: i.spacing.spacingXl,
    margin: `${i.spacing.spacingMd} 0`
  }),
  infoItemStyles: (i) => ({
    display: "flex",
    flexDirection: "column",
    gap: i.spacing.spacingXs
  }),
  documentInfoStyles: (i) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: i.spacing.spacingXs
  }),
  divisionLineStyles: (i) => ({
    borderTop: `1px solid ${i.colors.divisionLine}`,
    margin: `${i.spacing.spacingMd} 0`
  })
}, s = (i) => ({
  ...i.typography.LabelXSmall
});
export {
  s as rowTitleStyles,
  n as styles
};
//# sourceMappingURL=document-summary.styles.js.map
