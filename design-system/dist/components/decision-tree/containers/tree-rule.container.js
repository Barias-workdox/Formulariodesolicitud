import { jsx as t, Fragment as m, jsxs as g } from "react/jsx-runtime";
import { useContext as n } from "react";
import { themedStyled as T } from "../../../themes/utilities.js";
import { ConditionalButtons as I } from "../components/conditional-buttons/conditional-buttons.js";
import "@carbon/icons-react";
import "baseui/select";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "baseui";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../select/select.overrides.js";
import "baseui/menu";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../components/group-conditions/group-conditions.styles.js";
import "../../text/text.js";
import "../components/group-resolutions/group-resolutions.styles.js";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tag";
import "../components/group-rule-header-actions/group-rule-header-actions.styles.js";
import "../contexts/condition-group.context.js";
import "../components/group-action-notification.js";
import "../contexts/action-group.context.js";
import { RuleGroupContext as $ } from "../contexts/rule-group.context.js";
import "../utils/decision-tree.utils.js";
import { useDecisionTreeContext as G } from "../hooks/use-decision-tree-context.hook.js";
import "../components/group-condition-field-label/group-condition-field-label.styles.js";
import "lodash";
import "../../datepicker/datepicker.js";
import "../../input/input.js";
import "../components/group-condition-value/group-condition-value.styles.js";
import { TreeRuleContext as h } from "../contexts/tree-rule.context.js";
import "baseui/accordion";
import "../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../decision-tree.styles.js";
import { TreeRule as y } from "../components/tree-rule.js";
const _ = T("div", () => ({
  display: "flex",
  justifyContent: "center"
})), ho = () => {
  const { baseTestId: r } = G(), { ruleGroup: d, ruleGroupIndex: i } = n($), {
    treeRule: e,
    treeRuleId: s,
    treeRuleIndex: o,
    onAddCondition: u,
    onDeleteCondition: l,
    onDeleteGroupRule: a,
    onUpdateCondition: c,
    onUpdateConditionLogicalConnector: C,
    onUpdateLogicConnector: f
  } = n(h), { treeRules: x = [], logicConnector: p } = d ?? {}, R = o !== x.length - 1;
  return e ? /* @__PURE__ */ g(m, { children: [
    /* @__PURE__ */ t(
      y,
      {
        dataTestId: `${r}__${i}-group-rules-${o}`,
        data: e,
        isFirstGroup: o === 0,
        onAddCondition: u,
        onUpdateCondition: c,
        onDeleteCondition: l,
        onUpdateConditionLogicalConnector: C,
        onDeleteGroupRule: a
      }
    ),
    R && p && s && /* @__PURE__ */ t(_, { children: /* @__PURE__ */ t(
      I,
      {
        dataTestId: `${r}__${i}-group-buttons-${o}`,
        logicConnector: p,
        onUpdateLogicConnector: f
      }
    ) })
  ] }) : /* @__PURE__ */ t(m, {});
};
export {
  ho as TreeRuleContainer
};
//# sourceMappingURL=tree-rule.container.js.map
