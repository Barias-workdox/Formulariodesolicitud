import { conversationUtils as s } from "../../utils/conversation.util.js";
const c = ({ state: n, action: i }) => {
  const { conversation: { questions: e } = {} } = n, o = s.findWaitingQuestionIndex(e);
  if (o < 0)
    return n;
  const t = e[o], [r] = t.answers, a = {
    ...r === void 0 ? s.createAnswer({ variant: "generative" }) : {
      ...r,
      ...i.payload
    }
  };
  return {
    ...n,
    conversation: {
      ...n.conversation,
      questions: s.getUpdatedQuestions(e, o, {
        ...t,
        answers: [a]
      })
    }
  };
};
export {
  c as generativeAnswer
};
//# sourceMappingURL=generative-answer.js.map
