const t = {
  ControlContainer: { style: { width: "unset", margin: 0 } }
}, l = {
  textStyles: () => ({
    maxWidth: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  elementContainerStyles: () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }),
  elementStyles: (e) => ({
    borderTopStyle: "solid",
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    borderWidth: "1px",
    borderColor: e.colors.neutralWashed,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${e.spacing.spacingMd} ${e.spacing.spacingXl}`
  }),
  infoStyles: (e) => ({
    display: "flex",
    alignItems: "center",
    gap: e.spacing.spacingXs
  })
};
export {
  t as checkboxOverrides,
  l as styles
};
//# sourceMappingURL=checkbox-form.styles.js.map
