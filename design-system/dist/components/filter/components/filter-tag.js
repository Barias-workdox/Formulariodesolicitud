import { jsx as r } from "react/jsx-runtime";
import { Tag as i } from "../../tag/tag.js";
import { StatefulTooltipNext as a } from "../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
const n = {
  Root: {
    style: () => ({
      cursor: "pointer"
    })
  }
}, c = ({
  "data-testid": t,
  children: o,
  tooltipText: e
}) => /* @__PURE__ */ r(
  a,
  {
    content: e,
    showArrow: !0,
    ignoreBoundary: !0,
    popoverMargin: 8,
    children: /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(
      i,
      {
        "data-testid": t,
        variant: "overlay",
        kind: "accent",
        overrides: n,
        children: o
      }
    ) })
  }
);
export {
  c as FilterTag
};
//# sourceMappingURL=filter-tag.js.map
