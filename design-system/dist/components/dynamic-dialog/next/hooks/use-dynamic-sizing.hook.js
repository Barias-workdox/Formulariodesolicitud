import { useState as D, useEffect as M, useLayoutEffect as I } from "react";
import { DEFAULT_DIALOG_HEIGHT as v, DEFAULT_DIALOG_WIDTH as L, MIN_DIALOG_WIDTH as f, MIN_DIALOG_HEIGHT as g } from "../dynamic-dialog.constants.js";
const x = ({
  initialWidth: d = L,
  initialHeight: s = v,
  minWidth: o = f,
  minHeight: w = g,
  fullViewport: r,
  isMobile: a
}) => {
  const [m, i] = D(() => {
    const e = window.innerWidth, t = window.innerHeight;
    if (r)
      return {
        width: e,
        height: t
      };
    if (a)
      return {
        width: e,
        height: Math.min(t * 0.9, s)
      };
    {
      const n = Math.max(o, Math.min(e - 32, d)), h = Math.max(w, Math.min(t - 32, s));
      return {
        width: n,
        height: h
      };
    }
  });
  return M(() => {
    const e = () => {
      const t = window.innerWidth, n = window.innerHeight;
      let h;
      if (r)
        h = {
          width: t,
          height: n
        };
      else if (a)
        h = {
          width: t,
          height: Math.min(n * 0.9, s)
        };
      else {
        const c = Math.max(o, Math.min(t - 32, d)), u = Math.max(w, Math.min(n - 32, s));
        h = {
          width: c,
          height: u
        };
      }
      i(h);
    };
    return e(), window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e);
    };
  }, [d, s, o, w, r, a]), I(() => {
    const e = window.innerWidth, t = window.innerHeight;
    let n;
    if (r)
      n = {
        width: e,
        height: t
      };
    else if (a)
      n = {
        width: e,
        height: Math.min(t * 0.9, s)
      };
    else {
      const h = Math.max(o, Math.min(e - 32, d)), c = Math.max(w, Math.min(t - 32, s));
      n = {
        width: h,
        height: c
      };
    }
    i(n);
  }, [r, s, d, a, w, o]), m;
};
export {
  x as useDynamicSizing
};
//# sourceMappingURL=use-dynamic-sizing.hook.js.map
