import { useState as d, useEffect as E, useCallback as S } from "react";
function c(n, e, t, s) {
  if (t(e))
    return !0;
  for (let l = 0, r = e.childNodes.length; l < r; l++)
    if (c(e, e.childNodes[l], t, !0))
      return !0;
  if (!s) {
    let l = e;
    for (; l && l !== n; ) {
      let { nextSibling: r } = l;
      for (; r; ) {
        if (c(n, r, t, !0))
          return !0;
        ({ nextSibling: r } = r);
      }
      ({ parentNode: l } = l);
    }
  }
  return !1;
}
function m(n, e, t) {
  let s = null;
  c(n, n, (o) => {
    if (o.nodeType === Node.TEXT_NODE) {
      const f = o.data.length;
      if (e <= f)
        return s = o, !0;
      e -= f, t -= f;
    }
    return !1;
  });
  let l;
  s && c(n, s, (o) => {
    if (o.nodeType === Node.TEXT_NODE) {
      const f = o.data.length;
      if (t <= f)
        return l = o, !0;
      t -= f;
    }
    return !1;
  });
  const r = document.createRange();
  return s ? e < s.data.length ? r.setStart(s, e) : r.setStartAfter(s) : e === 0 ? r.setStart(n, 0) : r.setStartAfter(n), l ? t < l.data.length ? r.setEnd(l, t) : r.setEndAfter(l) : t === 0 ? r.setEnd(n, 0) : r.setEndAfter(n), r;
}
function g(n, e) {
  if (n.nodeType === Node.TEXT_NODE)
    return e;
  let t = 0;
  for (let s = 0, l = Math.min(n.childNodes.length, e); s < l; s++) {
    const r = n.childNodes[s];
    c(r, r, (o) => (o.nodeType === Node.TEXT_NODE && (t += o.data.length), !1));
  }
  return t;
}
function N(n) {
  let e = 0, t = 0;
  const s = window.getSelection();
  for (let l = 0, r = (s == null ? void 0 : s.rangeCount) ?? 0; l < r; l++) {
    const o = s == null ? void 0 : s.getRangeAt(l);
    if (o != null && o.intersectsNode(n)) {
      const f = o.startContainer;
      c(n, n, (i) => {
        if (f === i)
          return e += g(i, o.startOffset), !0;
        const a = i.nodeType === Node.TEXT_NODE ? i.data.length : 0;
        return e += a, t += a, !1;
      });
      const u = o.endContainer;
      c(n, f, (i) => {
        if (u === i)
          return t += g(i, o.endOffset), !0;
        const a = i.nodeType === Node.TEXT_NODE ? i.data.length : 0;
        return t += a, !1;
      });
      break;
    }
  }
  return [e, t];
}
function T(n, e, t) {
  const s = m(n, e, t), l = window.getSelection();
  l && (l.removeAllRanges(), l.addRange(s));
}
function w(n, e) {
  [].slice.call(n.getElementsByClassName(e)).forEach(
    (t) => t.addEventListener("click", () => {
      var l, r;
      const s = document.createRange();
      s.selectNode(t), (l = window.getSelection()) == null || l.removeAllRanges(), (r = window.getSelection()) == null || r.addRange(s);
    })
  );
}
const O = () => {
  const n = window.getSelection();
  if (!n.rangeCount)
    return;
  const e = n.getRangeAt(0);
  if (e.commonAncestorContainer === document)
    return;
  const t = document.createElement("br");
  e.insertNode(t), t.scrollIntoView && t.scrollIntoView({
    block: "end"
  }), t.remove && t.remove();
}, A = (n) => {
  const [e, t] = d(n), [s, l] = d([0, 0]);
  E(() => {
    t(n);
  }, [n]);
  function r(i) {
    t(i), l(N(i));
  }
  function o(i, a) {
    if (e) {
      const h = T(e, i, a);
      return O(), h;
    }
  }
  const f = S(() => e ? N(e) : [0, 0], [e]);
  function u(i) {
    e && w(e, i);
  }
  return {
    selectionRange: s,
    updateSelection: r,
    setSelectionOffset: o,
    getSelectionOffset: f,
    addSelectionListenersByClassName: u
  };
};
export {
  A as useHtmlSelection
};
//# sourceMappingURL=use-html-selection.js.map
