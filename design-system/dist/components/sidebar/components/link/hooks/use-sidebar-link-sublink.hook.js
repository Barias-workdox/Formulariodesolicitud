import { useState as g, useRef as m, useMemo as B, useCallback as r, useEffect as H, useLayoutEffect as R } from "react";
import { sanitizeUrl as C } from "../../../../../utils/url.utils.js";
const z = ({
  subLinks: l = [],
  isDisabled: w
}) => {
  const s = l.length > 0, p = w ?? !1, [c, u] = g(!1), d = m(null), a = m(null), [v, S] = g(null), o = s && c && !p, x = B(
    () => l.filter((e) => !!e.text && !!e.href).map((e, t) => ({
      id: `${C(e.href)}__${t}`,
      label: e.text ?? "",
      href: e.href,
      counter: e.counter,
      disabled: e.isDisabled ?? !1,
      icon: e.Icon
    })),
    [l]
  ), n = r(() => {
    var f, h;
    const e = (f = d.current) == null ? void 0 : f.getBoundingClientRect();
    if (!e) return;
    const t = (h = a.current) == null ? void 0 : h.getBoundingClientRect().height, b = t != null ? e.top + e.height / 2 - t / 2 : e.top, M = t != null ? Math.max(0, window.innerHeight - t) : Number.POSITIVE_INFINITY;
    S({
      top: Math.min(Math.max(0, b), M),
      left: e.right
    });
  }, []), E = r(() => {
    u(!0), s && n();
  }, [s, n]), i = r(() => {
    u(!1);
  }, []), I = r(
    (e) => {
      const t = e.relatedTarget;
      t && e.currentTarget.contains(t) || i();
    },
    [i]
  ), T = r(
    (e) => {
      const t = e.relatedTarget;
      t && e.currentTarget.contains(t) || i();
    },
    [i]
  );
  return H(() => {
    if (!o) return;
    n();
    const e = () => n();
    return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
    };
  }, [o, n]), R(() => {
    o && a.current && n();
  }, [o, n]), {
    hasSubLinks: s,
    isHovered: c,
    linkRef: d,
    shouldShowSublink: o,
    sublinkItems: x,
    sublinkPosition: v,
    sublinkRef: a,
    handleMouseEnter: E,
    handleMouseOut: I,
    handleBlur: T
  };
};
export {
  z as useSidebarLinkSublink
};
//# sourceMappingURL=use-sidebar-link-sublink.hook.js.map
