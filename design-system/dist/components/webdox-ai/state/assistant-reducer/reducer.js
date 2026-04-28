import { conversationConstants as e } from "../../constants/conversation.constant.js";
import "@carbon/icons-react";
import "../../constants/webdox-ai-regex.constants.js";
import { contractKindAnswer as n } from "./contract-kind-answer.js";
import { createQuestion as o } from "./create-question.js";
import { deleteConversation as t } from "./delete-conversation.js";
import { deleteQuestion as i } from "./delete-question.js";
import { generativeAnswer as m } from "./generative-answer.js";
import { persistAnswer as a } from "./persist-answer.js";
import { reset as c } from "./reset.js";
import { setConversation as p } from "./set-conversation.js";
import { stopAnswerGeneration as u } from "./stop-answer-generation.js";
import { suggestionsAnswer as f } from "./suggestions-answer.js";
import { systemAnswer as w } from "./system-answer.js";
import { updateAnswer as d } from "./update-answer.js";
import { updateDisabled as A } from "./update-disabled.js";
const z = (r, s) => {
  switch (s.type) {
    case e.actions.setConversation:
      return p({ state: r, action: s });
    case e.actions.deleteConversation:
      return t({ state: r });
    case e.actions.createQuestion:
      return o({ state: r, action: s });
    case e.actions.persistAnswer:
      return a({ state: r, action: s });
    case e.actions.updateDisabled:
      return A({ state: r, action: s });
    case e.actions.generativeAnswer:
      return m({ state: r, action: s });
    case e.actions.updateAnswer:
      return d({ state: r, action: s });
    case e.actions.reset:
      return c();
    case e.actions.contractKindAnswer:
      return n({ state: r, action: s });
    case e.actions.suggestionsAnswer:
      return f({ state: r, action: s });
    case e.actions.systemAnswer:
      return w({ state: r, action: s });
    case e.actions.stopAnswerGeneration:
      return u({ state: r });
    case e.actions.deleteQuestion:
      return i({ state: r, action: s });
    default:
      return r;
  }
};
export {
  z as assistantReducer
};
//# sourceMappingURL=reducer.js.map
