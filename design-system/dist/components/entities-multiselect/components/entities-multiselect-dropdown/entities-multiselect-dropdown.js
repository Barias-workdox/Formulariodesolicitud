import { jsxs as g, jsx as e, Fragment as O } from "react/jsx-runtime";
import { useCallback as $ } from "react";
import { Search as j } from "@carbon/icons-react";
import { debounce as z } from "lodash";
import { entitiesMultiSelectListStyles as L } from "../../entities-multiselect.styles.js";
import { Spinner as W } from "../../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as D } from "../../../utils/i18n/utils.js";
import { Input as q } from "../../../input/input.js";
import { Text as A } from "../../../text/text.js";
import { useCss as B } from "../../../utils/hooks/use-css.js";
import { EntitiesMultiSelectList as C } from "../entities-multiselect-list/entities-multiselect-list.js";
import { inputStyledOverrides as G } from "./entities-multiselect-dropdown.styles.js";
const ft = ({
  dataTestId: r,
  options: s,
  isLoading: i,
  values: o,
  placeholder: E,
  updateValues: m,
  onSearch: b,
  onLoadMore: a,
  peopleTotalElements: _,
  companyTotalElements: v,
  isDisabled: c
}) => {
  const { wrapper: M, inputWrapper: N, noResultsWrapper: d, separatorStyle: k, theme: h } = B(
    L
  ), { t: x } = D(), u = $(
    (t) => {
      const { id: y } = t, F = o.find((p) => p.id === String(y)) !== void 0 ? o.filter((p) => p.id !== y) : [...o, t];
      m(F);
    },
    [o, m]
  ), f = z((t) => {
    b(t ?? null);
  }, 300), n = s.filter((t) => t.type === "people"), l = s.filter((t) => t.type === "company"), R = n.length > 0 || l.length > 0, w = n.length > 0 && l.length > 0, S = i === "all";
  return /* @__PURE__ */ g("div", { className: M, children: [
    /* @__PURE__ */ e("div", { className: N, children: /* @__PURE__ */ e(
      q,
      {
        "data-testid": `${r}__search-input`,
        placeholder: E,
        overrides: G(),
        onChange: (t) => f(t.target.value),
        autoFocus: !0,
        clearable: !0,
        onClear: () => f(""),
        disabled: i === "all",
        startEnhancer: /* @__PURE__ */ e(
          j,
          {
            size: 16,
            color: h.colors.neutralSubdued,
            title: "SearchIcon"
          }
        )
      }
    ) }),
    !S && /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ e(
        C,
        {
          dataTestId: r,
          type: "people",
          options: n,
          values: o,
          totalElements: _,
          isDisabled: c,
          isLoading: i === "people",
          handleCheck: u,
          handleLoadMore: a
        }
      ),
      w && /* @__PURE__ */ e("div", { className: k }),
      /* @__PURE__ */ e(
        C,
        {
          dataTestId: r,
          type: "company",
          options: l,
          values: o,
          totalElements: v,
          isDisabled: c,
          isLoading: i === "company",
          handleCheck: u,
          handleLoadMore: a
        }
      ),
      !R && /* @__PURE__ */ e(
        "div",
        {
          "data-testid": `${r}__no-results`,
          className: d,
          children: /* @__PURE__ */ e(
            A,
            {
              variant: "bodySmall",
              color: h.colors.neutralSubdued,
              children: x("entitiesMultiselect.noResults")
            }
          )
        }
      )
    ] }),
    S && /* @__PURE__ */ e(
      "div",
      {
        "data-testid": `${r}__dropdown-loading`,
        className: d,
        children: /* @__PURE__ */ e(W, { size: "md" })
      }
    )
  ] });
};
export {
  ft as EntitiesMultiSelectDropdown
};
//# sourceMappingURL=entities-multiselect-dropdown.js.map
