const n = (a, i) => ({
  display: "grid",
  width: "100%",
  columnGap: a.spacing.spacingXs,
  gridTemplateColumns: i,
  paddingLeft: a.spacing.spacingXl,
  paddingRight: a.spacing.spacingXl,
  alignItems: "center"
}), s = (a) => ({
  borderBottom: `1px solid ${a.colors.neutralWashed}`,
  marginLeft: `-${a.spacing.spacingXl}`,
  marginRight: `-${a.spacing.spacingXl}`,
  gridColumn: "1 / -1"
});
export {
  n as tableLayoutContainerStyles,
  s as tableSeparationLineStyles
};
//# sourceMappingURL=table-layout.styles.js.map
