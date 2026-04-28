import { jsx as b, Fragment as B } from "react/jsx-runtime";
import { useContext as e, useCallback as r } from "react";
import { GroupConditions as H } from "../components/group-conditions/group-conditions.js";
import { ConditionGroupContext as J } from "../contexts/condition-group.context.js";
import { RuleGroupContext as K } from "../contexts/rule-group.context.js";
import { TreeRuleContext as N } from "../contexts/tree-rule.context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useFieldOptions as P } from "../hooks/use-condition-field-options.hook.js";
import { useObjectToEvalOptions as Q } from "../hooks/use-condition-objet-to-eval-options.hook.js";
import { useOperatorOptions as W } from "../hooks/use-condition-operator-options.hook.js";
import { useValueOptions as X } from "../hooks/use-condition-value-options.hook.js";
import { useDecisionTreeContext as Y } from "../hooks/use-decision-tree-context.hook.js";
import { getOptionsConfig as s } from "../utils/decision-tree.utils.js";
const Mo = () => {
  const { baseTestId: C, dynamicAttributes: L, groups: M, profiles: x } = Y(), { ruleGroupIndex: p } = e(K), { treeRuleIndex: T, onUpdateCondition: d, onDeleteCondition: a } = e(N), { conditionGroup: t, conditionGroupIndex: u } = e(J), { id: i, objectToEval: n, field: c, operator: A, dataType: m = "string" } = t || {}, G = p === 0, I = !!n, v = !!c, D = G && u === 0, E = A === void 0, j = `${C}__${p}-group-rules-${T}--conditions-${u}`, {
    options: l,
    isLoadingMore: f,
    onLoadMore: y
  } = s(L), {
    options: F,
    isLoadingMore: O,
    onLoadMore: $
  } = s(M), {
    options: h,
    isLoadingMore: g,
    onLoadMore: R
  } = s(x), U = (o) => {
    o === "dynamicAttributes" && y(), o === "groups" && $(), o === "profiles" && R();
  }, V = r(
    (o) => o === "dynamicAttributes" ? f : o === "groups" ? O : o === "profiles" ? g : !1,
    [f, O, g]
  ), _ = Q(), k = P({
    objectToEval: n,
    dynamicAttributes: l
  }), S = W({ dataType: m }), q = X({
    objectToEval: n,
    field: c,
    dataType: m,
    groups: F,
    profiles: h,
    dynamicAttributes: l
  }), w = r(
    (o) => t && i && d(i, { ...t, ...o }),
    [i, t, d]
  ), z = r(
    () => t && i && a(i),
    [i, t, a]
  );
  return t ? /* @__PURE__ */ b(
    H,
    {
      dataTestId: j,
      objectToEvalOptions: _,
      fieldOptions: k,
      operatorOptions: S,
      valueOptions: q,
      condition: t,
      isDeleteDisabled: D,
      isValueFieldEnabled: E,
      areValueFieldsEnabled: v,
      isObjectToEvalSelected: I,
      onDeleteCondition: z,
      onUpdateCondition: w,
      isLoadingData: V,
      onLoadMore: U
    }
  ) : /* @__PURE__ */ b(B, {});
};
export {
  Mo as GroupConditionsContainer
};
//# sourceMappingURL=group-conditions.container.js.map
