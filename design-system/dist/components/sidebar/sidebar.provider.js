import { jsx as m } from "react/jsx-runtime";
import { createContext as v, useContext as x, useState as c, useCallback as d, useMemo as w } from "react";
import { useResponsiveProps as I } from "../../utils/use-responsive-props.util.js";
const u = v(void 0), j = () => {
  const e = x(u);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return e;
}, k = ({
  children: e,
  defaultCollapsed: p = !1,
  onToggle: t
}) => {
  const [C, b] = c(p), [o, S] = c(!1), s = !(I(
    {
      large: !0
    },
    !1
  ) ?? !1), a = s ? !0 : C, n = d(() => {
    s || b((r) => {
      const i = !r;
      return t == null || t(i), i;
    });
  }, [s, t]), l = d((r) => {
    S(r);
  }, []), f = w(
    () => ({
      isCollapsed: a,
      toggleSidebar: n,
      isContentScrollable: o,
      setIsContentScrollable: l
    }),
    [a, n, o, l]
  );
  return /* @__PURE__ */ m(u.Provider, { value: f, children: e });
};
export {
  k as SidebarProvider,
  j as useSidebar
};
//# sourceMappingURL=sidebar.provider.js.map
