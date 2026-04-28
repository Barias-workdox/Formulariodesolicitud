import { PLACEMENT as t, PLACEMENT_MARGIN as p } from "../../../constants/placement.constants.js";
const l = (r, o, c = 0) => `calc(100${r} - ${o + c}px)`, m = (r, o = 0) => `calc(${r}px - ${o}px)`, E = (r, { height: o, width: c, top: P = 0, left: O = 0, right: f = 0, bottom: n = 0 }) => {
  const s = p + P, T = p + n, e = p + O, _ = p + f;
  switch (r) {
    case t.TOP_LEFT:
      return {
        top: s,
        left: e,
        right: m(c, e),
        bottom: m(o, s)
      };
    case t.TOP_RIGHT:
      return {
        top: s,
        right: _,
        left: l("vw", c, _),
        bottom: m(o, s)
      };
    case t.BOTTOM_LEFT:
      return {
        bottom: T,
        left: e,
        top: l("vh", o, T),
        right: m(c, e)
      };
    case t.BOTTOM_RIGHT:
      return {
        bottom: T,
        right: _,
        top: l("vh", o, T),
        left: l("vw", c, _)
      };
    default:
      return {};
  }
}, a = ({
  initialHeight: r,
  initialWidth: o,
  minHeight: c,
  minWidth: P,
  initialTop: O,
  initialLeft: f,
  initialRight: n,
  initialBottom: s
}) => {
  const T = r ?? c ?? 0, e = o ?? P ?? 0;
  return {
    [t.TOP_LEFT]: E(t.TOP_LEFT, {
      height: T,
      width: e,
      top: O,
      left: f
    }),
    [t.TOP_RIGHT]: E(t.TOP_RIGHT, {
      height: T,
      width: e,
      top: O,
      right: n
    }),
    [t.BOTTOM_LEFT]: E(t.BOTTOM_LEFT, {
      height: T,
      width: e,
      bottom: s,
      left: f
    }),
    [t.BOTTOM_RIGHT]: E(t.BOTTOM_RIGHT, {
      height: T,
      width: e,
      bottom: s,
      right: n
    })
  };
};
export {
  a as calcContainerPlacements
};
//# sourceMappingURL=calc-container-placements.util.js.map
