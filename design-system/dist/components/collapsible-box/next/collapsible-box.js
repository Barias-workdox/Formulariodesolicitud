import { jsx as t } from "react/jsx-runtime";
import { useState as i, useEffect as f } from "react";
import { StatelessAccordion as x } from "baseui/accordion";
import { noop as c } from "../../../utils/noop.js";
import { CollapsibleBoxProvider as u } from "./collapsible-box.context.js";
import { getCollapsibleBoxOverrides as C } from "./collapsible-box.overrides.js";
const b = [], j = ({
  children: s,
  size: p = "large",
  gap: d,
  accordion: l = !0,
  expanded: e = b,
  onChange: n = c
}) => {
  const [a, o] = i(e);
  return f(() => {
    o(e);
  }, [e]), /* @__PURE__ */ t(u, { size: p, children: /* @__PURE__ */ t(
    x,
    {
      accordion: l,
      expanded: a,
      overrides: C({ gap: d }),
      onChange: (r) => {
        const { expanded: m } = r;
        o(m), n(r);
      },
      children: s
    }
  ) });
};
export {
  j as CollapsibleBox
};
//# sourceMappingURL=collapsible-box.js.map
