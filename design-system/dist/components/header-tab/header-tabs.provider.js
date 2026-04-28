import { jsx as o } from "react/jsx-runtime";
import { createContext as s, useContext as a } from "react";
const r = s(void 0), i = ({
  children: e,
  defaultProps: t
}) => /* @__PURE__ */ o(r.Provider, { value: t, children: e }), u = () => {
  const e = a(r);
  if (!e)
    throw new Error("useHeaderTabs must be used within a HeaderTabsProvider");
  return e;
};
export {
  i as HeaderTabsProvider,
  u as useHeaderTabs
};
//# sourceMappingURL=header-tabs.provider.js.map
