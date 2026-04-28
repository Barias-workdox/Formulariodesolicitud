const a = {
  headerCellStyles: (s) => ({
    paddingTop: s.spacing.spacingXs,
    paddingBottom: s.spacing.spacingXs,
    paddingLeft: s.spacing.spacingMd
  }),
  headerBodyStyles: (s) => ({
    padding: `${s.spacing.spacingXs} ${s.spacing.spacingMd}`
  })
}, o = (s) => ({
  Root: {
    borderCollapse: "collapse",
    border: `1px solid ${s.colors.neutralSubtle}`
  },
  Row: {
    border: `1px solid ${s.colors.neutralSubtle}`
  }
});
export {
  a as styles,
  o as tableOverrideStyles
};
//# sourceMappingURL=sortable-table.styles.js.map
