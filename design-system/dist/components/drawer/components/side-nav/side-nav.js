import { jsx as h } from "react/jsx-runtime";
import { useState as n, useCallback as i, useEffect as l } from "react";
import { ANCHOR as p, SIZE as s } from "baseui/drawer";
import { useObserver as $ } from "../../../utils/hooks/use-observer.hook.js";
import { SideNavStyled as H } from "./side-nav.styles.js";
const N = ({
  isOpen: o,
  children: c,
  size: a = s.default,
  anchor: u = p.left,
  sibling: e = null
}) => {
  const [m, t] = n("auto"), f = i((r) => {
    t(r.length ? `${r[0].target.clientHeight}px` : "auto");
  }, []);
  return l(() => {
    e && e.current && t(e.current.clientHeight ? `${e.current.clientHeight}px` : "auto");
  }, [e]), $({
    callback: f,
    element: e
  }), /* @__PURE__ */ h(
    H,
    {
      $isOpen: o,
      $size: a,
      $anchor: u,
      $height: m,
      children: c
    }
  );
};
export {
  N as SideNav
};
//# sourceMappingURL=side-nav.js.map
