import { jsx as D } from "react/jsx-runtime";
import { useContext as s, useCallback as i } from "react";
import { RuleGroupContext as E } from "../contexts/rule-group.context.js";
import { TreeRuleContext as O } from "../contexts/tree-rule.context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "@carbon/icons-react";
import "../utils/decision-tree.utils.js";
import { useDecisionTreeContext as T } from "../hooks/use-decision-tree-context.hook.js";
const k = ({
  children: p,
  treeRule: r,
  treeRuleIndex: l
}) => {
  const { onChange: t } = T(), { ruleGroupId: e } = s(E), { id: d } = r, a = i(
    (o) => e ? t({
      type: "ADD_CONDITION",
      payload: { ruleGroupId: e, treeRuleId: o }
    }) : void 0,
    [t, e]
  ), C = i(
    (o, n, R) => e ? t({
      type: "UPDATE_CONDITION",
      payload: { ruleGroupId: e, treeRuleId: o, conditionId: n, body: R }
    }) : void 0,
    [t, e]
  ), u = i(
    (o, n) => e ? t({
      type: "DELETE_CONDITION",
      payload: { ruleGroupId: e, treeRuleId: o, conditionId: n }
    }) : void 0,
    [t, e]
  ), c = i(
    (o) => e ? t({
      type: "DELETE_TREE_RULE",
      payload: { ruleGroupId: e, treeRuleId: o }
    }) : void 0,
    [t, e]
  ), m = i(
    (o, n) => e ? t({
      type: "UPDATE_CONDITION_LOGICAL_CONNECTOR",
      payload: { ruleGroupId: e, treeRuleId: o, body: { logicConnector: n } }
    }) : void 0,
    [t, e]
  ), I = i(
    (o, n) => e ? t({
      type: "UPDATE_RULE_GROUP_LOGICAL_CONNECTOR",
      payload: { ruleGroupId: e, treeRuleId: o, body: { logicConnector: n } }
    }) : void 0,
    [t, e]
  );
  return /* @__PURE__ */ D(
    O.Provider,
    {
      value: {
        treeRule: r,
        treeRuleId: r.id,
        treeRuleIndex: l,
        onAddCondition: () => a(d),
        onUpdateCondition: (o, n) => C(d, o, n),
        onDeleteCondition: (o) => u(d, o),
        onUpdateConditionLogicalConnector: (o) => m(d, o),
        onUpdateLogicConnector: (o) => I(d, o),
        onDeleteGroupRule: () => c(d)
      },
      children: p
    }
  );
};
export {
  k as TreeRuleProvider
};
//# sourceMappingURL=tree-rule.provider.js.map
