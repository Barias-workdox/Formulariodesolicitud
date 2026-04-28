import { jsx as o } from "react/jsx-runtime";
import { useState as S, useEffect as b } from "react";
import { Search as H } from "@carbon/icons-react";
import { Popover as K } from "baseui/popover";
import { noop as i } from "../../utils/noop.js";
import { Input as L } from "../input/next/input.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as N } from "../utils/i18n/utils.js";
import { SuggestionsInputList as P } from "./components/suggestions-input-list.js";
import { useSuggestionsInput as W } from "./hooks/use-suggestions-input.js";
import { defaultMapItemToString as $, defaultMapItemToNode as q } from "./suggestions-input.utils.js";
function ct({
  "data-testid": s = "design-system-suggestion-input",
  items: p,
  value: u,
  topEnhancer: R,
  placeholder: v,
  delayRenderContent: a = 0,
  onChange: c = i,
  onSelect: E = i,
  onIsOpenChange: l = i,
  mapItemToNode: F = q,
  mapItemToString: m = $,
  ...M
}) {
  var x, C;
  const { t: O } = N(), [e, r] = S(!1), [T, f] = S(!1), w = () => {
    r(!0);
  }, V = (t) => {
    c(t.target.value);
  }, n = (t = "") => {
    c(t), E(t), r(!1);
  }, j = () => {
    n("");
  }, { innerRef: d, listRef: k, inputRef: h, highlightedIndex: y, updateHighlightedIndex: g, onKeyDown: B } = W({
    value: u,
    isOpen: e,
    items: p,
    mapItemToString: m,
    handleChange: n
  }), D = ((x = d.current) == null ? void 0 : x.anchorRef) ?? {
    current: null
  }, I = () => {
    var t;
    (t = h.current) == null || t.blur(), r(!1);
  };
  return b(() => {
    e || (g(-1), f(!1)), l(e);
  }, [e, l, g]), b(() => {
    if (e) {
      const t = setTimeout(() => {
        f(!0);
      }, a);
      return () => clearTimeout(t);
    }
  }, [e, a]), /* @__PURE__ */ o(
    K,
    {
      innerRef: d,
      isOpen: T,
      autoFocus: !1,
      popoverMargin: 0,
      onEsc: I,
      onClickOutside: I,
      content: /* @__PURE__ */ o(
        P,
        {
          dataTestId: s,
          listRef: k,
          width: `${((C = D.current) == null ? void 0 : C.clientWidth) || 0}px`,
          items: p,
          topEnhancer: R,
          highlightedIndex: y,
          mapItemToNode: F,
          mapItemToString: m,
          handleChange: n
        }
      ),
      children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
        L,
        {
          clearable: !0,
          "data-testid": s,
          inputRef: h,
          startEnhancer: /* @__PURE__ */ o(H, {}),
          placeholder: v ?? O("general.search"),
          value: u,
          onChange: V,
          onFocus: w,
          onKeyDown: B,
          onClear: j,
          ...M
        }
      ) })
    }
  );
}
export {
  ct as SuggestionInput
};
//# sourceMappingURL=suggestion-input.js.map
