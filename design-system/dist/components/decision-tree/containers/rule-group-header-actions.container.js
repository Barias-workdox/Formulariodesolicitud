import { jsxs as f, Fragment as R, jsx as i } from "react/jsx-runtime";
import { useState as m, useContext as x, useEffect as D } from "react";
import "baseui/button";
import "baseui";
import "baseui/tooltip";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
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
import "../../text/text.js";
import "../components/group-resolutions/group-resolutions.styles.js";
import { GroupRuleHeaderActions as I } from "../components/group-rule-header-actions/group-rule-header-actions.js";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "../contexts/condition-group.context.js";
import "../components/group-action-notification.js";
import "../contexts/action-group.context.js";
import { RuleGroupContext as h } from "../contexts/rule-group.context.js";
import { groupRuleObjectSchema as A } from "../utils/decision-tree.utils.js";
import { useDecisionTreeContext as C } from "../hooks/use-decision-tree-context.hook.js";
import "../components/group-condition-field-label/group-condition-field-label.styles.js";
import "lodash";
import "../../datepicker/datepicker.js";
import "../../input/input.js";
import "../components/group-condition-value/group-condition-value.styles.js";
import "../contexts/tree-rule.context.js";
import "baseui/accordion";
import "../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../decision-tree.styles.js";
import "./tree-rule.container.js";
import { ModalDeleteGroupRule as b } from "../components/modal-delete-group-rule/modal-delete-group-rule.js";
const bo = () => {
  const [u, t] = m(!1), [l, r] = m(!1), { baseTestId: s } = C(), {
    ruleGroup: o,
    ruleGroupId: e,
    ruleGroupIndex: n,
    onAddRuleGroup: d,
    onDeleteRuleGroup: a
  } = x(h), { treeRules: c = [] } = o ?? {}, G = c.length >= 2, p = `${s}__${n}-header`;
  return D(() => {
    A.validate(o).then(() => t(!0)).catch(() => t(!1));
  }, [o]), /* @__PURE__ */ f(R, { children: [
    /* @__PURE__ */ i(
      I,
      {
        dataTestId: p,
        isGroupRuleValid: u,
        disabledAdd: G,
        onDelete: () => r(!0),
        onAddGroup: d
      }
    ),
    /* @__PURE__ */ i(
      b,
      {
        dataTestId: `${p}__modal-delete-group-rule`,
        isOpen: l,
        onClose: () => r(!1),
        onDelete: () => e && a(e)
      }
    )
  ] });
};
export {
  bo as RuleGroupHeaderActionsContainer
};
//# sourceMappingURL=rule-group-header-actions.container.js.map
