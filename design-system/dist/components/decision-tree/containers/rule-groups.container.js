import { jsx as o } from "react/jsx-runtime";
import { CollapsibleBox as p } from "../../collapsible-box/collapsible-box.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../utils/i18n/utils.js";
import { useCss as s } from "../../utils/hooks/use-css.js";
import { StyledContainer as l, collapsibleBoxOverrides as a } from "../decision-tree.styles.js";
import { useDecisionTreeContext as u } from "../hooks/use-decision-tree-context.hook.js";
import { RuleGroupProvider as c } from "../providers/rule-group.provider.js";
import { RuleGroupHeaderActionsContainer as d } from "./rule-group-header-actions.container.js";
import { RuleGroupContainer as f } from "./tree-rules.container.js";
const P = () => {
  const { rules: t } = u(), { t: e } = n(), { theme: m } = s();
  return /* @__PURE__ */ o(l, { children: t.map((i, r) => /* @__PURE__ */ o(
    c,
    {
      rule: i,
      ruleIndex: r,
      children: /* @__PURE__ */ o(
        p,
        {
          initialState: { isExpanded: r === 0 },
          title: e("decisionTree.rule", { number: r + 1 }),
          overrides: a(m),
          options: /* @__PURE__ */ o(d, {}),
          children: /* @__PURE__ */ o(f, {})
        }
      )
    },
    i.id
  )) });
};
export {
  P as RuleGroupsContainer
};
//# sourceMappingURL=rule-groups.container.js.map
