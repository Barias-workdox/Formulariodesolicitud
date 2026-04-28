import { conversationUtils as i } from "../../utils/conversation.util.js";
const r = ({ state: n, action: e }) => {
  const { conversation: { questions: t = [] } = {} } = n, { questionIndex: o } = e.payload;
  return o < 0 ? n : {
    ...n,
    conversation: {
      ...n.conversation,
      questions: i.deleteQuestionByIndex(t, o)
    }
  };
};
export {
  r as deleteQuestion
};
//# sourceMappingURL=delete-question.js.map
