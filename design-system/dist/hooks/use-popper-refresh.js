import { useRef as c, useEffect as f } from "react";
const b = () => {
  const u = c(null), e = c(null), n = c(null), i = () => {
    n.current && clearTimeout(n.current), n.current = setTimeout(() => {
      u.current && u.current.scheduleUpdate();
    }, 16);
  }, s = () => {
    e.current && (e.current.disconnect(), e.current = null), n.current && (clearTimeout(n.current), n.current = null), u.current = null;
  }, l = (r) => {
    e.current && e.current.disconnect(), e.current = new ResizeObserver((t) => {
      t.length > 0 && i();
    }), e.current.observe(r.popper);
    const { children: o } = r.popper;
    for (let t = 0; t < o.length; t++) {
      const p = o[t];
      e.current.observe(p);
    }
  };
  return f(() => () => {
    s();
  }, []), {
    modifiers: {
      // Custom modifier to capture the Popper instance
      instanceCapture: {
        enabled: !0,
        order: 1,
        // Run early in the modifier chain
        fn: (r) => (r.instance ? (u.current = r.instance, l(r.instance)) : s(), r)
      },
      shift: {
        enabled: !0
      },
      flip: {
        enabled: !0,
        flipVariationsByContent: !0
      },
      preventOverflow: {
        enabled: !0,
        boundariesElement: "viewport",
        padding: 8
      }
    }
  };
};
export {
  b as usePopperRefresh
};
//# sourceMappingURL=use-popper-refresh.js.map
