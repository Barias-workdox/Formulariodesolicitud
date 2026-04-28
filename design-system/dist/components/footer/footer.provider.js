import { jsx as e } from "react/jsx-runtime";
import { createContext as n, useContext as s } from "react";
const t = n(void 0), c = ({ children: o, defaultProps: r }) => /* @__PURE__ */ e(t.Provider, { value: r, children: o }), x = () => {
  const o = s(t);
  if (!o)
    throw new Error("useFooter must be used within a FooterProvider");
  return o;
};
export {
  c as FooterProvider,
  x as useFooter
};
//# sourceMappingURL=footer.provider.js.map
