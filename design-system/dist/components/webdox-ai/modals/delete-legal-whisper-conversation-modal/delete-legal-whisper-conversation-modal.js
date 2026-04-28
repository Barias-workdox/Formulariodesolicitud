import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { TrashCan as s } from "@carbon/icons-react";
import { Button as n } from "../../../button/next/button.js";
import { Modal as c } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as h, SectionedModalBody as f, SectionedModalFooter as u } from "../../../modal/sectioned-modal.js";
import { Text as x } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as b } from "../../../utils/i18n/utils.js";
import { DSTrans as M } from "../../../utils/i18n/translation-component.js";
import { noop as l } from "../../../../utils/noop.js";
const q = ({
  conversationTitle: d,
  isLoading: r = !1,
  isOpen: a,
  onClose: t = l,
  onSubmit: p = l,
  zIndex: m
}) => {
  const { t: o } = b();
  return /* @__PURE__ */ i(
    c,
    {
      onClose: t,
      isOpen: a,
      zIndex: m,
      children: [
        /* @__PURE__ */ e(h, { children: o("webdoxAI.legalWhisperSettings.deleteConversationModal.title") }),
        /* @__PURE__ */ e(f, { children: /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(
          x,
          {
            variant: "body",
            color: "neutralSubdued",
            children: o("webdoxAI.legalWhisperSettings.deleteConversationModal.description", {
              conversationTitle: d
            })
          }
        ) }) }),
        /* @__PURE__ */ i(u, { children: [
          /* @__PURE__ */ e(
            n,
            {
              size: "44px",
              kind: "neutral",
              appearance: "outlined",
              onClick: t,
              disabled: r,
              children: o("general.cancel")
            }
          ),
          /* @__PURE__ */ e(
            n,
            {
              startEnhancer: s,
              size: "44px",
              kind: "negative",
              onClick: p,
              disabled: r,
              isLoading: r,
              children: o("webdoxAI.legalWhisperSettings.deleteConversationModal.submit")
            }
          )
        ] })
      ]
    }
  );
};
export {
  q as DeleteLegalWhisperConversationModal
};
//# sourceMappingURL=delete-legal-whisper-conversation-modal.js.map
