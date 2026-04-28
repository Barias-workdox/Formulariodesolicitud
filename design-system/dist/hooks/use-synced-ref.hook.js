import { useLayoutEffect as f } from "react";
import { useRefProxy as n } from "../components/utils/hooks/use-ref-proxy.hook.js";
function e({
  internalRef: t,
  externalRef: o
}) {
  const u = n(), r = t ?? u;
  return f(() => {
    const c = r.current;
    !o || !c || (typeof o == "function" ? o(c) : "current" in o && (o.current = c));
  }, [r, o]), r;
}
export {
  e as useSyncedRef
};
//# sourceMappingURL=use-synced-ref.hook.js.map
