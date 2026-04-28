const r = ({
  state: o,
  action: n
}) => {
  const { conversation: s } = o, {
    conversation: { questions: t, ...e }
  } = n.payload;
  return {
    ...o,
    conversation: {
      ...s,
      ...e,
      questions: t
    }
  };
};
export {
  r as setConversation
};
//# sourceMappingURL=set-conversation.js.map
