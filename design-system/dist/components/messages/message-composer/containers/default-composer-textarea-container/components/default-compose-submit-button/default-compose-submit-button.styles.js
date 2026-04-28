const i = {
  createButtonContainerStyles: (n) => ({
    display: "flex",
    alignItems: "center",
    marginRight: n.spacing.spacingMd
  }),
  editButtonsContainerStyles: (n) => ({
    marginTop: n.spacing.spacingXs,
    marginRight: n.spacing.spacingMd,
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: n.spacing.spacingXs,
    justifyContent: "flex-end"
  })
};
export {
  i as styles
};
//# sourceMappingURL=default-compose-submit-button.styles.js.map
