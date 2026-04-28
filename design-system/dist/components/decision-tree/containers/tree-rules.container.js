import { jsxs as n, Fragment as u, jsx as r } from "react/jsx-runtime";
import { useContext as s } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../utils/i18n/utils.js";
import "baseui/button";
import "baseui";
import "baseui/tooltip";
import "../components/conditional-buttons/conditional-buttons.styles.js";
import "@carbon/icons-react";
import "baseui/select";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import "../../select/select.overrides.js";
import "baseui/menu";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../components/group-conditions/group-conditions.styles.js";
import { GroupLayout as d } from "../components/group-layout/group-layout.js";
import { GroupResolutions as l } from "../components/group-resolutions/group-resolutions.js";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tag";
import "../../text/text.js";
import "../components/group-rule-header-actions/group-rule-header-actions.styles.js";
import "../contexts/condition-group.context.js";
import { GroupActionsContainer as a } from "./group-actions.container.js";
import "../components/group-condition-field-label/group-condition-field-label.styles.js";
import "lodash";
import "../../datepicker/datepicker.js";
import "../utils/decision-tree.utils.js";
import "../../input/input.js";
import "../components/group-condition-value/group-condition-value.styles.js";
import { RuleGroupContext as f } from "../contexts/rule-group.context.js";
import "../contexts/tree-rule.context.js";
import "../contexts/decision-tree.context.js";
import "baseui/accordion";
import "../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../decision-tree.styles.js";
import { ActionGroupContext as G } from "../contexts/action-group.context.js";
import { TreeRuleProvider as x } from "../providers/tree-rule.provider.js";
import { TreeRuleContainer as C } from "./tree-rule.container.js";
const To = () => {
  const { t: i } = c(), { ruleGroup: m } = s(f), { treeRules: p = [], actions: e = [] } = m ?? {};
  return /* @__PURE__ */ n(u, { children: [
    p.map((o, t) => /* @__PURE__ */ r(
      x,
      {
        treeRule: o,
        treeRuleIndex: t,
        children: /* @__PURE__ */ r(C, {})
      },
      o.id
    )),
    /* @__PURE__ */ r(l, {}),
    /* @__PURE__ */ r(
      d,
      {
        header: {
          title: i("decisionTree.actions"),
          subtitle: i("decisionTree.actionsSubtitle")
        },
        children: e.map((o, t) => /* @__PURE__ */ r(
          G.Provider,
          {
            value: {
              actionGroup: o,
              actionGroupId: o.id,
              actionGroupIndex: t
            },
            children: /* @__PURE__ */ r(a, {}, o.id)
          },
          o.id
        ))
      }
    )
  ] });
};
export {
  To as RuleGroupContainer
};
//# sourceMappingURL=tree-rules.container.js.map
