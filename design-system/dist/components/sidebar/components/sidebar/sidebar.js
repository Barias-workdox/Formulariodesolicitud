import { jsx as i } from "react/jsx-runtime";
import { forwardRef as d, useEffect as c } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../utils/i18n/utils.js";
import { useIsScrollable as S } from "../../../utils/hooks/use-is-scrollable.js";
import { useSyncedRef as f } from "../../../../hooks/use-synced-ref.hook.js";
import { useSidebar as a } from "../../sidebar.provider.js";
import { StyledSidebarContent as C, StyledSidebarFooter as u, StyledSidebar as y } from "./sidebar.styles.js";
const F = ({ children: e }) => {
  const { isCollapsed: o } = a(), { t: r } = m();
  return /* @__PURE__ */ i(
    y,
    {
      $isCollapsed: o,
      "aria-label": r("sidebar.ariaLabels.mainMenu"),
      id: "sidebar-navigation",
      children: e
    }
  );
}, p = d((e, o) => {
  const { t: r } = m(), { isCollapsed: t, setIsContentScrollable: l } = a(), s = f({ externalRef: o }), { vertical: n } = S(s);
  return c(() => {
    l(n);
  }, [n, l]), /* @__PURE__ */ i(
    C,
    {
      ref: s,
      role: "region",
      "aria-label": r("sidebar.ariaLabels.content"),
      $isCollapsed: t,
      ...e
    }
  );
});
p.displayName = "SidebarContent";
const b = d(
  (e, o) => {
    const { isCollapsed: r, isContentScrollable: t } = a();
    return /* @__PURE__ */ i(
      u,
      {
        ref: o,
        $isCollapsed: r,
        $isScrollable: t,
        ...e
      }
    );
  }
);
b.displayName = "SidebarFooter";
const h = Object.assign(F, {
  Content: p,
  Footer: b
});
export {
  h as Sidebar
};
//# sourceMappingURL=sidebar.js.map
