import { jsx as e } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { StatefulPopover as u } from "baseui/popover";
import { mergeOverridesDeep as P } from "../utils/baseui/helpers.js";
import { getOverride as c, getOverrideProps as O } from "../../utils/overrides.utils.js";
import { InformationPopoverContent as g } from "./components/information-popover-content/information-popover-content.js";
import { customPopoverOverrides as l } from "./information-popover.styles.js";
const A = ({
  "data-testid": t,
  title: m,
  content: n,
  children: i,
  overrides: p,
  ...s
}) => {
  const { PopoverContent: o, ...r } = p || {}, v = c(o) || g, d = a(() => P(l, r), [r]);
  return /* @__PURE__ */ e(
    u,
    {
      autoFocus: !1,
      showArrow: !1,
      overrides: d,
      content: ({ close: f }) => /* @__PURE__ */ e(
        v,
        {
          "data-testid": t,
          close: f,
          content: n,
          title: m,
          ...O(o)
        }
      ),
      ...s,
      children: i
    }
  );
};
export {
  A as StatefulInformationPopover
};
//# sourceMappingURL=stateful-information-popover.js.map
