var E = Object.defineProperty;
var o = (s, e, t) => e in s ? E(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => o(s, typeof e != "symbol" ? e + "" : e, t);
class S {
  constructor() {
    n(this, "actions", {
      setConversation: "SET_CONVERSATION",
      reset: "RESET",
      createQuestion: "CREATE_QUESTION",
      persistAnswer: "PERSIST_ANSWER",
      updateDisabled: "UPDATE_DISABLED",
      generativeAnswer: "GENERATIVE_ANSWER",
      updateAnswer: "UPDATE_ANSWER",
      deleteConversation: "DELETE_CONVERSATION",
      contractKindAnswer: "CONTRACT_KIND_ANSWER",
      suggestionsAnswer: "SUGGESTIONS_ANSWER",
      systemAnswer: "SYSTEM_ANSWER",
      stopAnswerGeneration: "STOP_ANSWER_GENERATION",
      deleteQuestion: "DELETE_QUESTION",
      clickCustomPrompt: "CLICK_CUSTOM_PROMPT"
    });
    n(this, "defaultState", {
      conversation: void 0,
      disabled: !0,
      isLoading: !1
    });
  }
}
const a = new S();
export {
  S as ConversationConstants,
  a as conversationConstants
};
//# sourceMappingURL=conversation.constant.js.map
