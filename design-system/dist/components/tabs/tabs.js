import { jsx as o } from "react/jsx-runtime";
import { ORIENTATION as t, Tabs as n } from "baseui/tabs-motion";
import { useTabsOverrides as d } from "./hooks/use-tabs-overrides.js";
const v = t, O = (r) => {
  const { overridesByKind: e, childrenWithOverrides: s } = d(r), { children: a, overrides: c, ...i } = r;
  return /* @__PURE__ */ o(
    n,
    {
      overrides: e,
      ...i,
      children: s
    }
  );
};
export {
  O as Tabs,
  v as TabsOrientation
};
//# sourceMappingURL=tabs.js.map
