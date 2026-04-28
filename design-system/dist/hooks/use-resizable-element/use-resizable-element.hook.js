import { useRef as h, useEffect as v, useCallback as L } from "react";
import { applyDimensions as y } from "../../utils/styles.utils.js";
import { calculateNewDimensions as E } from "./utils/calculate-new-dimensions.util.js";
const z = ({
  elementRef: t,
  margin: r,
  minWidth: o = 0,
  minHeight: e = 0
}) => {
  const s = h(null);
  return v(() => {
    t.current !== null && (s.current = t.current.style.transition);
  }, [t]), { handleResize: L(
    (n, l) => {
      if (t.current === null) return;
      n.preventDefault();
      const i = {
        initialX: n.clientX,
        initialY: n.clientY,
        initialWidth: t.current.offsetWidth,
        initialHeight: t.current.offsetHeight,
        initialLeft: t.current.offsetLeft,
        initialTop: t.current.offsetTop,
        direction: l
      }, c = (a) => {
        if (t.current === null) return;
        t.current.style.transition = "none";
        const d = a.clientX - i.initialX, p = a.clientY - i.initialY, f = E({
          data: i,
          deltaX: d,
          deltaY: p,
          element: t.current,
          margin: r,
          minWidth: o,
          minHeight: e
        });
        y(t.current, f);
      }, u = () => {
        t.current.style.transition = s.current, document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", u);
      };
      document.addEventListener("pointermove", c), document.addEventListener("pointerup", u);
    },
    [t, r, o, e]
  ) };
};
export {
  z as useResizableElement
};
//# sourceMappingURL=use-resizable-element.hook.js.map
