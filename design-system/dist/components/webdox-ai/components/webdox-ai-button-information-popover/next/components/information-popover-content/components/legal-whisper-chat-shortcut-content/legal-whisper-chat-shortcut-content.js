import { jsx as n } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../../../../../../utils/i18n/utils.js";
import { ChatShortcutContent as a } from "../chat-shortcut-content/chat-shortcut-content.js";
const w = ({
  "data-testid": o = "chat-shortcut-content",
  onSubmit: e,
  ...r
}) => {
  const { t } = p();
  return /* @__PURE__ */ n(
    a,
    {
      "data-testid": o,
      ...r,
      onSubmit: (i) => {
        e({ optionType: "legalWhisper", value: i });
      },
      description: "webdoxAI.webdoxAIButton.legalWhisperChatShortcut.detail",
      buttonKind: "primary-whisper",
      buttonText: t("general.send"),
      placeholder: t("webdoxAI.webdoxAIButton.legalWhisperChatShortcut.composerPlaceholder")
    }
  );
};
export {
  w as LegalWhisperChatShortcutContent
};
//# sourceMappingURL=legal-whisper-chat-shortcut-content.js.map
