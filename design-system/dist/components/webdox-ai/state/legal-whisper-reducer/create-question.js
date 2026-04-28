import { conversationUtils as r } from "../../utils/conversation.util.js";
const s = ({
  state: n,
  action: {
    payload: { value: t }
  }
}) => {
  const { conversation: o } = n, { questions: i = [] } = o || {};
  return o ? {
    ...n,
    conversation: {
      ...o,
      questions: [
        ...i,
        r.createQuestion({
          value: t,
          variant: "persist",
          isWaiting: !0
        })
      ]
    }
  } : n;
};
export {
  s as createQuestion
};
//# sourceMappingURL=create-question.js.map
