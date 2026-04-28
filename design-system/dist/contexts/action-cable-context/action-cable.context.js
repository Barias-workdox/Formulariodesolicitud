import { jsx as s } from "react/jsx-runtime";
import { useEffect as f } from "react";
function d({ children: e, cable: r, ActionCableContext: n }) {
  f(() => () => {
    r.disconnect();
  }, []);
  function t(c, i, o) {
    const u = r.subscriptions.create(
      { channel: c, ...i },
      {
        received: o
      }
    );
    return function() {
      u.unsubscribe();
    };
  }
  return /* @__PURE__ */ s(n.Provider, { value: { subscribe: t }, children: e });
}
export {
  d as ActionCableProvider
};
//# sourceMappingURL=action-cable.context.js.map
