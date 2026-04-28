import { useReducer as r } from "react";
import { conversationConstants as s } from "../constants/conversation.constant.js";
import "@carbon/icons-react";
import "../constants/webdox-ai-regex.constants.js";
import { legalWhisperReducer as i } from "../state/legal-whisper-reducer/legal-whisper-reducer.js";
import { conversationUtils as n } from "../utils/conversation.util.js";
const f = () => {
  const [t, o] = r(i, s.defaultState), { conversation: { questions: e = [] } = {} } = t;
  return {
    state: {
      ...t,
      isLoading: n.checkIsConversationLoading(e)
    },
    dispatch: o
  };
};
export {
  f as useLegalWhisperConversationState
};
//# sourceMappingURL=use-legal-whisper-conversation-state.hook.js.map
