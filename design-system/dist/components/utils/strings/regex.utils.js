const r = (e) => e.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&"), t = ({
  text: e,
  userMentionCssClassName: n,
  mentionedUserStyles: s
}) => e.replace(new RegExp(n, "g"), s);
export {
  r as escapeRegex,
  t as sanitizeClassUserMention
};
//# sourceMappingURL=regex.utils.js.map
