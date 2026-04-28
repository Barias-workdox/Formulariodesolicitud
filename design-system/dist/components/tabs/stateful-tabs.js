import { jsx as o } from "react/jsx-runtime";
import { StatefulTabs as a } from "baseui/tabs-motion";
import { useTabsOverrides as d } from "./hooks/use-tabs-overrides.js";
const v = (e) => {
  var t;
  const { overridesByKind: i, childrenWithOverrides: r } = d(e), { children: n, overrides: c, ...s } = e;
  return /* @__PURE__ */ o(
    a,
    {
      overrides: i,
      initialState: { activeKey: (t = r[0]) == null ? void 0 : t.props.childKey },
      ...s,
      children: r
    }
  );
};
export {
  v as StatefulTabs
};
//# sourceMappingURL=stateful-tabs.js.map
