import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { useState as w, useMemo as y } from "react";
import { Search as V, RecentlyViewed as $ } from "@carbon/icons-react";
import { Input as b } from "../../../input/next/input.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { SuggestionsInputList as z } from "../../components/suggestions-input-list.js";
import { useSuggestionsInput as j } from "../../hooks/use-suggestions-input.js";
import { normalizeValue as E } from "../../suggestions-input.utils.js";
import { Text as F } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as L } from "../../../utils/i18n/utils.js";
import { useCss as M } from "../../../utils/hooks/use-css.js";
import { includesStringNormalized as R } from "../../../utils/strings/text.utils.js";
import { StyledWrapper as X, inputOverrides as _ } from "./flat-suggestions-input.styles.js";
const ne = ({
  dataTestId: a = "flat-suggestions-input",
  value: c,
  suggestions: o,
  width: u,
  type: g = "text",
  autoFocus: h = !1,
  onChange: d
}) => {
  const [t, s] = w(c), { t: l } = L(), { theme: n } = M(), i = (e = "") => {
    d(e), s(e);
  }, f = (e) => {
    const { value: I } = e.target, v = E(I, g);
    s(v);
  }, { listRef: S, highlightedIndex: x, onKeyDown: C } = j({
    value: t,
    items: o,
    handleChange: i
  }), p = y(
    () => o.filter((e) => R(e, t)),
    [o, t]
  );
  return /* @__PURE__ */ m(X, { $width: u, children: [
    /* @__PURE__ */ r(
      b,
      {
        "data-testid": `${a}__input`,
        clearable: !0,
        autoFocus: h,
        startEnhancer: /* @__PURE__ */ r(V, {}),
        placeholder: l("general.search"),
        value: t,
        kind: "white",
        overrides: _,
        onClear: () => i(""),
        onChange: f,
        onKeyDown: C
      }
    ),
    p.length > 0 && /* @__PURE__ */ r(
      z,
      {
        dataTestId: a,
        topEnhancer: /* @__PURE__ */ m(
          F,
          {
            variant: "bodySmall",
            color: "neutralSubdued",
            margin: `${n.spacing.spacingXs} ${n.spacing.spacingMd}`,
            $style: {
              display: "flex",
              alignItems: "center",
              gap: n.spacing.spacingXs,
              whiteSpace: "nowrap"
            },
            children: [
              /* @__PURE__ */ r($, {}),
              l("suggestionsInput.latestSearches")
            ]
          }
        ),
        listRef: S,
        items: p,
        highlightedIndex: x,
        handleChange: i
      }
    )
  ] });
};
export {
  ne as FlatSuggestionsInput
};
//# sourceMappingURL=flat-suggestions-input.js.map
