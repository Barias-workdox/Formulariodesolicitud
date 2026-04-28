import { jsx as m } from "react/jsx-runtime";
import { useEffect as n } from "react";
import { HeaderTabs as f } from "../../../../../header-tab/header-tabs.container.js";
import { noop as u } from "../../../../../../utils/noop.js";
import { useSectionedCard as c } from "../sectioned-card.provider.js";
import { getBorderRadiusSize as l, getHeaderTabsSize as b } from "../utils/get-size-map.js";
const H = (e) => {
  const { size: o, cornerSize: t, isDisabled: i, setActiveKey: r = u } = c();
  n(() => {
    r(e.defaultValue ?? null);
  }, [r, e.defaultValue]);
  const a = b(o), s = l(t);
  return /* @__PURE__ */ m(
    f,
    {
      ...e,
      size: a,
      isDisabled: i,
      borderRadius: s,
      onChange: ({ activeKey: d }) => r(d)
    }
  );
};
export {
  H as SectionedCardHeaderTabs
};
//# sourceMappingURL=sectioned-card-header-tabs.js.map
