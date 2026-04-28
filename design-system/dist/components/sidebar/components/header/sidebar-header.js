import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { useSidebar as s } from "../../sidebar.provider.js";
import { SidebarTrigger as a } from "../trigger/sidebar-trigger.js";
import { StyledSidebarHeader as l } from "./sidebar-header.styles.js";
const n = ({
  children: r,
  showTrigger: e = !0
}) => {
  const { isCollapsed: o, toggleSidebar: i } = s();
  return /* @__PURE__ */ d(l, { $isCollapsed: o, children: [
    r,
    e && /* @__PURE__ */ t(a, { onClick: i })
  ] });
};
export {
  n as SidebarHeader
};
//# sourceMappingURL=sidebar-header.js.map
