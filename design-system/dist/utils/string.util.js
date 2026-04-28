import { FLAG_EMOJI_RANGE_START as n } from "../constants/common.constants.js";
class i {
  /** Process the value the supplied regexp to find all matches in the return array */
  getAllMatches(t, e) {
    return [...t.matchAll(e)];
  }
  /** Handle all possible string cases to convert it to number. `undefined` if it is not a number string */
  mapToNumber(t) {
    if (typeof t == "number")
      return t;
    if (t === void 0)
      return;
    const e = t.trim(), o = Number(e);
    if (e !== "")
      return isNaN(o) ? void 0 : o;
  }
}
const c = new i(), m = (r) => {
  const t = r.toUpperCase().split("").map((e) => n + e.charCodeAt(0));
  return String.fromCodePoint(...t);
}, l = (r) => (t) => `${r}${t}`;
export {
  i as StringUtils,
  l as addPrefixToStringClosure,
  m as getFlagEmoji,
  c as stringUtils
};
//# sourceMappingURL=string.util.js.map
