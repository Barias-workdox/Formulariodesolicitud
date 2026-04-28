import { jsx as n, Fragment as h } from "react/jsx-runtime";
import { useState as l, useEffect as p, Children as d } from "react";
import { StyledChildContainer as C } from "./styled-components/styled-child-container.js";
const I = ({
  children: t = [],
  baseDelay: i = 100,
  duration: m = 200,
  order: r = "asc"
}) => {
  const [a, c] = l([]);
  return p(() => {
    const e = [];
    return t.length > 0 && t.forEach((o, s) => {
      const u = r === "asc" ? s : t.length - s, f = setTimeout(() => {
        c((g) => [...g, s]);
      }, u * i);
      e.push(f);
    }), () => {
      e.forEach((o) => clearTimeout(o));
    };
  }, [t, i, r]), /* @__PURE__ */ n(h, { children: d.map(t, (e, o) => /* @__PURE__ */ n(
    C,
    {
      $show: a.includes(o),
      $duration: m,
      children: e
    }
  )) });
};
export {
  I as StaggeredAnimation
};
//# sourceMappingURL=staggered-animation.js.map
