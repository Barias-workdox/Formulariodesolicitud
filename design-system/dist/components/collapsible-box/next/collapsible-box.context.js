import { jsx as r } from "react/jsx-runtime";
import { createContext as l, useContext as n } from "react";
import { COLLAPSIBLE_BOX_CONTEXT_DEFAULT_VALUES as s } from "./collapsible-box.constants.js";
const o = l(
  s
), p = ({
  size: t,
  children: e
}) => /* @__PURE__ */ r(
  o.Provider,
  {
    value: {
      size: t
    },
    children: e
  }
), m = () => n(o);
export {
  o as CollapsibleBoxContext,
  p as CollapsibleBoxProvider,
  m as useCollapsibleBoxContext
};
//# sourceMappingURL=collapsible-box.context.js.map
