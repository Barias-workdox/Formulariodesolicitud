const o = 16, T = "16px", t = {
  TOP_RIGHT: "topRight",
  TOP_LEFT: "topLeft",
  BOTTOM_RIGHT: "bottomRight",
  BOTTOM_LEFT: "bottomLeft"
}, E = {
  [t.TOP_LEFT]: {
    top: T,
    left: T
  },
  [t.TOP_RIGHT]: {
    top: T,
    right: T
  },
  [t.BOTTOM_LEFT]: {
    bottom: T,
    left: T
  },
  [t.BOTTOM_RIGHT]: {
    bottom: T,
    right: T
  }
};
export {
  t as PLACEMENT,
  o as PLACEMENT_MARGIN,
  T as PLACEMENT_MARGIN_PX,
  E as POSITION_BY_PLACEMENT
};
//# sourceMappingURL=placement.constants.js.map
