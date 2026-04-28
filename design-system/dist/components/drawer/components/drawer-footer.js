import { jsx as e } from "react/jsx-runtime";
import { useCss as s } from "../../utils/hooks/use-css.js";
import { drawerFooterStyles as m } from "./drawer.styles.js";
const f = ({ children: r, overrides: o = {} }) => {
  const { footerContainerStyles: t } = s(m, { overrides: o });
  return /* @__PURE__ */ e("div", { className: t, children: r });
};
export {
  f as DrawerFooter
};
//# sourceMappingURL=drawer-footer.js.map
