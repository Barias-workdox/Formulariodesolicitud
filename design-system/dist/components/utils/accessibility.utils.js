const a = (r) => (e) => {
  (e.key === " " || e.key === "Enter") && (e.preventDefault(), r());
};
export {
  a as ariaKeyDownHandler
};
//# sourceMappingURL=accessibility.utils.js.map
