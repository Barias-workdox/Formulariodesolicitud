import { conversationUtils as t } from "../../utils/conversation.util.js";
const r = ({
  state: n,
  action: { payload: o }
}) => {
  const { conversation: { questions: i = [] } = {} } = n, s = t.findWaitingQuestionIndex(i);
  return s < 0 ? n : {
    ...n,
    conversation: {
      ...n.conversation,
      questions: t.getUpdatedQuestions(i, s, {
        ...i[s],
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
  r as persistAnswer
};
//# sourceMappingURL=persist-answer.js.map
