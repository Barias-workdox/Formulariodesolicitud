import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { useMemo as S } from "react";
import { Text as y } from "../text/text.js";
import { StatefulTooltipNext as B } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../utils/i18n/utils.js";
import { CleanAllFiltersButton as T } from "./components/clean-all-filters-button/clean-all-filters-button.js";
import { CustomFilter as G } from "./components/custom-filter/custom-filter.js";
import { ExtraFiltersIconButton as W } from "./components/extra-filters-icon-button/extra-filters-icon-button.js";
import { StyledRoot as b, StyledFiltersWrapper as j, StyledExtrasWrapper as w } from "./filters-group.styles.js";
const E = ({
  children: s,
  showClearAllFiltersButton: u,
  maxActiveFilters: o,
  activeFiltersCount: t = 0,
  disabledReason: n = "",
  allFiltersConfig: p,
  visibleFiltersId: l,
  addVisibleFilter: a,
  onClearAllFilters: c
}) => {
  const { t: d } = g(), f = S(
    () => p.filter(({ id: x }) => !l.includes(x)),
    [p, l]
  ), e = !!(o && t >= o), i = !!n, h = i ? n : e ? d("filtersGroup.maxActiveFiltersReached") : "";
  return /* @__PURE__ */ m(b, { children: [
    /* @__PURE__ */ r(j, { children: s }),
    /* @__PURE__ */ m(w, { children: [
      /* @__PURE__ */ r(
        W,
        {
          hiddenFilters: f,
          disabled: i || e,
          tooltipText: h,
          addVisibleFilter: a
        }
      ),
      o && /* @__PURE__ */ r(
        B,
        {
          showArrow: !0,
          ignoreBoundary: !0,
          content: d("filtersGroup.activeFiltersCount", {
            count: t,
            max: o
          }),
          children: /* @__PURE__ */ m(
            y,
            {
              variant: "bodySmall",
              fontWeight: "400",
              margin: "0",
              padding: "0",
              color: e ? "negativeMedium" : "neutralSubdued",
              children: [
                t,
                "/",
                o
              ]
            }
          )
        }
      ),
      u && !i && /* @__PURE__ */ r(T, { onClearAllFilters: c })
    ] })
  ] });
};
E.Filter = G;
export {
  E as FiltersGroup
};
//# sourceMappingURL=filters-group.js.map
