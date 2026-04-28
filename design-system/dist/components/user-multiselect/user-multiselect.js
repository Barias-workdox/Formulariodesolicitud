import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useState as M, useMemo as R, useCallback as S } from "react";
import { Popover as I } from "baseui/popover";
import { ariaKeyDownHandler as j } from "../utils/accessibility.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as B } from "../utils/i18n/utils.js";
import { useSyncedRef as D } from "../../hooks/use-synced-ref.hook.js";
import { noop as K } from "../../utils/noop.js";
import { Spinner as L } from "../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Text as p } from "../text/text.js";
import { useContainerWidth as V } from "../utils/hooks/use-container-width.js";
import { useCss as z } from "../utils/hooks/use-css.js";
import { UsersList as A } from "./components/users-list/users-list.js";
import { ArrowIconWrapper as E } from "./components/arrow-icon-wrapper/arrow-icon-wrapper.js";
import { userMultiselectStyles as c, popoverStyledOverrides as H } from "./user-multiselect.styles.js";
const J = (r) => `+${r - 1}`, xe = ({
  dataTestId: r = "user-multiselect",
  name: u,
  isLoading: x = !1,
  disabled: t = !1,
  users: N = [],
  checkedUsers: n = [],
  placeholder: g,
  inputRef: O,
  onChange: d = K
}) => {
  const f = D({ externalRef: O }), [s, h] = M(!1), { containerWidth: W } = V(f), { t: v } = B(), { containerWrapper: C, contentStyles: U, contentWrapper: _, valueWrapper: $, textValueWrapper: b, theme: i } = z(c, {
    disabled: t
  }), l = R(
    () => n.slice().sort((m, w) => m.fullName > w.fullName ? 1 : -1) ?? [],
    [n]
  ), [y] = l, o = S(() => {
    h(!s);
  }, [s]), k = S(
    (m) => {
      d(m), h(!1);
    },
    [d]
  );
  return /* @__PURE__ */ a("div", { className: C, children: [
    u && /* @__PURE__ */ e(
      "input",
      {
        type: "hidden",
        name: u,
        value: JSON.stringify(n ?? []),
        readOnly: !0
      }
    ),
    /* @__PURE__ */ e(
      I,
      {
        isOpen: s,
        placement: "bottom",
        onEsc: o,
        onClickOutside: o,
        overrides: H(W),
        content: () => /* @__PURE__ */ e(
          A,
          {
            dataTestId: `${r}__users-list`,
            users: N,
            checkedUsers: l,
            updateCheckedUsers: k,
            placeholder: g || v("userMultiselect.placeholder")
          }
        ),
        children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a(
          "div",
          {
            ref: f,
            "data-testid": `${r}__wrapper`,
            role: "button",
            tabIndex: t ? -1 : 0,
            className: U,
            onClick: o,
            onKeyDown: j(o),
            children: [
              /* @__PURE__ */ e("div", { className: _, children: /* @__PURE__ */ a("div", { className: $, children: [
                /* @__PURE__ */ e("div", { className: b, children: y ? /* @__PURE__ */ e(
                  p,
                  {
                    $style: c.textValue(i, { disabled: t }),
                    variant: "bodySmall",
                    children: y.fullName
                  }
                ) : /* @__PURE__ */ e(
                  p,
                  {
                    variant: "bodySmall",
                    color: i.colors.neutralSubdued,
                    margin: 0,
                    children: v("userMultiselect.selectUsers")
                  }
                ) }),
                l.length > 1 && /* @__PURE__ */ e(
                  p,
                  {
                    variant: "bodySmall",
                    color: i.colors.textBase,
                    $style: c.counterBadge(i, { disabled: t }),
                    children: J(l.length)
                  }
                )
              ] }) }),
              x && /* @__PURE__ */ e(L, { size: "sm" }),
              /* @__PURE__ */ e(
                E,
                {
                  "data-testid": `${r}__arrow-icon`,
                  isOpen: s,
                  disabled: t,
                  toggleIsOpen: o
                }
              )
            ]
          }
        ) })
      }
    )
  ] });
};
export {
  xe as UserMultiselect,
  J as getRemainingUsersLabel
};
//# sourceMappingURL=user-multiselect.js.map
