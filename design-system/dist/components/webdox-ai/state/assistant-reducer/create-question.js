import { conversationUtils as i } from "../../utils/conversation.util.js";
const r = ({
  state: o,
  action: {
    payload: { value: n }
  }
}) => {
  const { conversation: { questions: t = [] } = {} } = o;
  return {
    ...o,
    conversation: {
      ...o.conversation,
      questions: [
        ...t,
        i.createQuestion({ value: n, variant: "persist", isWaiting: !0 })
      ]
    }
  };
};
export {
  r as createQuestion
};
//# sourceMappingURL=create-question.js.map
