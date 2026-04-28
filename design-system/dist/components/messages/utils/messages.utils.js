const a = {
  authorColor: "brandSubdued",
  otherUserColor: "warningSubdued"
}, l = ({
  authorId: r,
  currentUserId: o,
  type: e,
  barsOverrides: t = {}
}) => {
  const { authorColor: n, otherUserColor: s } = { ...a, ...t }, u = r === o;
  return e === "inquiry" ? "warning" : u ? n : s;
};
export {
  a as defaultColors,
  l as getMessageBarColor
};
//# sourceMappingURL=messages.utils.js.map
