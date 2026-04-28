import { COMMON_TRANSITION_DURATION as p, COMMON_TRANSITION_TIMING_FUNCTION as r } from "../constants/common.constants.js";
const c = (t) => t.map((e) => `${e} ${p} ${r}`).join(","), y = (t) => ({
  ":focus": t,
  ":active": t
}), N = (t, e) => {
  requestAnimationFrame(() => {
    t.style.width = `${e.width}px`, t.style.height = `${e.height}px`, t.style.left = `${e.left}px`, t.style.top = `${e.top}px`;
  });
}, h = (t, e = 0) => {
  if (typeof t == "number") return t;
  if (!t) return e;
  if (t.endsWith("px")) {
    const n = parseFloat(t);
    return isNaN(n) ? e : n;
  }
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.visibility = "hidden", o.style.width = t, document.body.appendChild(o);
  const s = window.getComputedStyle(o).width;
  document.body.removeChild(o);
  const i = parseFloat(s);
  return isNaN(i) ? e : i;
};
export {
  N as applyDimensions,
  h as convertCssUnitToPx,
  y as getFocusAndActiveStyles,
  c as getTransitionStyles
};
//# sourceMappingURL=styles.utils.js.map
