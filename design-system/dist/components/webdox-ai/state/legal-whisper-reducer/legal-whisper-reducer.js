import { conversationConstants as s } from "../../constants/conversation.constant.js";
import "@carbon/icons-react";
import "../../constants/webdox-ai-regex.constants.js";
import { createQuestion as t } from "./create-question.js";
import { persistAnswer as o } from "./persist-answer.js";
import { setConversation as i } from "./set-conversation.js";
import { updateDisabled as n } from "./update-disabled.js";
const l = (r, e) => {
  switch (e.type) {
    case s.actions.setConversation:
      return i({ state: r, action: e });
    case s.actions.createQuestion:
      return t({ state: r, action: e });
    case s.actions.persistAnswer:
      return o({ state: r, action: e });
    case s.actions.updateDisabled:
      return n({ state: r, action: e });
    default:
      return r;
  }
};
export {
  l as legalWhisperReducer
};
//# sourceMappingURL=legal-whisper-reducer.js.map
