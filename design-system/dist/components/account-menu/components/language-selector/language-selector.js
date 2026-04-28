import { jsxs as S, jsx as r } from "react/jsx-runtime";
import { useState as R, useRef as $, useEffect as k } from "react";
import { ChevronUp as E, ChevronDown as L, Language as T, Checkmark as j } from "@carbon/icons-react";
import { Text as y } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { allLocaleOptions as h } from "../../../utils/i18n/i18n.constants.js";
import { useTranslation as q } from "../../../utils/i18n/utils.js";
import { useCss as B } from "../../../utils/hooks/use-css.js";
import { useLocale as K } from "../../../../contexts/locale-provider/locale-provider.js";
import { AccountMenuButton as w } from "../button/account-menu-button.js";
import { StyledAccountMenuButtonTitle as U } from "../button/account-menu-button.styles.js";
import { StyledRoot as W, StyledContent as F, StyledFlagIcon as H } from "./language-selector.styles.js";
const ie = ({
  dataTestId: x = "language-selector",
  onLanguageChange: u,
  onExpansionChange: l
}) => {
  const { t: m } = q(), [t, s] = R(!1), { locale: a, updateLocale: D } = K(), d = $(null), { theme: f } = B(), g = h.find((e) => e.id === a) || h[0], p = `${x}-menu`, I = (e) => {
    D(e), u == null || u(e), s(!1);
  }, v = () => {
    s(!t), l == null || l(!t);
  }, A = (e) => {
    var n;
    const { key: o } = e;
    if (o === "Escape" && t) {
      e.preventDefault(), s(!1), l == null || l(!1);
      return;
    }
    if (o === "Enter" || o === " ") {
      e.preventDefault(), v();
      return;
    }
    if (t && (o === "ArrowDown" || o === "ArrowUp")) {
      e.preventDefault();
      const i = (n = d.current) == null ? void 0 : n.querySelectorAll(
        '[data-role="language-option"]'
      );
      if (!i || i.length === 0) return;
      const c = Array.from(i).findIndex(
        (M) => M === document.activeElement
      );
      if (c === -1) return;
      let b;
      o === "ArrowDown" ? b = c === i.length - 1 ? 0 : c + 1 : b = c === 0 ? i.length - 1 : c - 1, i[b].focus();
    }
  };
  return k(() => {
    if (t && d.current) {
      const e = setTimeout(() => {
        var n;
        const o = (n = d.current) == null ? void 0 : n.querySelector(
          '[data-role="language-option"]'
        );
        o && o.focus();
      }, 10);
      return () => clearTimeout(e);
    }
  }, [t]), /* @__PURE__ */ S(
    W,
    {
      "data-testid": x,
      role: "menuitem",
      "aria-haspopup": "true",
      "aria-expanded": t,
      "aria-controls": p,
      onKeyDown: A,
      children: [
        /* @__PURE__ */ r(
          w,
          {
            startEnhancer: /* @__PURE__ */ r(T, {}),
            text: /* @__PURE__ */ S(U, { children: [
              /* @__PURE__ */ S(
                y,
                {
                  variant: "bodySmall",
                  margin: 0,
                  padding: 0,
                  fontWeight: "bold",
                  paddingRight: f.spacing.spacingXs,
                  children: [
                    m("accountMenu.languageSelector.title"),
                    ":"
                  ]
                }
              ),
              /* @__PURE__ */ r(
                y,
                {
                  variant: "bodySmall",
                  margin: 0,
                  padding: 0,
                  children: g.label
                }
              )
            ] }),
            endEnhancer: t ? /* @__PURE__ */ r(E, {}) : /* @__PURE__ */ r(L, {}),
            onClick: v,
            ariaLabel: `${m("accountMenu.languageSelector.title")}: ${g.label}`,
            role: "button",
            dataRole: "language-trigger",
            ariaHasPopup: "listbox",
            ariaExpanded: t,
            ariaControls: p,
            tabIndex: 0
          }
        ),
        /* @__PURE__ */ r(
          F,
          {
            ref: d,
            id: p,
            role: "listbox",
            "aria-label": m("accountMenu.languageSelector.title"),
            "aria-hidden": !t,
            tabIndex: t ? 0 : -1,
            $isExpanded: t,
            children: h.map((e) => /* @__PURE__ */ r(
              w,
              {
                startEnhancer: /* @__PURE__ */ r(H, { children: e.flag }),
                text: /* @__PURE__ */ r(
                  y,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    padding: 0,
                    fontWeight: e.id === a ? "500" : "normal",
                    color: e.id === a ? f.colors.neutralMedium : f.colors.neutral,
                    children: e.label
                  }
                ),
                endEnhancer: e.id === a ? /* @__PURE__ */ r(j, {}) : void 0,
                onClick: () => I(e.id),
                ariaLabel: `${e.label}${e.id === a ? " (selected)" : ""}`,
                role: "option",
                dataRole: "language-option",
                ariaSelected: e.id === a,
                tabIndex: t ? 0 : -1,
                variant: "small"
              },
              e.id
            ))
          }
        )
      ]
    }
  );
};
export {
  ie as LanguageSelector
};
//# sourceMappingURL=language-selector.js.map
