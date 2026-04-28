import { jsxs as e, Fragment as i, jsx as r } from "react/jsx-runtime";
import { Text as c } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as s } from "../../../utils/i18n/utils.js";
import { useThousandSeparatorLocale as u } from "../../../../hooks/use-thousand-separator-locale.js";
import { StyledToolbar as h, StyledFiltersWrapper as S, StyledMobileFilterWrapper as y, StyledOptionsWrapper as b, StyledItemsCounterWrapper as f } from "./page-header-toolbar.styles.js";
const P = ({
  "data-testid": n,
  itemsText: o,
  shouldRenderMobileFilters: d = !1,
  itemsCounter: t,
  filters: a = /* @__PURE__ */ r(i, {}),
  actions: l = /* @__PURE__ */ r(i, {})
}) => {
  const { t: p } = s(), m = u(t ?? 0);
  return /* @__PURE__ */ e(h, { children: [
    /* @__PURE__ */ e(i, { children: [
      /* @__PURE__ */ r(S, { children: a }),
      d && /* @__PURE__ */ r(y, { children: a })
    ] }),
    /* @__PURE__ */ e(b, { children: [
      (t !== void 0 || o !== void 0) && /* @__PURE__ */ r(f, { "data-testid": `${n}__counter-container`, children: /* @__PURE__ */ r(
        c,
        {
          variant: "bodySmall",
          color: "neutralSubdued",
          margin: 0,
          children: o !== void 0 ? o : p("general.items", {
            count: t,
            data: m
          })
        }
      ) }),
      l
    ] })
  ] });
};
export {
  P as PageHeaderToolbar
};
//# sourceMappingURL=page-header-toolbar.js.map
