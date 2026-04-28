import { jsx as i } from "react/jsx-runtime";
import { createContext as f, useContext as L, useState as m, useMemo as x, useEffect as p } from "react";
import d from "i18next";
import { allDateLocaleMap as n } from "../../components/utils/strings/date.utils.js";
const g = ["en", "es", "pt"], a = "es", v = n.es, C = {
  locale: a,
  dateLocale: v,
  updateLocale: () => {
  }
}, s = f(C), E = () => L(s), S = ({
  children: l,
  locale: t = a
}) => {
  const [o, r] = m(t ?? a), u = x(() => n[o], [o]);
  function c(e) {
    e && g.includes(e) && (r(e), d.changeLanguage(e));
  }
  return p(() => {
    c(t);
  }, [t]), /* @__PURE__ */ i(s.Provider, { value: { locale: o, dateLocale: u, updateLocale: c }, children: l });
};
export {
  S as LocaleProvider,
  E as useLocale
};
//# sourceMappingURL=locale-provider.js.map
