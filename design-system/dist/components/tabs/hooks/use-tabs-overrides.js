import { useMemo as t, Children as C, cloneElement as E } from "react";
import { mergeOverridesDeep as L } from "../../utils/baseui/helpers.js";
import { getTabOverridesByKind as l } from "../components/tab/tab.overrides.js";
import { overridesByKindMap as M } from "../tabs.overrides.js";
const D = ({
  "data-testid": s = "design-system__tabs--component",
  kind: r = "default",
  showPanels: o = !0,
  overrides: f,
  children: i
}) => {
  const {
    ArtworkContainer: n,
    EndEnhancerContainer: a,
    Root: d,
    Tab: b,
    TabBar: p,
    TabBorder: m,
    TabHighlight: v,
    TabList: O,
    TabPanel: c
  } = f || {}, u = t(
    () => ({
      ArtworkContainer: n,
      Tab: b,
      TabPanel: c
    }),
    [n, b, c]
  ), y = t(
    () => ({
      EndEnhancerContainer: a,
      Root: d,
      TabBar: p,
      TabBorder: m,
      TabHighlight: v,
      TabList: O
    }),
    [a, d, p, m, v, O]
  ), g = t(() => L({
    TabList: {
      props: {
        "data-testid": s
      }
    }
  }, M[r], y), [s, r, y]), B = t(
    () => C.map(i, (e, K) => {
      if (!e)
        return;
      const T = e.key || String(K);
      return E(e, {
        ...e.props,
        key: T,
        childKey: T,
        overrides: l({
          kind: r,
          showPanels: o,
          overrides: u,
          ...e.props
        })
      });
    }),
    [i, r, o, u]
  );
  return {
    overridesByKind: g,
    childrenWithOverrides: B
  };
};
export {
  D as useTabsOverrides
};
//# sourceMappingURL=use-tabs-overrides.js.map
