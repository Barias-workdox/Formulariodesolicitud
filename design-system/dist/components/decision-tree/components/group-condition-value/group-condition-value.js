import { jsx as i, Fragment as V } from "react/jsx-runtime";
import { useState as k, useRef as G, useCallback as v, useEffect as z } from "react";
import { debounce as S } from "lodash";
import { Datepicker as b } from "../../../datepicker/datepicker.js";
import { getGroupConditionDataType as w } from "../../utils/decision-tree.utils.js";
import { Input as C } from "../../../input/input.js";
import { SelectWithPagination as O } from "../../../select-with-pagination/select-with-pagination.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as F } from "../../../utils/i18n/utils.js";
import { selectOverrides as j } from "../group-conditions/group-conditions.styles.js";
import { dateInputOverrides as P, inputOverrides as x } from "./group-condition-value.styles.js";
const T = ({
  dataTestId: n,
  disabled: c,
  condition: { objectToEval: a, dataType: t, field: D, value: r },
  valueOptions: l,
  isLoadingData: L,
  onLoadMore: f,
  onUpdateCondition: s
}) => {
  const { t: p } = F(), [g, d] = k(
    r !== void 0 && typeof r == "string" ? r : ""
  ), m = w({
    objectToEval: a,
    field: D,
    dataType: t
  }), o = G(), h = L(m), $ = v(() => {
    f(m);
  }, [m, f]);
  z(() => {
    r === void 0 && d("");
  }, [r]), z(() => (o.current = S(async (e) => {
    s({ value: e });
  }, 500), () => {
    var e;
    (e = o == null ? void 0 : o.current) == null || e.cancel();
  }), [s]);
  const u = v((e, M) => {
    M === "string" && typeof e == "string" && d(e), o.current && o.current(e);
  }, []);
  switch (t) {
    case "string":
      return a === "User" ? /* @__PURE__ */ i(
        O,
        {
          size: "compact",
          "data-testid": `${n}--${t}-select`,
          overrides: j,
          disabled: c,
          placeholder: p("decisionTree.selectObject"),
          options: l,
          value: r ? [{ id: r }] : [],
          isLoadingMore: h,
          onChange: ([e]) => s({ value: e.id }),
          onLoadMore: $
        }
      ) : /* @__PURE__ */ i(
        C,
        {
          size: "compact",
          "data-testid": `${n}--${t}-input`,
          overrides: x,
          disabled: c,
          placeholder: p("decisionTree.selectObject"),
          value: g,
          onChange: ({ target: { value: e } }) => u(e, "string")
        }
      );
    case "numeric":
      return /* @__PURE__ */ i(
        C,
        {
          size: "compact",
          "data-testid": `${n}--${t}-input`,
          overrides: x,
          disabled: c,
          placeholder: p("decisionTree.selectObject"),
          value: g,
          onChange: ({ target: { value: e } }) => u(e, "string")
        }
      );
    case "date":
      return /* @__PURE__ */ i(
        b,
        {
          size: "compact",
          "data-testid": `${n}--${t}-input`,
          overrides: P,
          disabled: c,
          zIndex: 50,
          value: r !== void 0 ? r : null,
          onChange: ({ date: e }) => u(e, "date")
        }
      );
    case "boolean":
    case "list":
      return /* @__PURE__ */ i(
        O,
        {
          size: "compact",
          "data-testid": `${n}--${t}-select`,
          overrides: j,
          disabled: c,
          placeholder: p("decisionTree.selectObject"),
          options: l,
          value: r ? [{ id: r }] : [],
          isLoadingMore: h,
          onChange: ([e]) => s({ value: e.id }),
          onLoadMore: $
        }
      );
    default:
      return /* @__PURE__ */ i(V, {});
  }
};
export {
  T as GroupConditionValue
};
//# sourceMappingURL=group-condition-value.js.map
