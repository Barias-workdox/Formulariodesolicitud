import { jsx as t, Fragment as m, jsxs as o } from "react/jsx-runtime";
import { useRef as H, useCallback as N, useEffect as T } from "react";
import { WarningAltFilled as F } from "@carbon/icons-react";
import { entitiesMultiSelectListStyles as M, titleLayoutStyledOverrides as W } from "../../entities-multiselect.styles.js";
import { Spinner as j } from "../../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Tag as z } from "../../../tag/next/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as A } from "../../../utils/i18n/utils.js";
import { Avatar as O } from "../../../avatar/avatar.js";
import { Checkbox as R } from "../../../checkbox/checkbox.js";
import { Text as a } from "../../../text/text.js";
import { useCss as w } from "../../../utils/hooks/use-css.js";
import { TitleLayout as P } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
const V = (r) => (r == null ? void 0 : r[0]) ?? "", ft = ({
  dataTestId: r,
  type: i,
  options: d,
  values: g,
  handleCheck: S,
  handleLoadMore: p,
  isLoading: y,
  totalElements: L,
  isDisabled: n = !1
}) => {
  const {
    bodyStyles: $,
    optionsListHeaderStyle: x,
    optionsListHeaderLabelStyle: _,
    listOptionStyle: b,
    theme: h
  } = w(M), { t: u } = A(), l = H(null), s = N(() => {
    const e = l.current;
    if (!e) return;
    e.scrollHeight - e.scrollTop - e.clientHeight < 50 && p(i);
  }, [p, i]);
  return T(() => {
    const e = l.current;
    if (e)
      return e.addEventListener("scroll", s), () => e.removeEventListener("scroll", s);
  }, [s]), /* @__PURE__ */ t(m, { children: d.length > 0 && /* @__PURE__ */ o(m, { children: [
    /* @__PURE__ */ o("div", { className: x, children: [
      /* @__PURE__ */ t("div", { className: _, children: /* @__PURE__ */ t(
        a,
        {
          variant: "upperDetails",
          color: "neutralStrong",
          fontWeight: 400,
          children: u(`entitiesMultiselect.${i}`)
        }
      ) }),
      /* @__PURE__ */ t(
        a,
        {
          "data-testid": `${r}__entity-${i}-count`,
          variant: "upperDetails",
          color: "brand",
          fontWeight: 400,
          children: `(${L})`
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "div",
      {
        ref: l,
        "data-testid": `${r}__entity-${i}-list`,
        className: $,
        children: /* @__PURE__ */ o(m, { children: [
          d.map((e, f) => {
            const { id: v, label: c, isValidated: C } = e, E = g.some((k) => k.id === v);
            return /* @__PURE__ */ o(
              "div",
              {
                className: b,
                children: [
                  /* @__PURE__ */ t(
                    R,
                    {
                      "data-testid": `${r}__entity-people-${f}`,
                      onChange: () => S(e),
                      checked: E,
                      disabled: n,
                      children: /* @__PURE__ */ t(
                        P,
                        {
                          overrides: W(),
                          startEnhancer: /* @__PURE__ */ t(
                            O,
                            {
                              disabled: n,
                              name: i === "people" ? c : V(c),
                              size: "24px"
                            }
                          ),
                          titleText: /* @__PURE__ */ t(
                            a,
                            {
                              variant: "bodySmall",
                              margin: "0",
                              color: n ? h.colors.neutralSubtle : h.colors.neutralSubdued,
                              children: c
                            }
                          )
                        }
                      )
                    }
                  ),
                  !C && /* @__PURE__ */ t(
                    z,
                    {
                      icon: F,
                      kind: "warning",
                      variant: "light",
                      children: u("entitiesMultiselect.validationPending")
                    }
                  )
                ]
              },
              v
            );
          }),
          y && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(j, { size: "sm" }) })
        ] })
      }
    )
  ] }) });
};
export {
  ft as EntitiesMultiSelectList
};
//# sourceMappingURL=entities-multiselect-list.js.map
