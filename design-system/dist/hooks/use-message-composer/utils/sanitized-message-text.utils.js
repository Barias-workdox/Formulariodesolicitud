const s = (e) => e.join("").replace(/\s/g, " ").replace(new RegExp("\\((?=<span)|(?<=span>)\\)|\\((?=\\w+<)|(?<=>@)\\)", "g"), "");
export {
  s as sanitizeMessageText
};
//# sourceMappingURL=sanitized-message-text.utils.js.map
