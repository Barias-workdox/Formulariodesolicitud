import { useRef as A, useCallback as o } from "react";
const E = ({
  isOpen: b,
  isLanguageExpanded: d = !1,
  onClose: u,
  onToggleLanguage: a,
  onFocusTrigger: i
}) => {
  const c = A(null), m = A(null), h = o(() => {
    if (!c.current) return;
    const e = c.current.querySelectorAll(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    e.length > 0 && e[0].focus();
  }, []), l = o(() => {
    i == null || i();
  }, [i]), x = o(
    (e) => {
      var p;
      if (!b) return;
      const { key: r, target: s, currentTarget: y } = e;
      if (r === "Escape") {
        e.preventDefault(), u(), l();
        return;
      }
      if (r === "Enter" || r === " ") {
        const t = s;
        if (t.getAttribute("data-role") === "language-trigger") {
          e.preventDefault(), a == null || a();
          return;
        }
        return t.getAttribute("data-role") === "language-option", void 0;
      }
      if (r === "Tab") {
        const t = y.querySelectorAll(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (t.length === 0) return;
        const n = t[0], f = t[t.length - 1];
        e.shiftKey ? s === n && (e.preventDefault(), u(), l()) : s === f && (e.preventDefault(), u(), l());
      }
      if (d && (r === "ArrowDown" || r === "ArrowUp")) {
        e.preventDefault();
        const t = (p = m.current) == null ? void 0 : p.querySelectorAll(
          '[data-role="language-option"]'
        );
        if (!t || t.length === 0) return;
        const n = Array.from(t).findIndex((D) => D === s);
        if (n === -1) return;
        let f;
        r === "ArrowDown" ? f = n === t.length - 1 ? 0 : n + 1 : f = n === 0 ? t.length - 1 : n - 1, t[f].focus();
      }
    },
    [b, d, u, a, l]
  );
  return {
    menuRef: c,
    languageRef: m,
    handleKeyDown: x,
    focusFirstMenuItem: h,
    focusTrigger: l
  };
};
export {
  E as useKeyboardNavigation
};
//# sourceMappingURL=use-keyboard-navigation.js.map
