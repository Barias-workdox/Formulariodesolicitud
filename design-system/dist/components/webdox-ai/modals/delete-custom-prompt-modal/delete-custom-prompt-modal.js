import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { TrashCan as c } from "@carbon/icons-react";
import { Button as d } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import { Modal as s } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as u, SectionedModalBody as h, SectionedModalFooter as b } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as m } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../utils/i18n/utils.js";
import { noop as a } from "../../../../utils/noop.js";
const J = ({
  isOpen: l,
  onClose: i = a,
  onSubmit: n = a,
  isLoading: e = !1,
  zIndex: p
}) => {
  const { t: o } = f();
  return /* @__PURE__ */ r(
    s,
    {
      onClose: i,
      isOpen: l,
      zIndex: p,
      children: [
        /* @__PURE__ */ t(u, { children: o("webdoxAI.chat.customPrompts.deleteModal.title") }),
        /* @__PURE__ */ r(h, { children: [
          /* @__PURE__ */ t(
            m,
            {
              variant: "body",
              color: "neutralSubdued",
              fontWeight: "500",
              children: o("webdoxAI.chat.customPrompts.deleteModal.subtitle")
            }
          ),
          /* @__PURE__ */ t(
            m,
            {
              variant: "body",
              color: "neutralSubdued",
              children: o("webdoxAI.chat.customPrompts.deleteModal.description")
            }
          )
        ] }),
        /* @__PURE__ */ r(b, { children: [
          /* @__PURE__ */ t(
            d,
            {
              "data-testid": "modal__cancel-button",
              size: "44px",
              kind: "tertiary",
              onClick: i,
              disabled: e,
              children: o("general.cancel")
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              "data-testid": "modal__delete-button",
              startEnhancer: /* @__PURE__ */ t(c, {}),
              size: "44px",
              kind: "dark-negative",
              onClick: n,
              disabled: e,
              isLoading: e,
              children: o("webdoxAI.chat.customPrompts.deleteModal.submit")
            }
          )
        ] })
      ]
    }
  );
};
export {
  J as DeleteCustomPromptModal
};
//# sourceMappingURL=delete-custom-prompt-modal.js.map
