import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { useState as A, useCallback as c } from "react";
import { Search as B } from "@carbon/icons-react";
import { Popover as K } from "baseui/popover";
import "../button/button.js";
import { IconButton as V } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { Spinner as _ } from "../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Tag as H } from "../tag/next/tag.js";
import { Text as J } from "../text/text.js";
import { ariaKeyDownHandler as q } from "../utils/accessibility.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as F } from "../utils/i18n/utils.js";
import { useSyncedRef as G } from "../../hooks/use-synced-ref.hook.js";
import { noop as a } from "../../utils/noop.js";
import { ArrowIcon as Q } from "../select/components/arrow-icon.js";
import { useContainerWidth as U } from "../utils/hooks/use-container-width.js";
import { useCss as X } from "../utils/hooks/use-css.js";
import { EntitiesMultiSelectDropdown as Y } from "./components/entities-multiselect-dropdown/entities-multiselect-dropdown.js";
import { entitiesMultiselectStyles as Z, popoverStyledOverrides as L } from "./entities-multiselect.styles.js";
const Pt = ({
  dataTestId: d = "entities-multiselect",
  name: f,
  options: v = [],
  values: e = [],
  placeholder: W,
  searchPlaceholder: g,
  isLoading: h,
  disabled: i = !1,
  peopleTotalElements: k,
  companyTotalElements: x,
  containerRef: I,
  error: N,
  onChange: n = a,
  onSearch: O = a,
  onLoadMore: w = a,
  zIndex: E = 1,
  leading: u
}) => {
  const y = G({ externalRef: I }), [p, C] = A(!1), { containerWidth: D } = U(y), { t: S } = F(), {
    containerWrapper: M,
    contentStyles: $,
    contentWrapper: R,
    placeholderWrapper: b,
    endIconWrapper: P,
    leadingWrapper: T
  } = X(Z, {
    disabled: i,
    $hasError: !!N
  }), o = c(() => {
    C(!p);
  }, [p]), j = c(
    (r) => {
      n(r);
    },
    [n]
  ), z = c(
    (r) => {
      const s = e.filter((m) => m.id !== r);
      n(s);
    },
    [n, e]
  );
  return /* @__PURE__ */ l("div", { className: M, children: [
    f && /* @__PURE__ */ t(
      "input",
      {
        type: "hidden",
        name: f,
        value: JSON.stringify(e ?? []),
        readOnly: !0
      }
    ),
    /* @__PURE__ */ t(
      K,
      {
        isOpen: p,
        placement: "bottom",
        onEsc: o,
        onClickOutside: o,
        overrides: L(D),
        content: () => /* @__PURE__ */ t(
          Y,
          {
            dataTestId: `${d}-entities-list`,
            options: v,
            values: e,
            isLoading: h,
            updateValues: j,
            onSearch: O,
            peopleTotalElements: k,
            companyTotalElements: x,
            onLoadMore: w,
            placeholder: g || S("entitiesMultiselect.searchPlaceholder")
          }
        ),
        children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ l(
          "div",
          {
            "data-testid": `${d}__wrapper`,
            role: "button",
            tabIndex: i ? -1 : 0,
            className: $,
            ref: y,
            onClick: o,
            onKeyDown: q(o),
            children: [
              u && /* @__PURE__ */ t("div", { className: T, children: u }),
              /* @__PURE__ */ l("div", { className: R, children: [
                e.length > 0 && e.map(({ id: r, label: s }) => /* @__PURE__ */ t(
                  H,
                  {
                    kind: "peace",
                    variant: "light",
                    shape: "rounded",
                    showAction: !0,
                    disabled: i,
                    onClick: (m) => {
                      m.preventDefault(), m.stopPropagation(), z(r);
                    },
                    zIndex: E,
                    $style: {
                      minWidth: "max-content"
                    },
                    children: s
                  },
                  `entity-value-${r}`
                )),
                e.length === 0 && /* @__PURE__ */ l("div", { className: b, children: [
                  /* @__PURE__ */ t(B, {}),
                  /* @__PURE__ */ t(
                    J,
                    {
                      variant: "body",
                      color: "neutralSubdued",
                      fontWeight: 400,
                      margin: "0",
                      children: W || S("entitiesMultiselect.placeholder")
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: P, children: h ? /* @__PURE__ */ t(_, { size: "sm" }) : /* @__PURE__ */ t(
                V,
                {
                  onClick: o,
                  kind: "ghost-tertiary",
                  size: "mini",
                  children: /* @__PURE__ */ t(
                    Q,
                    {
                      isOpen: p,
                      color: i ? "neutralDepressed" : "neutral"
                    }
                  )
                }
              ) })
            ]
          }
        ) })
      }
    )
  ] });
};
export {
  Pt as EntitiesMultiSelect
};
//# sourceMappingURL=entities-multiselect.js.map
