import { conversationUtils as e } from "../../utils/conversation.util.js";
const u = ({
  state: n,
  action: { payload: o }
}) => {
  const { conversation: i } = n, { questions: s = [] } = i || {};
  if (!i)
    return n;
  const t = e.findWaitingQuestionIndex(s);
  return t < 0 ? n : {
    ...n,
    conversation: {
      ...i,
      questions: e.getUpdatedQuestions(s, t, {
        ...s[t],
        isWaiting: !1,
        answers: [
          {
            ...o,
            variant: o.variant || "persist"
          }
        ]
      })
    }
  };
};
export {
  u as persistAnswer
};
//# sourceMappingURL=persist-answer.js.map
