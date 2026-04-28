import { jsx as p } from "react/jsx-runtime";
import "react";
import "baseui/typography";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/utilities.js";
import "@carbon/icons-react";
import "baseui/input";
import "baseui/popover";
import "baseui";
import "../../../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../../avatar/avatar.styles.js";
import "baseui/modal";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../../text/text.js";
import "../../../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../../background-icon/background-icon.styles.js";
import "../../../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "./styled-components/styled-actions-container.js";
import "./styled-components/styled-content-with-actions-container.js";
import "../../../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import { GenericErrorContent as m } from "./components/generic-error-content/generic-error-content.js";
import { DefaultContent as t } from "./components/default-content/default-content.js";
import { ProcessFailedErrorContent as n } from "./components/process-failed-error-content/process-failed-error-content.js";
import { LegalWhisperGenericErrorContent as a } from "./components/legal-whisper-generic-error-content/legal-whisper-generic-error-content.js";
import { BrainCompanionChatShortcutContent as c } from "./components/brain-companion-chat-shortcut-content/brain-companion-chat-shortcut-content.js";
import { LegalWhisperChatShortcutContent as s } from "./components/legal-whisper-chat-shortcut-content/legal-whisper-chat-shortcut-content.js";
const l = {
  legalWhisperGreetings: "webdoxAI.webdoxAIButton.legalWhisperGreetings.detail",
  loading: "webdoxAI.webdoxAIButton.documentInProcessInformation.detail",
  suiteAIGreetings: "webdoxAI.webdoxAIButton.suiteAIGreetings.detail",
  encryptedDocumentError: "webdoxAI.webdoxAIButton.encryptedDocumentError.detail"
}, d = {
  active: c,
  genericError: m,
  legalWhisperActive: s,
  legalWhisperGreetings: t,
  loading: t,
  processFailedError: n,
  suiteAIGreetings: t,
  encryptedDocumentError: t,
  legalWhisperGenericError: a
}, At = (r) => {
  const { popoverVariant: o } = r, i = d[o], e = l[o];
  return /* @__PURE__ */ p(i, { ...r, children: e });
};
export {
  At as InformationPopoverContent
};
//# sourceMappingURL=information-popover-content.js.map
