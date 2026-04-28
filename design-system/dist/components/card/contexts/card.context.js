import { jsx as o } from "react/jsx-runtime";
import { createContext as n, useContext as s } from "react";
const t = n(null), d = ({
  children: r,
  disabled: e
}) => /* @__PURE__ */ o(t.Provider, { value: { disabled: e }, children: r }), i = () => {
  const r = s(t);
  return r || (console.warn("useCard must be used within a CardProvider"), {});
};
export {
  d as CardProvider,
  i as useCard
};
//# sourceMappingURL=card.context.js.map
