import { jsx as o } from "react/jsx-runtime";
import { Search as r } from "@carbon/icons-react";
import { EmptyState as e } from "../../../empty-state/next/empty-state.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as i } from "../../../utils/i18n/utils.js";
const b = () => {
  const { t } = i();
  return /* @__PURE__ */ o(
    e,
    {
      title: t("webdoxAI.legalWhisperSettings.recentConversationsEmptyState.title"),
      description: t("webdoxAI.legalWhisperSettings.recentConversationsEmptyState.description"),
      Icon: r,
      iconColor: "neutral",
      backgroundColor: "neutralSubtle"
    }
  );
};
export {
  b as LegalWhisperConversationsListEmptyState
};
//# sourceMappingURL=legal-whisper-conversations-list-empty-state.js.map
