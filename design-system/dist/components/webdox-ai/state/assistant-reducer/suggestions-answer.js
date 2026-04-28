import { conversationUtils as s } from "../../utils/conversation.util.js";
const a = ({
  state: n,
  action: o
}) => {
  const { conversation: { questions: e = [] } = {} } = n, { question: r, answer: t } = o.payload;
  return {
    ...n,
    conversation: {
      ...n.conversation,
      questions: [
        ...e,
        {
          ...s.createQuestion(r),
          answers: [s.createAnswer({ variant: "promptsSuggestions", ...t })]
        }
      ]
    }
  };
};
export {
  a as suggestionsAnswer
};
//# sourceMappingURL=suggestions-answer.js.map
