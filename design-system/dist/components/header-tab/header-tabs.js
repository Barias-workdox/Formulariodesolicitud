import { jsx as m } from "react/jsx-runtime";
import { useMemo as S } from "react";
import "baseui/tabs-motion";
import "baseui";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { StatefulTabs as b } from "../tabs/stateful-tabs.js";
import { getAllAllowedComponent as T } from "../../utils/react.utils.js";
import { ALLOWED_HEADER_TAB_ACTIONS_ELEMENTS as A } from "./constants/allowed-elements.constant.js";
import { getHeaderTabOverrides as E } from "./header-tabs.overrides.js";
import { HeaderTabWrapper as z } from "./header-tabs.styled.js";
import { composeDataTestId as P } from "./utils/compose-data-test-id.js";
import { getPaddingSize as u, getTopPaddingSize as H, getTabPaddingSize as _, getFontSize as x } from "./utils/size-maps.js";
const $ = ({
  dataTestId: a,
  size: o = "small",
  borderRadius: n = "borderSm",
  tabs: p,
  isDisabled: t,
  activeKey: s,
  onChange: l
}) => {
  const e = u(o), r = H(o), i = _(o), d = x(o), c = T(p, A), f = S(
    () => E({ paddingSize: e, topPaddingSize: r, tabPaddingSize: i, tabFontSize: d }),
    [e, r, i, d]
  ), g = P(a ?? "");
  return /* @__PURE__ */ m(
    z,
    {
      "data-testid": g,
      $borderRadius: n,
      $isDisabled: t,
      children: /* @__PURE__ */ m(
        b,
        {
          fill: "fixed",
          disabled: t,
          overrides: f,
          activeKey: s,
          onChange: l,
          children: c
        }
      )
    }
  );
};
export {
  $ as HeaderTabsComponent
};
//# sourceMappingURL=header-tabs.js.map
