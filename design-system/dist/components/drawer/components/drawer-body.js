import { jsx as e } from "react/jsx-runtime";
import { useCss as m } from "../../utils/hooks/use-css.js";
import { drawerBodyStyles as a } from "./drawer.styles.js";
const y = ({ children: r, padding: o, overrides: s = {} }) => {
  const { bodyContainerStyles: t } = m(a, { padding: o, overrides: s });
  return /* @__PURE__ */ e("div", { className: t, children: r });
};
export {
  y as DrawerBody
};
//# sourceMappingURL=drawer-body.js.map
