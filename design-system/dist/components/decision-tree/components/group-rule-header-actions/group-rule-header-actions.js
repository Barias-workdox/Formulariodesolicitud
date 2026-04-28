import { jsxs as p, jsx as t } from "react/jsx-runtime";
import { CheckmarkOutline as a, WarningAlt as d, TrashCan as l, AddAlt as c } from "@carbon/icons-react";
import { Button as s } from "../../../button/button.js";
import { IconButton as u } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Tag as f } from "../../../tag/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../utils/i18n/utils.js";
import { StyledContainer as k } from "./group-rule-header-actions.styles.js";
const N = ({
  dataTestId: r,
  isGroupRuleValid: i,
  disabledAdd: e,
  onDelete: n,
  onAddGroup: m
}) => {
  const { t: o } = h();
  return /* @__PURE__ */ p(k, { children: [
    /* @__PURE__ */ t(
      f,
      {
        variant: "overlay",
        kind: i ? "positive" : "warning",
        icon: i ? /* @__PURE__ */ t(a, { "data-testid": `${r}--valid-icon` }) : /* @__PURE__ */ t(d, { "data-testid": `${r}--invalid-icon` }),
        children: o(i ? "decisionTree.groupRuleComplete" : "decisionTree.groupRuleIncomplete")
      }
    ),
    /* @__PURE__ */ t(
      u,
      {
        "data-testid": `${r}--delete-btn`,
        kind: "tertiary",
        size: "32px",
        onClick: n,
        "aria-label": "DeleteGroupRuleButton",
        children: /* @__PURE__ */ t(l, {})
      }
    ),
    /* @__PURE__ */ t(
      s,
      {
        "data-testid": `${r}--add-group-button`,
        kind: "tertiary",
        size: "32px",
        disabled: e,
        startEnhancer: /* @__PURE__ */ t(c, {}),
        onClick: m,
        children: o("decisionTree.addGroup")
      }
    )
  ] });
};
export {
  N as GroupRuleHeaderActions
};
//# sourceMappingURL=group-rule-header-actions.js.map
