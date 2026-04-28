import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { AddAlt as u } from "@carbon/icons-react";
import { Button as C } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as f } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { ConditionGroupContext as h } from "../../contexts/condition-group.context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as G } from "../../../utils/i18n/utils.js";
import { ConditionalButtons as v } from "../conditional-buttons/conditional-buttons.js";
import "baseui/select";
import "../../../select/select.overrides.js";
import "baseui/menu";
import "../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../group-conditions/group-conditions.styles.js";
import "../../../text/text.js";
import "../group-resolutions/group-resolutions.styles.js";
import "baseui/tag";
import "../group-rule-header-actions/group-rule-header-actions.styles.js";
import "../group-action-notification.js";
import "../../contexts/action-group.context.js";
import "../../contexts/rule-group.context.js";
import "../../utils/decision-tree.utils.js";
import "../../contexts/decision-tree.context.js";
import { GroupConditionsContainer as x } from "../../containers/group-conditions.container.js";
import "baseui/accordion";
import "../../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../../decision-tree.styles.js";
import "../../contexts/tree-rule.context.js";
import "../../containers/tree-rule.container.js";
import { styles as y } from "./group-rules.styles.js";
const Co = ({
  dataTestId: r,
  conditions: i,
  disabled: n,
  logicConnector: e,
  onAddCondition: d,
  onUpdateConditionLogicalConnector: s
}) => {
  const { t: a } = G(), { containerStyles: c, actionContainerStyles: l } = f(y);
  return /* @__PURE__ */ p("div", { className: c, children: [
    i.map((t, m) => /* @__PURE__ */ o(
      h.Provider,
      {
        value: {
          conditionGroup: t,
          conditionGroupId: t.id,
          conditionGroupIndex: m
        },
        children: /* @__PURE__ */ p("div", { children: [
          /* @__PURE__ */ o(x, {}),
          m !== i.length - 1 && /* @__PURE__ */ o(
            v,
            {
              dataTestId: `${r}-buttons`,
              logicConnector: e,
              onUpdateLogicConnector: s
            }
          )
        ] }, t.id)
      },
      t.id
    )),
    /* @__PURE__ */ o("div", { className: l, children: /* @__PURE__ */ o(
      C,
      {
        "data-testid": `${r}--add-condition-btn`,
        kind: "secondary",
        size: "compact",
        disabled: n,
        startEnhancer: /* @__PURE__ */ o(u, {}),
        onClick: d,
        children: a("decisionTree.addCondition")
      }
    ) })
  ] });
};
export {
  Co as GroupRules
};
//# sourceMappingURL=group-rules.js.map
