import { jsx as e } from "react/jsx-runtime";
import "baseui/tabs-motion";
import "react";
import "baseui";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { Tab as i } from "../../tabs/components/tab/tab.js";
import { useHeaderTabs as d } from "../header-tabs.provider.js";
import { composeDataTestId as m } from "../utils/compose-data-test-id.js";
const u = (t) => {
  const { isDisabled: a, dataTestId: o } = d(), r = m(`${o}-avatar`), s = t.disabled || a;
  return /* @__PURE__ */ e(
    i,
    {
      ...t,
      "data-testid": r,
      disabled: s
    }
  );
};
export {
  u as HeaderTab
};
//# sourceMappingURL=header-tab.js.map
