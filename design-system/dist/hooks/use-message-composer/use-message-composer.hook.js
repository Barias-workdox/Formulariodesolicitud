import { useState as H, useRef as A, useCallback as C, useEffect as k } from "react";
import { useHtmlSelection as R } from "../../components/messages/hooks/use-html-selection.js";
import { noop as u } from "../../utils/noop.js";
import { DEFAULT_MAX_LENGTH as S } from "./use-message-composer.constants.js";
import { sanitizeMessageText as K } from "./utils/sanitized-message-text.utils.js";
import { updateMessageText as U } from "./utils/update-message-text.utils.js";
const N = ({
  defaultValue: c = "",
  maxLength: l = S,
  onChange: f = u,
  onCreate: d = u,
  onEscape: M = u
}) => {
  var T;
  const [p, x] = H(""), t = A(null), m = ((T = t.current) == null ? void 0 : T.textContent.trim()) === "", { selectionRange: D, setSelectionOffset: h, getSelectionOffset: w } = R(
    t.current
  ), o = C(
    (e) => {
      x(e), f(e);
    },
    [f]
  );
  function y(e = 0, n = null, s = null) {
    const [r, a] = D;
    h((n ?? r) + e, (s ?? a) + e + 1);
  }
  function L(e) {
    if (t.current) {
      const [n, s] = w();
      e.preventDefault();
      const r = e.clipboardData.getData("text").replace(/&/g, "&amp;").replace(/<(?!br\s*\/?)[^>]*>/g, ""), a = U(t.current.innerHTML);
      a.splice(n, s - n, r);
      let i = K(a);
      i.length > l && (i = i.substring(0, l)), t.current.innerHTML = i, o(i), y(r.length, n, n - 1);
    }
  }
  function b(e) {
    var s, r;
    ![
      "Down",
      "ArrowDown",
      "Up",
      "ArrowUp",
      "Left",
      "ArrowLeft",
      "Right",
      "ArrowRight",
      "Backspace"
    ].includes(e.key) && ((r = (s = e.currentTarget) == null ? void 0 : s.textContent) == null ? void 0 : r.length) >= l && e.preventDefault();
  }
  function g() {
    t.current.innerHTML = "", o(""), d(p);
  }
  function E(e) {
    e.key === "Enter" && !e.shiftKey && !m ? (e.preventDefault(), g()) : e.key === "Escape" ? M() : b(e);
  }
  return k(() => {
    var e;
    ((e = t.current) == null ? void 0 : e.innerHTML) !== c && (t.current.innerHTML = c, o(c));
  }, [o, c]), {
    textareaRef: t,
    value: p,
    isEmpty: m,
    handleChange: o,
    handleCreate: g,
    handleKeyDown: E,
    handlePaste: L
  };
};
export {
  N as useMessageComposer
};
//# sourceMappingURL=use-message-composer.hook.js.map
