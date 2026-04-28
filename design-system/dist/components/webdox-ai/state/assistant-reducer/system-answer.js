import { conversationUtils as s } from "../../utils/conversation.util.js";
const r = ({
  state: n,
  action: { payload: e }
}) => {
  const { conversation: { questions: t = [] } = {} } = n;
  return {
    ...n,
    conversation: {
      ...n.conversation,
      questions: [
        ...t,
        {
          ...s.createQuestion({ variant: "temp", isWaiting: !1 }),
          answers: [s.createAnswer({ variant: "systemAnswer", ...e })]
        }
      ]
    }
  };
};
export {
  r as systemAnswer
};
//# sourceMappingURL=system-answer.js.map
