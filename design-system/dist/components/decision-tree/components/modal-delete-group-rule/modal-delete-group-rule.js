import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { Button as n } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import { Modal as p } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as l, SectionedModalBody as c, SectionedModalFooter as a } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { Text as u } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../utils/i18n/utils.js";
const A = ({
  dataTestId: r,
  isOpen: m,
  onClose: i,
  onDelete: d
}) => {
  const { t: o } = h();
  return /* @__PURE__ */ e(
    p,
    {
      isOpen: m,
      onClose: i,
      zIndex: 10,
      children: [
        /* @__PURE__ */ t(l, { children: o("decisionTree.ruleDeleteModal.title") }),
        /* @__PURE__ */ t(c, { children: /* @__PURE__ */ t(
          u,
          {
            "data-testid": `${r}__body`,
            variant: "body",
            margin: 0,
            whiteSpace: "pre-line",
            children: o("decisionTree.ruleDeleteModal.body")
          }
        ) }),
        /* @__PURE__ */ e(a, { children: [
          /* @__PURE__ */ t(
            n,
            {
              "data-testid": `${r}--continue-btn`,
              kind: "tertiary",
              onClick: i,
              children: o("general.cancel")
            }
          ),
          /* @__PURE__ */ t(
            n,
            {
              "data-testid": `${r}--continue-btn`,
              onClick: () => {
                d(), i();
              },
              children: o("general.continue")
            }
          )
        ] })
      ]
    }
  );
};
export {
  A as ModalDeleteGroupRule
};
//# sourceMappingURL=modal-delete-group-rule.js.map
