import { jsx as e } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { Popover as P } from "baseui/popover";
import { mergeOverridesDeep as c } from "../utils/baseui/helpers.js";
import { getOverride as O, getOverrideProps as u } from "../../utils/overrides.utils.js";
import { InformationPopoverContent as g } from "./components/information-popover-content/information-popover-content.js";
import { customPopoverOverrides as C } from "./information-popover.styles.js";
const D = ({
  "data-testid": t = "information-popover",
  title: n,
  content: i,
  children: m,
  overrides: p,
  close: s,
  ...v
}) => {
  const { PopoverContent: o, ...r } = p || {}, d = O(o) || g, f = a(() => c(C, r), [r]);
  return /* @__PURE__ */ e(
    P,
    {
      autoFocus: !1,
      showArrow: !1,
      overrides: f,
      content: /* @__PURE__ */ e(
        d,
        {
          "data-testid": t,
          close: s,
          content: i,
          title: n,
          ...u(o)
        }
      ),
      ...v,
      children: m
    }
  );
};
export {
  D as InformationPopover
};
//# sourceMappingURL=information-popover.js.map
