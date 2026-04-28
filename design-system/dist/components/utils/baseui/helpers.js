import { mergeOverrides as n } from "baseui";
const f = (...t) => {
  const r = t.shift() || {}, e = t.shift();
  return e && t.length > 0 ? n(r, f(e, ...t)) : e && (typeof e == "object" || typeof e == "function") ? n(r, e) : r;
};
export {
  f as mergeOverridesDeep
};
//# sourceMappingURL=helpers.js.map
