import { jsx as i, Fragment as m } from "react/jsx-runtime";
import { StatefulTooltip as n } from "baseui/tooltip";
import { Text as f } from "../text/text.js";
import { useCss as a } from "../utils/hooks/use-css.js";
import { tooltipCaptionOverridesStyles as d, tooltipCaptionStyles as u } from "./tooltip.styles.js";
function S({ children: t }) {
  const { theme: o } = a({});
  return /* @__PURE__ */ i(
    f,
    {
      $style: u(o),
      variant: "bodySmall",
      children: t
    }
  );
}
const x = ({
  content: t,
  children: o,
  tooltipOverrideStyles: e,
  // Use basic tooltip overrides by default
  overrides: r,
  zIndex: l,
  ...p
}) => {
  const s = r === void 0 ? d(void 0, e, l) : r;
  return o !== void 0 ? /* @__PURE__ */ i(
    n,
    {
      ...p,
      overrides: s,
      content: typeof t == "string" ? /* @__PURE__ */ i(S, { children: t }) : t,
      children: o
    }
  ) : /* @__PURE__ */ i(m, {});
};
export {
  x as StatefulTooltip
};
//# sourceMappingURL=stateful-tooltip.js.map
