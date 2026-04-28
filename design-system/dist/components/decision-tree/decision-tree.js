import { jsx as e } from "react/jsx-runtime";
import { RuleGroupsContainer as d } from "./containers/rule-groups.container.js";
import { DecisionTreeProvider as f } from "./providers/decision-tree.provider.js";
const l = ({
  dataTestId: r = "decision-tree",
  isDistributionModeEnabled: o,
  rules: i,
  users: t,
  profiles: n,
  groups: s,
  workflowTemplates: m,
  dynamicAttributes: c,
  onChange: p
}) => /* @__PURE__ */ e(
  f,
  {
    baseTestId: r,
    isDistributionModeEnabled: o,
    rules: i,
    users: t,
    profiles: n,
    groups: s,
    workflowTemplates: m,
    dynamicAttributes: c,
    onChange: p,
    children: /* @__PURE__ */ e(d, {})
  }
);
export {
  l as DecisionTree
};
//# sourceMappingURL=decision-tree.js.map
