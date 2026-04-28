import { jsx as o, Fragment as x } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Accordion as b, Panel as u } from "baseui/accordion";
import { mergeOverridesDeep as g } from "../utils/baseui/helpers.js";
import { defaultOverrides as E } from "./collapsible-box.overrides.js";
const m = "collapsible-box__accordion--panel", P = ({
  dataTestId: i = "collapsible-box",
  title: r,
  collapsedTitle: n = r,
  Icon: t,
  options: a = /* @__PURE__ */ o(x, {}),
  overrides: e = {},
  initialState: { isExpanded: c } = { isExpanded: !0 },
  children: l,
  onChange: p
}) => {
  const s = {
    expanded: c ? [m] : []
  }, d = f(
    () => g(
      E({
        dataTestId: i,
        title: r,
        collapsedTitle: n,
        Icon: t,
        options: a,
        overrides: e
      }),
      e
    ),
    [i, r, n, t, a, e]
  );
  return /* @__PURE__ */ o(
    b,
    {
      initialState: s,
      overrides: d,
      onChange: p,
      children: /* @__PURE__ */ o(u, { children: l }, m)
    }
  );
};
export {
  P as CollapsibleBox
};
//# sourceMappingURL=collapsible-box.js.map
