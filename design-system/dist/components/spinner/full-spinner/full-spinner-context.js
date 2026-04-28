import { jsxs as s, jsx as u } from "react/jsx-runtime";
import { createContext as i, useState as p, useContext as c } from "react";
import { FullSpinner as S } from "./full-spinner.js";
const l = i(null), x = ({ children: n }) => {
  const [e, r] = p(!1);
  function t() {
    r(!0);
  }
  function o() {
    r(!1);
  }
  return /* @__PURE__ */ s(l.Provider, { value: { showFullSpinner: t, closeFullSpinner: o }, children: [
    /* @__PURE__ */ u(S, { isOpen: e }),
    n
  ] });
}, a = () => {
  const { showFullSpinner: n, closeFullSpinner: e } = c(l);
  return { showFullSpinner: n, closeFullSpinner: e };
};
export {
  x as FullSpinnerProvider,
  a as useFullSpinner
};
//# sourceMappingURL=full-spinner-context.js.map
