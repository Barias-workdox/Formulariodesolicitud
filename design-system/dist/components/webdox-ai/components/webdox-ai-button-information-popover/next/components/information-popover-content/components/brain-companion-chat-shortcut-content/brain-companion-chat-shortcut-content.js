import { jsx as e } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as a } from "../../../../../../../../utils/i18n/utils.js";
import { ChatShortcutContent as m } from "../chat-shortcut-content/chat-shortcut-content.js";
const I = ({
  "data-testid": o = "chat-shortcut-content",
  onSubmit: r,
  ...n
}) => {
  const { t } = a();
  return /* @__PURE__ */ e(
    m,
    {
      "data-testid": o,
      ...n,
      onSubmit: (i) => {
        r({ optionType: "brainCompanion", value: i });
      },
      description: "webdoxAI.webdoxAIButton.chatShortcutInformation.detail",
      buttonKind: "primary-brain",
      buttonText: t("general.send"),
      placeholder: t("webdoxAI.composerPlaceholder")
    }
  );
};
export {
  I as BrainCompanionChatShortcutContent
};
//# sourceMappingURL=brain-companion-chat-shortcut-content.js.map
