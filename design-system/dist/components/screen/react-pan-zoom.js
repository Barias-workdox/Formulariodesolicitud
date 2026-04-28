import { jsx as x } from "react/jsx-runtime";
import { memo as v, useRef as P, useState as Y, useEffect as $ } from "react";
import { styled as g } from "styletron-react";
const L = g("div", ({ $isPanning: i }) => ({
  width: "100%",
  height: "100%",
  cursor: i ? "grabbing" : "grab",
  position: "relative"
})), X = g("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
});
function Z({ children: i }) {
  const o = P(null), [E, c] = Y(!1), n = [1, 0, 0, 1, 0, 0];
  let p = 1;
  const s = { x: 0, y: 0 };
  let r = !0;
  const t = { x: 0, y: 0, oldX: 0, oldY: 0, button: !1 };
  function f() {
    r = !1, n[3] = n[0] = p, n[2] = n[1] = 0, n[4] = s.x, n[5] = s.y;
  }
  function l() {
    r && f(), o.current.style.transform = `matrix(${n[0]},${n[1]},${n[2]},${n[3]},${n[4]},${n[5]})`;
  }
  function h(e) {
    r && f(), s.x += e.x, s.y += e.y, r = !0;
  }
  function m(e, a) {
    r && f(), p *= a, s.x = e.x - (e.x - s.x) * a, s.y = e.y - (e.y - s.y) * a, r = !0;
  }
  function u(e) {
    e.type === "mousedown" && (c(!0), t.button = !0), e.type === "mouseup" && (c(!1), t.button = !1), t.oldX = t.x, t.oldY = t.y, t.x = e.pageX, t.y = e.pageY, t.button && (h({ x: t.x - t.oldX, y: t.y - t.oldY }), l()), e.preventDefault();
  }
  function b(e) {
    const a = e.pageX - o.current.parentElement.offsetLeft - o.current.offsetWidth / 2, d = e.pageY - o.current.parentElement.offsetTop - o.current.offsetHeight / 2, y = Math.abs(e.deltaY) / 100 + 1;
    e.deltaY < 0 ? (m({ x: a, y: d }, y), l()) : (m({ x: a, y: d }, 1 / y), l()), e.preventDefault();
  }
  return $(() => {
    o.current.parentElement.addEventListener("mousemove", u, { passive: !1 }), o.current.parentElement.addEventListener("mousedown", u, { passive: !1 }), document.addEventListener("mouseup", u, { passive: !1 }), o.current.parentElement.addEventListener("wheel", b, { passive: !1 });
  }, []), /* @__PURE__ */ x(L, { $isPanning: E, children: /* @__PURE__ */ x(X, { ref: o, children: i }) });
}
const D = v(Z);
export {
  D as default
};
//# sourceMappingURL=react-pan-zoom.js.map
