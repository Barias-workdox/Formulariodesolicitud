import { conversationUtils as s } from "../../utils/conversation.util.js";
const w = ({ state: n, action: i }) => {
  const { conversation: { questions: e = [] } = {} } = n, { id: t, ...u } = i.payload, o = s.findQuestionIndexByAnswerId(e, t);
  if (o < 0)
    return n;
  const r = e[o], d = s.findAnswerIndexByAnswerId(r.answers, t);
  if (d < 0)
    return n;
  const a = s.getUpdatedAnswers(
    r.answers,
    d,
    u
  );
  return {
    ...n,
    conversation: {
      ...n.conversation,
      questions: s.getUpdatedQuestions(e, o, {
        ...r,
        answers: a
      })
    }
  };
};
export {
  w as updateAnswer
};
//# sourceMappingURL=update-answer.js.map
