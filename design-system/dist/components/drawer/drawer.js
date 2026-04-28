import { jsx as f } from "react/jsx-runtime";
import { Drawer as s } from "baseui/drawer";
import { drawerOverrides as v } from "./components/drawer.styles.js";
import { SideNav as D } from "./components/side-nav/side-nav.js";
function S({
  zIndex: m,
  animate: u = !0,
  closeable: a = !0,
  size: r = "default",
  anchor: t = "right",
  overrides: i = {},
  showBackdrop: d = !0,
  autoFocus: n = !1,
  drawerType: p = "front",
  children: e,
  isOpen: o,
  sibling: w = null,
  ...l
}) {
  return p === "front" ? /* @__PURE__ */ f(
    s,
    {
      autoFocus: n,
      animate: u,
      closeable: a,
      size: r,
      anchor: t,
      showBackdrop: d,
      isOpen: o,
      ...l,
      overrides: v({ overrides: i, zIndex: m }),
      children: e
    }
  ) : /* @__PURE__ */ f(
    D,
    {
      isOpen: o,
      size: r,
      anchor: t,
      sibling: w,
      children: e
    }
  );
}
export {
  S as Drawer
};
//# sourceMappingURL=drawer.js.map
