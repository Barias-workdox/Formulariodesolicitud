import { useReducer as e } from "react";
import { conversationConstants as n } from "../constants/conversation.constant.js";
import "@carbon/icons-react";
import "../constants/webdox-ai-regex.constants.js";
import { assistantReducer as r } from "../state/assistant-reducer/reducer.js";
import { conversationUtils as i } from "../utils/conversation.util.js";
const f = () => {
  const [t, o] = e(r, n.defaultState), { conversation: { questions: s = [] } = {} } = t;
  return {
    state: {
      ...t,
      isLoading: i.checkIsConversationLoading(s)
    },
    dispatch: o
  };
};
export {
  f as useConversationState
};
//# sourceMappingURL=use-conversation-state.js.map
