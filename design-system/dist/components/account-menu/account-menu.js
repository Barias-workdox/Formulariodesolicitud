import { jsx as a, jsxs as v, Fragment as j } from "react/jsx-runtime";
import { useState as E, useRef as B, useCallback as s } from "react";
import { ChevronDown as U, ChevronUp as H } from "@carbon/icons-react";
import { StatefulPopover as I } from "baseui/popover";
import { Avatar as N } from "../avatar/next/avatar.js";
import { usePopperRefresh as q } from "../../hooks/use-popper-refresh.js";
import { popoverOverrides as G, StyledMenuContainer as J, StyledMenuSection as Q } from "./account-menu.styles.js";
import { AccountMenuButton as p } from "./components/button/account-menu-button.js";
import { LanguageSelector as L } from "./components/language-selector/language-selector.js";
import { AccountMenuUser as V } from "./components/user/account-menu-user.js";
import { useKeyboardNavigation as W } from "./hooks/use-keyboard-navigation.js";
const ie = ({
  dataTestId: o = "account-menu",
  user: t,
  actions: r = [],
  showLanguageSelector: c = !0,
  showManageAccountButton: M = !0,
  showTriggerTooltip: A = !0,
  manageAccountButtonText: C,
  onManageAccountClick: R,
  onLanguageChange: d,
  triggerAriaLabel: S,
  menuAriaLabel: k,
  isOpen: n,
  onOpen: i,
  onClose: l
}) => {
  const [y, f] = E(!1), [g, u] = E(!1), b = B(null), m = n !== void 0 ? n : y, D = `${o}-menu`, T = s(() => {
    i == null || i(), n === void 0 && f(!0);
  }, [n, i]), h = s(() => {
    l == null || l(), n === void 0 && f(!1), u(!1);
  }, [n, l]), $ = s(() => {
    var e;
    (e = b.current) == null || e.focus();
  }, []), x = s((e) => {
    u(e);
  }, []), { menuRef: F, handleKeyDown: w } = W({
    isOpen: m,
    isLanguageExpanded: g,
    onClose: h,
    onToggleLanguage: () => u(!g),
    onFocusTrigger: $
  }), z = q(), K = S || `Account menu for ${t.name}`, P = k || "Account menu options";
  return /* @__PURE__ */ a(
    I,
    {
      placement: "topRight",
      overrides: G,
      autoFocus: !1,
      popperOptions: z,
      onOpen: T,
      onClose: h,
      content: () => /* @__PURE__ */ v(
        J,
        {
          ref: F,
          id: D,
          "data-testid": `${o}-menu`,
          role: "menu",
          "aria-label": P,
          "aria-orientation": "vertical",
          onKeyDown: w,
          tabIndex: -1,
          children: [
            /* @__PURE__ */ a(
              V,
              {
                user: t,
                showManageAccountButton: M,
                manageAccountButtonText: C,
                onManageAccountClick: R
              }
            ),
            /* @__PURE__ */ a(
              Q,
              {
                role: "group",
                "aria-label": "Menu actions",
                children: r.length > 0 ? /* @__PURE__ */ v(j, { children: [
                  /* @__PURE__ */ a(
                    p,
                    {
                      startEnhancer: r[0].icon,
                      text: r[0].label,
                      onClick: r[0].onClick,
                      isDisabled: r[0].disabled,
                      ariaLabel: r[0].ariaLabel || r[0].label,
                      role: "menuitem",
                      tabIndex: 0,
                      variant: "small"
                    },
                    r[0].id
                  ),
                  c && /* @__PURE__ */ a(
                    L,
                    {
                      dataTestId: `${o}-language-selector`,
                      onLanguageChange: d,
                      onExpansionChange: x
                    }
                  ),
                  r.slice(1).map((e) => /* @__PURE__ */ a(
                    p,
                    {
                      startEnhancer: e.icon,
                      text: e.label,
                      onClick: e.onClick,
                      isDisabled: e.disabled,
                      ariaLabel: e.ariaLabel || e.label,
                      role: "menuitem",
                      tabIndex: 0,
                      variant: "small"
                    },
                    e.id
                  ))
                ] }) : c && /* @__PURE__ */ a(
                  L,
                  {
                    dataTestId: `${o}-language-selector`,
                    onLanguageChange: d,
                    onExpansionChange: x
                  }
                )
              }
            )
          ]
        }
      ),
      children: /* @__PURE__ */ a(
        p,
        {
          ref: b,
          isTriggerButton: !0,
          text: t.name.trim().split(" ")[0],
          startEnhancer: /* @__PURE__ */ a(
            N,
            {
              name: t.name,
              size: "24px",
              src: t.avatarSrc,
              showTooltip: A
            }
          ),
          endEnhancer: m ? /* @__PURE__ */ a(U, { size: 16 }) : /* @__PURE__ */ a(H, { size: 16 }),
          ariaLabel: K,
          role: "button",
          ariaHasPopup: "menu",
          ariaExpanded: m,
          tabIndex: 0
        }
      )
    }
  );
};
export {
  ie as AccountMenu
};
//# sourceMappingURL=account-menu.js.map
