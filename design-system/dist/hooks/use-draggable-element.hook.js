import { useRef as D, useEffect as T, useCallback as v } from "react";
const w = ["vertical", "both"], I = ["horizontal", "both"], M = ({
  elementRef: t,
  margin: n = 0,
  direction: o = "both",
  parent: r
}) => {
  const s = D(null);
  return T(() => {
    !t || t.current === null || (s.current = t.current.style.transition);
  }, [t]), { handlePointerDown: v(
    (i) => {
      if (!t || t.current === null) return;
      const e = r instanceof Window ? r.innerWidth : t.current.parentElement.offsetWidth, h = r instanceof Window ? r.innerHeight : t.current.parentElement.offsetHeight;
      i.preventDefault();
      const l = i.clientX, p = i.clientY, E = t.current.offsetLeft, f = t.current.offsetTop, u = (d) => {
        if (!t || t.current === null) return;
        t.current.style.transition = "none";
        const L = d.clientX - l, y = d.clientY - p;
        if (I.includes(o)) {
          const c = Math.min(
            Math.max(n, E + L),
            e - n - t.current.offsetWidth
          );
          t.current.style.left = `${c}px`;
        }
        if (w.includes(o)) {
          const c = Math.min(
            Math.max(n, f + y),
            h - n - t.current.offsetHeight
          );
          t.current.style.top = `${c}px`;
        }
      }, a = () => {
        t && t.current && (t.current.style.transition = s.current), document.removeEventListener("pointermove", u), document.removeEventListener("pointerup", a);
      };
      document.addEventListener("pointermove", u), document.addEventListener("pointerup", a);
    },
    [t, r, o, n]
  ) };
};
export {
  M as useDraggableElement
};
//# sourceMappingURL=use-draggable-element.hook.js.map
