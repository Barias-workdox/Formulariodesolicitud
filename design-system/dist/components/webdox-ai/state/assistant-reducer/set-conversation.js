import { conversationUtils as t } from "../../utils/conversation.util.js";
const l = ({ state: s, action: o }) => {
  const { conversation: e } = s, {
    conversation: { questions: n, ...r },
    initialAnswer: i = !1
  } = o.payload, a = [
    t.createQuestion({
      variant: "temp",
      answers: [t.createAnswer({ variant: "firstAnswer" })]
    })
  ], c = i ? [...a, ...n] : n;
  return {
    ...s,
    conversation: {
      ...e,
      ...r,
      questions: c
    }
  };
};
export {
  l as setConversation
};
//# sourceMappingURL=set-conversation.js.map
