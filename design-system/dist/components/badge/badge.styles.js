function a(t) {
  switch (t) {
    case "topLeft":
      return {
        left: "-50%",
        top: "-50%"
      };
    case "topRight":
      return {
        right: "-50%",
        top: "-50%"
      };
    case "bottomLeft":
      return {
        left: "-50%",
        bottom: "-50%"
      };
    default:
      return {
        right: "-50%",
        bottom: "-50%"
      };
  }
}
function p(t) {
  switch (t) {
    case "circle":
      return {
        minWidth: "18px",
        height: "18px",
        borderRadius: "50%"
      };
    case "pill":
      return {
        minWidth: "36px",
        height: "18px",
        borderRadius: "18px"
      };
    default:
      return {
        minWidth: "36px",
        height: "18px",
        borderRadius: 0
      };
  }
}
const s = {
  containerStyles: (t, { overrides: e }) => ({
    position: "relative",
    display: "block",
    width: "fit-content",
    ...e == null ? void 0 : e.Root
  }),
  contentStyles: (t, { backgroundColor: e, color: i, placement: o, shape: l, hidden: c, overrides: n }) => ({
    ...t.typography.LabelSmall,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: t.colors[e],
    fontWeight: 700,
    color: t.colors[i],
    fontSize: "10px",
    visibility: c ? "hidden" : "visible",
    ...a(o),
    ...p(l),
    ...n == null ? void 0 : n.Content
  })
};
export {
  a as getPlacementStyles,
  p as getShapeStyles,
  s as styles
};
//# sourceMappingURL=badge.styles.js.map
