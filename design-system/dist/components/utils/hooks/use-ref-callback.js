import { useRef as r, useCallback as u } from "react";
const n = () => {
  const e = r(null), l = u((t) => {
    t && (e == null ? void 0 : e.current) === null && (e.current = t);
  }, []);
  return [e, l];
};
export {
  n as useRefCallback
};
//# sourceMappingURL=use-ref-callback.js.map
