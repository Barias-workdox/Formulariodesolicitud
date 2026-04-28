const l = {
  rootStyles: {
    position: "relative",
    height: "100%"
  },
  wrapperStyles: {
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    height: "100%"
  },
  draggableCellTableStyles: (e) => ({
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    backgroundColor: e.colors.brandWashed,
    width: "16px",
    height: "100%"
  }),
  innerStyles: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center"
  }
};
export {
  l as styles
};
//# sourceMappingURL=draggable-cell-table.styles.js.map
