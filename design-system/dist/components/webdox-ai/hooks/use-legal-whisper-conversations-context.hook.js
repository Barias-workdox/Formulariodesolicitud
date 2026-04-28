import { useContext as o } from "react";
import "react/jsx-runtime";
import { LegalWhisperConversationsContext as t } from "../contexts/legal-whisper-conversations.context.js";
const i = () => {
  const e = o(t);
  if (!e)
    throw new Error(
      "useLegalWhisperConversationsContext must be used within a LegalWhisperConversationsProvider"
    );
  return e;
};
export {
  i as useLegalWhisperConversationsContext
};
//# sourceMappingURL=use-legal-whisper-conversations-context.hook.js.map
