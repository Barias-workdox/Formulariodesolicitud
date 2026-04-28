import { getUniqueId as d } from "../../utils/id.util.js";
class o {
  /** Create a new conversation with default values for the ones not supplied */
  createConversation(e) {
    return {
      id: d(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      title: "title",
      questions: [],
      ...e
    };
  }
  /** Utility to create a new conversation question */
  createQuestion(e) {
    return {
      id: d(),
      answers: [],
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isLoading: !1,
      value: "",
      isWaiting: !1,
      variant: "persist",
      ...e
    };
  }
  /** Utility to create a new conversation answer */
  createAnswer(e) {
    return {
      id: d(),
      value: "",
      variant: "persist",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      ...e
    };
  }
  /** Find the first (unique) waiting for answer question index */
  findWaitingQuestionIndex(e) {
    return e.findIndex(({ isWaiting: t }) => t);
  }
  /** Update the supplied question index with the provided payload in the questions array. Return a clone */
  getUpdatedQuestions(e, t, n) {
    if (t < 0)
      return e;
    const i = {
      ...e[t],
      ...n
    }, s = [...e];
    return s.splice(t, 1, i), s;
  }
  /** Delete the supplied question index in the questions array. Return a clone */
  deleteQuestionByIndex(e, t) {
    if (t < 0 || t > e.length - 1)
      return e;
    const n = [...e];
    return n.splice(t, 1), n;
  }
  /** Update the supplied answer index with the provided payload in the answers array. Return a clone */
  getUpdatedAnswers(e, t, n) {
    if (t < 0)
      return e;
    const i = {
      ...e[t],
      ...n
    }, s = [...e];
    return s.splice(t, 1, i), s;
  }
  /** Check if the current question has no answers, it will mean that the question is loading */
  checkIsQuestionLoading({
    answers: e,
    variant: t
  }) {
    return t === "persist" && e.length === 0;
  }
  /** Check if the conversation is loading based on the isWaiting for answer state */
  checkIsConversationLoading(e) {
    return this.findWaitingQuestionIndex(e) > -1;
  }
  /** Check the conversations questions and return if there aren't any persisted questions and answers */
  checkIsConversationEmpty(e) {
    return !e.some(({ variant: t }) => t === "persist");
  }
  /** Find an answer index in the question's answers array by its id */
  findAnswerIndexByAnswerId(e, t) {
    return e.findIndex((n) => n.id === t);
  }
  /** Given an answer id, find the question index */
  findQuestionIndexByAnswerId(e, t) {
    return e.findIndex(({ answers: n }) => n.some((r) => r.id === t));
  }
  /** Given an array of questions, find the answer based on its id */
  findAnswerByAnswerId(e, t) {
    const n = e.find(
      ({ answers: r }) => r.some((i) => i.id === t)
    );
    return n == null ? void 0 : n.answers.find(({ id: r }) => r === t);
  }
  /** Find the first answer in the array of questions with the supplied answer variant */
  findQuestionByVariant(e, t) {
    return e.find(({ answers: n }) => n.some((r) => r.variant === t));
  }
}
const c = new o();
export {
  o as ConversationUtils,
  c as conversationUtils
};
//# sourceMappingURL=conversation.util.js.map
