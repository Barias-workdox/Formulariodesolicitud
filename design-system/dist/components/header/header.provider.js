import { jsx as o } from "react/jsx-runtime";
import { createContext as n, useContext as d } from "react";
const r = n(void 0), a = ({ children: e, defaultProps: t }) => /* @__PURE__ */ o(r.Provider, { value: t, children: e }), u = () => {
  const e = d(r);
  if (!e)
    throw new Error("useHeader must be used within a HeaderProvider");
  return e;
};
export {
  a as HeaderProvider,
  u as useHeader
};
//# sourceMappingURL=header.provider.js.map
