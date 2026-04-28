const l = ({ start: t, index: e, size: o }, i) => ({
  top: 0,
  left: 0,
  width: "100%",
  boxSizing: "border-box",
  position: "absolute",
  transform: `translateY(${t}px)`,
  minHeight: e === 0 ? `${i}px` : `${o}px`,
  display: "flex"
});
export {
  l as getVirtualItemStyles
};
//# sourceMappingURL=virtualized-list.styles.js.map
