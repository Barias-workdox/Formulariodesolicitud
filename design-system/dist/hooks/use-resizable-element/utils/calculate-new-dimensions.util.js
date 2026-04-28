import { RESIZE_DIRECTIONS as H } from "../../../constants/resizable-element.constants.js";
const y = ({
  data: F,
  deltaX: m,
  deltaY: x,
  element: h,
  margin: i = 0,
  minWidth: W,
  minHeight: T
}) => {
  const { initialWidth: s, initialHeight: o, initialLeft: c, initialTop: w, direction: p } = F;
  let e = s, n = o, a = c, l = w;
  if (p.includes(H.RIGHT)) {
    const t = parseFloat(h.style.minWidth) || W;
    e = Math.max(
      t,
      Math.min(s + m, window.innerWidth - i - a)
    );
  }
  if (p.includes(H.LEFT)) {
    const t = parseFloat(h.style.minWidth) || W, M = parseFloat(h.style.maxWidth) || window.innerWidth - i * 2, d = s - m, f = c + m;
    f < i ? (a = i, e = Math.max(t, s + c - i)) : (e = Math.max(t, Math.min(M, d)), e !== d ? a = c + s - e : a = f), e < t && (e = t, a = c + s - t);
  }
  if (p.includes(H.BOTTOM)) {
    const t = parseFloat(h.style.minHeight) || T;
    n = Math.max(
      t,
      Math.min(o + x, window.innerHeight - i - l)
    );
  }
  if (p.includes(H.TOP)) {
    const t = parseFloat(h.style.minHeight) || T, M = parseFloat(h.style.maxHeight) || window.innerHeight - i * 2, d = o - x, f = w + x;
    f < i ? (l = i, n = Math.max(t, o + w - i)) : (n = Math.max(t, Math.min(M, d)), n !== d ? l = w + o - n : l = f), n < t && (n = t, l = w + o - t);
  }
  return { width: e, height: n, left: a, top: l };
};
export {
  y as calculateNewDimensions
};
//# sourceMappingURL=calculate-new-dimensions.util.js.map
