import { jsxs as E, jsx as e } from "react/jsx-runtime";
import { useState as y, useMemo as C, useCallback as h } from "react";
import { Search as I } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as K } from "../../../utils/i18n/utils.js";
import { Avatar as R } from "../../../avatar/avatar.js";
import { Button as T } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as W } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Checkbox as k } from "../../../checkbox/checkbox.js";
import { Input as A } from "../../../input/input.js";
import { Text as g } from "../../../text/text.js";
import { TitleLayout as q } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { userListStyles as G, inputStyledOverrides as H, popoverStyledOverrides as J } from "./users-list.styles.js";
const a = (n, i) => n.find((r) => r.id === i), P = (n, i) => {
  const r = n.slice().sort((l, d) => l.fullName > d.fullName ? 1 : -1);
  return [
    ...r.filter(({ id: l }) => a(i, l)),
    ...r.filter(({ id: l }) => !a(i, l))
  ];
}, _t = ({
  dataTestId: n,
  users: i,
  checkedUsers: r,
  placeholder: l,
  updateCheckedUsers: d
}) => {
  const { wrapper: L, bodyStyles: x, inputWrapper: _, noResultsWrapper: $, footerStyles: B, theme: c } = W(G), [o, N] = y(r), [v, w] = y(i), { t: f } = K(), F = C(() => r.length === o.length && r.every(({ id: t }) => a(o, t)), [r, o]), S = C(
    () => P(v, r),
    [r, v]
  ), M = h(() => {
    d(o);
  }, [d, o]), O = h(
    (t) => {
      const s = a(o, t.id), m = s !== void 0 ? o.filter((p) => p.id !== s.id) : [...o, t];
      N(m);
    },
    [o]
  ), j = h(
    (t) => {
      w(
        i.filter(({ fullName: s, email: m }) => `${s} ${m}`.toLowerCase().includes(t.toLowerCase()))
      );
    },
    [i]
  );
  return /* @__PURE__ */ E("div", { className: L, children: [
    /* @__PURE__ */ e("div", { className: _, children: /* @__PURE__ */ e(
      A,
      {
        "data-testid": `${n}__search-input`,
        placeholder: l,
        overrides: H(),
        onChange: (t) => j(t.target.value),
        autoFocus: !0,
        startEnhancer: /* @__PURE__ */ e(
          I,
          {
            size: 16,
            color: c.colors.neutralSubdued,
            title: "SearchIcon"
          }
        )
      }
    ) }),
    /* @__PURE__ */ e("div", { className: x, children: S.length > 0 ? S.map(({ id: t, fullName: s, email: m, disabled: p }, z) => {
      var b;
      const D = a(o, t) !== void 0, u = p || ((b = a(r, t)) == null ? void 0 : b.disabled);
      return /* @__PURE__ */ e(
        k,
        {
          "data-testid": `${n}__user-${z}`,
          onChange: () => O({ id: t, fullName: s, email: m }),
          checked: D,
          disabled: u,
          children: /* @__PURE__ */ e(
            q,
            {
              overrides: J(),
              startEnhancer: /* @__PURE__ */ e(
                R,
                {
                  disabled: u,
                  name: s,
                  size: "24px"
                }
              ),
              titleText: /* @__PURE__ */ e(
                g,
                {
                  variant: "bodySmall",
                  margin: "0",
                  color: u ? c.colors.neutralSubtle : c.colors.neutralSubdued,
                  children: s
                }
              )
            }
          )
        },
        t
      );
    }) : /* @__PURE__ */ e("div", { className: $, children: /* @__PURE__ */ e(
      g,
      {
        variant: "bodySmall",
        color: c.colors.neutralSubdued,
        children: f("userMultiselect.noResults")
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: B, children: /* @__PURE__ */ e(
      T,
      {
        "data-testid": `${n}__save-button`,
        disabled: F,
        onClick: M,
        children: f("userMultiselect.saveButton")
      }
    ) })
  ] });
};
export {
  _t as UsersList,
  P as getSortedUsers
};
//# sourceMappingURL=users-list.js.map
