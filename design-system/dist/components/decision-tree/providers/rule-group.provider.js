import { jsx as d } from "react/jsx-runtime";
import { useCallback as t } from "react";
import { RuleGroupContext as n } from "../contexts/rule-group.context.js";
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
import { useDecisionTreeContext as l } from "../hooks/use-decision-tree-context.hook.js";
const A = ({
  rule: e,
  ruleIndex: p,
  children: i
}) => {
  const { onChange: r } = l(), o = e.id, m = t(
    () => o ? r({ type: "ADD_TREE_RULE", payload: { ruleGroupId: o } }) : void 0,
    [o, r]
  ), u = t(
    () => o ? r({ type: "DELETE_RULE_GROUP", payload: { ruleGroupId: o } }) : void 0,
    [o, r]
  );
  return /* @__PURE__ */ d(
    n.Provider,
    {
      value: {
        ruleGroup: e,
        ruleGroupId: o,
        ruleGroupIndex: p,
        onAddRuleGroup: m,
        onDeleteRuleGroup: u
      },
      children: i
    },
    e.id
  );
};
export {
  A as RuleGroupProvider
};
//# sourceMappingURL=rule-group.provider.js.map
