import { jsx as r } from "react/jsx-runtime";
import { useCss as e } from "../../../../../utils/hooks/use-css.js";
import { styles as p } from "./popover-menu-options-wrapper.styles.js";
const n = ({
  children: o
}) => {
  const { optionsWrapperStyles: s } = e(p);
  return /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r("ul", { className: s, children: o }) });
};
export {
  n as PopoverMenuOptionsWrapper
};
//# sourceMappingURL=popover-menu-options-wrapper.js.map
