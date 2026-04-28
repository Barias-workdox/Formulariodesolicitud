import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as b, useEffect as E, useRef as T } from "react";
import { Search as z } from "@carbon/icons-react";
import { Input as R } from "baseui/input";
import { Popover as V } from "baseui/popover";
import { VirtualizedMenu as D } from "../../menu/virtualized-menu/virtualized-menu.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as O } from "../../utils/i18n/utils.js";
import { Avatar as I } from "../../avatar/avatar.js";
import { Spinner as j } from "../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { Text as c } from "../../text/text.js";
import { useCss as x } from "../../utils/hooks/use-css.js";
import { MENTIONS_POPOVER_MAX_HEIGHT as A, USER_MENTION_HEIGHT as F } from "./mentions-popover.constants.js";
import { listStyles as N, popoverOverrides as G, searcherStyles as k, getSearcherInputOverrides as B } from "./mentions-popover.styles.js";
const J = ({
  dataTestId: r = "mentions-popover__searcher",
  value: a,
  isOpen: l,
  onChange: o
}) => {
  const { containerStyles: d } = x(k), s = T(null), { t: n } = O();
  return E(() => {
    var i;
    l && ((i = s.current) == null || i.focus());
  }, [l]), /* @__PURE__ */ p(
    "div",
    {
      "data-testid": r,
      className: d,
      children: [
        /* @__PURE__ */ e(
          z,
          {
            size: 16,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ e(
          R,
          {
            inputRef: s,
            value: a,
            onChange: (i) => o(i.target.value),
            placeholder: n("general.search"),
            "aria-label": n("general.search"),
            role: "searchbox",
            overrides: B({ dataTestId: r })
          }
        )
      ]
    }
  );
}, ge = ({
  dataTestId: r = "mentions-popover",
  users: a,
  isLoading: l = !1,
  isOpen: o,
  width: d,
  onEsc: s,
  onUserSelected: n,
  setIsOpen: i
}) => {
  const [u, v] = b(""), [S, y] = b(o), { containerStyles: C, itemLabelTemplateStyles: $, emptyListStyles: g, userDataStyles: L, theme: f } = x(N), { t: M } = O();
  E(() => {
    o && v(""), y(o);
  }, [o]);
  function h() {
    o === void 0 ? y(!1) : i(!1);
  }
  function w() {
    h(), s();
  }
  const m = a.length ? a.filter(
    (t) => {
      var _;
      return t.name.toLowerCase().indexOf(u.toLowerCase()) !== -1 || ((_ = t.email) == null ? void 0 : _.toLowerCase().indexOf(u.toLowerCase())) !== -1;
    }
  ) : [];
  function H(t) {
    h(), n(t);
  }
  const P = m != null && m.length ? /* @__PURE__ */ e(
    "div",
    {
      "data-testid": `${r}__list`,
      role: "listbox",
      "aria-label": "Mention suggestions",
      className: C,
      children: /* @__PURE__ */ e(
        D,
        {
          dataTestId: `${r}__list`,
          items: m,
          itemSize: F,
          maxHeight: A,
          onItemSelect: ({ item: t }) => H(t),
          itemLabelTemplate: (t) => /* @__PURE__ */ p("div", { className: $, children: [
            /* @__PURE__ */ e(
              I,
              {
                name: t.name,
                size: "32px"
              }
            ),
            /* @__PURE__ */ p("div", { className: L, children: [
              /* @__PURE__ */ e(
                c,
                {
                  variant: "bodySmall",
                  $style: {
                    margin: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: f.colors.neutral
                  },
                  children: t.name
                }
              ),
              t.email && /* @__PURE__ */ e(
                c,
                {
                  variant: "bodySmall",
                  $style: {
                    margin: 0,
                    color: f.colors.neutralSubdued
                  },
                  children: t.email
                }
              )
            ] }),
            t.label && /* @__PURE__ */ e(
              c,
              {
                variant: "upperDetails",
                $style: N.labelStyles(f),
                children: t.label
              }
            )
          ] })
        }
      )
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      "data-testid": `${r}__empty`,
      role: "status",
      "aria-live": "polite",
      className: g,
      children: /* @__PURE__ */ e(
        c,
        {
          variant: "bodySmall",
          alignSelf: "center",
          color: "neutralDepressed",
          children: M("general.empty")
        }
      )
    }
  );
  return /* @__PURE__ */ e(
    V,
    {
      autoFocus: !0,
      returnFocus: !0,
      placement: "top",
      isOpen: S,
      onClickOutside: h,
      onEsc: w,
      ignoreBoundary: !0,
      popoverMargin: 8,
      content: /* @__PURE__ */ p("div", { style: { width: d }, children: [
        /* @__PURE__ */ e(
          J,
          {
            dataTestId: `${r}__searcher`,
            value: u,
            onChange: v,
            isOpen: S
          }
        ),
        l ? /* @__PURE__ */ e(
          "div",
          {
            "data-testid": `${r}__loading`,
            className: g,
            role: "status",
            "aria-live": "polite",
            "aria-busy": "true",
            children: /* @__PURE__ */ e(j, {})
          }
        ) : P
      ] }),
      overrides: G,
      children: /* @__PURE__ */ e("div", {})
    }
  );
};
export {
  ge as MentionsPopover
};
//# sourceMappingURL=mentions-popover.js.map
