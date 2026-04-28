import { jsxs as V, jsx as e } from "react/jsx-runtime";
import { useContext as m, useCallback as $ } from "react";
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
import { GroupActions as E } from "../components/group-actions/group-actions.js";
import "../../text/text.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import "../components/group-resolutions/group-resolutions.styles.js";
import "@carbon/icons-react";
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
import "baseui/select";
import "../../select/select.overrides.js";
import "baseui/menu";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../components/group-condition-field-label/group-condition-field-label.styles.js";
import "lodash";
import "../../datepicker/datepicker.js";
import { getOptionsConfig as p, getDistributionModeVisibility as N } from "../utils/decision-tree.utils.js";
import "../../input/input.js";
import "../components/group-conditions/group-conditions.styles.js";
import "../components/group-condition-value/group-condition-value.styles.js";
import { RuleGroupContext as P } from "../contexts/rule-group.context.js";
import "../contexts/tree-rule.context.js";
import { useActionOptions as R } from "../hooks/use-action-options.hook.js";
import { useActionValues as q } from "../hooks/use-action-values.hook.js";
import { useDecisionTreeContext as z } from "../hooks/use-decision-tree-context.hook.js";
import { useDistributionModeOptions as B } from "../hooks/use-distribution-mode-options.hook.js";
import "baseui/accordion";
import "../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../decision-tree.styles.js";
import { ActionGroupContext as F } from "../contexts/action-group.context.js";
import "./tree-rule.container.js";
import { GroupActionNotification as H } from "../components/group-action-notification.js";
const So = () => {
  const { baseTestId: a, groups: d, users: c, workflowTemplates: u, isDistributionModeEnabled: l, onChange: s } = z(), { ruleGroupId: i, ruleGroupIndex: M } = m(P), { actionGroup: o, actionGroupId: r, actionGroupIndex: f } = m(F), { actionType: t, targetObject: g, distributionMode: L } = o ?? {}, T = t === void 0, n = l && N(g, t), b = $(
    (U) => i && r && s({
      type: "UPDATE_ACTION",
      payload: { ruleGroupId: i, actionId: r, body: U }
    }),
    [r, s, i]
  ), {
    options: w,
    isLoadingMore: I,
    onLoadMore: O
  } = p(c), {
    options: A,
    isLoadingMore: k,
    onLoadMore: x
  } = p(d), {
    options: C,
    isLoadingMore: G,
    onLoadMore: y
  } = p(u), D = B(), _ = R(), h = q({
    actionIdType: o == null ? void 0 : o.actionType,
    users: w,
    groups: A,
    workflowTemplates: C
  }), j = () => {
    t === "assign_taker" && (O(), x()), t === "start_workflow" && y();
  }, v = t === "assign_taker" ? I || k : G;
  return /* @__PURE__ */ V("div", { children: [
    o && /* @__PURE__ */ e(
      E,
      {
        dataTestId: `${a}__${M}-actions-${f}`,
        action: o,
        options: _,
        values: h,
        distributionsModeOptions: D,
        showDistributionMode: n,
        isActionValueDisabled: T,
        onLoadMore: j,
        isLoadingMore: v,
        onUpdateAction: b
      }
    ),
    n && /* @__PURE__ */ e(H, { distributionMode: L })
  ] });
};
export {
  So as GroupActionsContainer
};
//# sourceMappingURL=group-actions.container.js.map
