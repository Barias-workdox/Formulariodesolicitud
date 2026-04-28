import { conversationUtils as o } from "../../utils/conversation.util.js";
const s = ({
  state: n,
  action: r
}) => {
  const { conversation: { questions: t = [] } = {} } = n;
  return {
    ...n,
    conversation: {
      ...n.conversation,
      questions: [
        ...t,
        {
          // Add a temp question and answer with the contract kind
          ...o.createQuestion({ variant: "temp" }),
          answers: [
            o.createAnswer({
              variant: "contractKind",
              ...r.payload
            })
          ]
        }
      ]
    }
  };
};
export {
  s as contractKindAnswer
};
//# sourceMappingURL=contract-kind-answer.js.map
