import { jsx as t } from "react/jsx-runtime";
import { Document as d } from "@carbon/icons-react";
import { TabsOrientation as c } from "../../../../tabs/tabs.js";
import { StatefulTabs as u } from "../../../../tabs/stateful-tabs.js";
import { Tab as b } from "../../../../tabs/components/tab/tab.js";
import { useCss as f } from "../../../../utils/hooks/use-css.js";
import { DocumentsTabContainer as l } from "../documents-tab/documents-tab.container.js";
import { leftOrientationTabsOverridesStyles as p, leftTabOverridesStyles as T } from "./left-tabs.styles.js";
const y = ({
  "data-testid": r = "left-tabs",
  enabledTabs: s,
  showPanels: e = !0,
  showTabList: a = !0,
  onOpen: m,
  onClose: n
}) => {
  const { theme: i } = f(), o = p(i, {
    showPanels: e,
    showTabList: a
  });
  return /* @__PURE__ */ t(
    u,
    {
      showPanels: e,
      overrides: {
        ...o,
        TabList: {
          ...o.TabList,
          props: {
            onClick: m
          }
        }
      },
      activateOnFocus: !0,
      orientation: c.vertical,
      kind: "medium",
      children: s.includes("documents") && /* @__PURE__ */ t(
        b,
        {
          "data-testid": `${r}__documents-tab--tab`,
          overrides: T(i, {
            showPanels: e
          }),
          title: /* @__PURE__ */ t(d, {}),
          children: /* @__PURE__ */ t(
            l,
            {
              onClose: n,
              "data-testid": `${r}__documents-tab`
            }
          )
        }
      )
    }
  );
};
export {
  y as LeftTabs
};
//# sourceMappingURL=left-tabs.js.map
