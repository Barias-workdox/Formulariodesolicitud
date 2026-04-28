import { jsxs as r, Fragment as c, jsx as t } from "react/jsx-runtime";
import { TrashCan as s } from "@carbon/icons-react";
import { Button as m } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
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
import { SectionedModalFooter as f } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { ALL_DELETE_MODAL_STATUSES as h } from "../../delete-modal.constants.js";
import { DeleteModalBody as u } from "../../delete-modal.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as M } from "../../../utils/i18n/utils.js";
import { DeleteModalDisclaimerText as _ } from "../delete-modal-disclaimer-text.js";
const Q = ({
  "data-testid": i,
  confirmText: n,
  disclaimerText: e,
  onConfirm: p,
  onClose: a,
  deleteItemsCount: d,
  isLoading: l
}) => {
  const { t: o } = M();
  return /* @__PURE__ */ r(c, { children: [
    /* @__PURE__ */ r(u, { children: [
      n,
      e === void 0 ? /* @__PURE__ */ t(_, { text: o("deleteModal.disclaimer") }) : e
    ] }),
    /* @__PURE__ */ r(f, { children: [
      /* @__PURE__ */ t(
        m,
        {
          "data-testid": `${i}__cancel`,
          type: "button",
          kind: "tertiary",
          onClick: () => a(h.confirm),
          children: o("general.cancel")
        }
      ),
      /* @__PURE__ */ t(
        m,
        {
          "data-testid": `${i}__confirm`,
          type: "button",
          kind: "dark-negative",
          onClick: p,
          isLoading: l,
          startEnhancer: /* @__PURE__ */ t(s, {}),
          children: o("deleteModal.actionButton", { count: d })
        }
      )
    ] })
  ] });
};
export {
  Q as ConfirmDeleteModalStep
};
//# sourceMappingURL=confirm-delete-modal-step.js.map
