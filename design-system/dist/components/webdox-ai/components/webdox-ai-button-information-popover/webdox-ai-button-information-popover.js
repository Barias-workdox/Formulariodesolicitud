import { jsx as c } from "react/jsx-runtime";
import { noop as f } from "../../../../utils/noop.js";
import { ChatShortcutInformationPopover as d } from "./components/chat-shortcut-information-popover/chat-shortcut-information-popover.js";
import { DocumentProcessingInformationPopover as v } from "./components/document-processing-information-popover/document-processing-information-popover.js";
import { EncryptedDocumentErrorInformationPopover as I } from "./components/encrypted-document-error-information-popover/encrypted-document-error-information-popover.js";
import { GenericErrorInformationPopover as P } from "./components/generic-error-information-popover/generic-error-information-popover.js";
import { LegalWhisperGreetingsInformationPopover as g } from "./components/legal-whisper-greetings-information-popover/legal-whisper-greetings-information-popover.js";
import { ProcessFailedErrorInformationPopover as u } from "./components/process-failed-error-information-popover/process-failed-error-information-popover.js";
import { SuiteAIGreetingsInformationPopover as l } from "./components/suite-ai-greetings-information-popover/suite-ai-greetings-information-popover.js";
const y = ({
  "data-testid": r,
  user: t,
  variant: e,
  children: i,
  overrides: n,
  isOpen: m,
  onClose: o,
  onOpen: p = f,
  ...a
}) => {
  const s = {
    active: d,
    loading: v,
    genericError: P,
    processFailedError: u,
    legalWhisperGreetings: g,
    suiteAIGreetings: l,
    encryptedDocument: I
  }[e];
  return /* @__PURE__ */ c(
    s,
    {
      "data-testid": r,
      user: t,
      overrides: n,
      isOpen: m,
      onClick: p,
      close: o,
      onClickOutside: o,
      onEsc: o,
      ...a,
      children: i
    }
  );
};
export {
  y as WebdoxAIButtonInformationPopover
};
//# sourceMappingURL=webdox-ai-button-information-popover.js.map
