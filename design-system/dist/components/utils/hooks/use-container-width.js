import { useState as r, useCallback as d, useEffect as s } from "react";
const w = (t) => {
  const [i, o] = r(0), e = d(() => {
    var n;
    o((n = t.current) == null ? void 0 : n.offsetWidth);
  }, [t]);
  return s(() => (e(), window.addEventListener("load", e), window.addEventListener("resize", e), () => {
    window.removeEventListener("load", e), window.removeEventListener("resize", e);
  }), [t, e]), { containerWidth: i };
};
export {
  w as useContainerWidth
};
//# sourceMappingURL=use-container-width.js.map
