import { conversationUtils as i } from "../../utils/conversation.util.js";
const s = ({ state: n }) => {
  const { conversation: { questions: o = [] } = {} } = n, e = i.findWaitingQuestionIndex(o);
  return e < 0 ? n : {
    ...n,
    conversation: {
      ...n.conversation,
      questions: i.deleteQuestionByIndex(o, e)
    }
  };
};
export {
  s as stopAnswerGeneration
};
//# sourceMappingURL=stop-answer-generation.js.map
