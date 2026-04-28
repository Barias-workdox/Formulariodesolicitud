const i = {
  id: "1",
  createdAt: "2022-01-01T00:00:00.000Z"
}, n = {
  isLoading: !1,
  disabled: !1
}, o = {
  questions: [],
  ...i,
  title: "title"
}, s = (t = n) => {
  var e;
  return {
    ...n,
    ...t,
    conversation: {
      ...o,
      ...t.conversation,
      questions: [...o.questions, ...((e = t == null ? void 0 : t.conversation) == null ? void 0 : e.questions) || []]
    }
  };
};
export {
  i as baseConversationStateId,
  s as getConversationBaseState
};
//# sourceMappingURL=chat-conversation-state-tests.utils.js.map
