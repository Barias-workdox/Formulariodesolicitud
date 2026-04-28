function n(r, l = "asc") {
  return (t, o) => typeof t[r] != "string" || typeof o[r] != "string" ? 0 : l === "asc" ? t[r].localeCompare(o[r]) : o[r].localeCompare(t[r]);
}
export {
  n as sortAlphabetically
};
//# sourceMappingURL=array.utils.js.map
