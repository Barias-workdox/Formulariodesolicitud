import { jsx as e } from "react/jsx-runtime";
import { OpenPanelLeft as i } from "@carbon/icons-react";
import { useSidebar as t } from "../../sidebar.provider.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../utils/i18n/utils.js";
import { ariaKeyDownHandler as m } from "../../../utils/accessibility.utils.js";
import { SidebarLink as n } from "../link/sidebar-link.js";
const D = ({ onClick: r }) => {
  const { t: o } = p(), { isCollapsed: a } = t();
  return /* @__PURE__ */ e(
    n,
    {
      href: "#",
      Icon: i,
      onClick: r,
      "aria-label": o(a ? "sidebar.ariaLabels.expandMenu" : "sidebar.ariaLabels.collapseMenu"),
      tabIndex: 0,
      "aria-haspopup": "true",
      "aria-expanded": !a,
      onKeyDown: m(r)
    }
  );
};
export {
  D as SidebarTrigger
};
//# sourceMappingURL=sidebar-trigger.js.map
