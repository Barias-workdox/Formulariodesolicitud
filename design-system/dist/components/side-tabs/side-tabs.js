import { jsx as O } from "react/jsx-runtime";
import { useMemo as c } from "react";
import "baseui/tabs-motion";
import { mergeOverridesDeep as n } from "../utils/baseui/helpers.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { StatefulTabs as u } from "../tabs/stateful-tabs.js";
import { getTabOverrides as b, getTabsOverrides as g } from "./side-tabs.overrides.js";
const q = ({
  children: i,
  showPanels: r,
  showTabList: t,
  side: e,
  tabPanelWidth: m,
  overrides: o,
  onClickTab: p = () => {
  },
  ...d
}) => {
  const v = c(() => {
    const f = g({
      showTabList: t,
      side: e,
      showPanels: r,
      onClickTab: p
    }), s = b({ showPanels: r, side: e, tabPanelWidth: m });
    return n(f, s, o);
  }, [o, r, e, m, t]);
  return /* @__PURE__ */ O(
    u,
    {
      ...d,
      kind: "medium",
      showPanels: r,
      orientation: "vertical",
      overrides: v,
      children: i
    }
  );
};
export {
  q as SideTabs
};
//# sourceMappingURL=side-tabs.js.map
