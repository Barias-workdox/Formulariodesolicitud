import { isNil as c } from "lodash";
const l = (o, t = []) => t.some((r) => {
  const e = r[o];
  return !c(e);
}), m = (o, t, r = []) => r.some((e) => {
  const s = e[o];
  return !c(s) && s === t;
}), i = (o, t, r = []) => r.some((e) => {
  const s = e.quoteProblem, n = e.quoteTypeToImprove;
  return !c(s) && !c(n) && s === o && n === t;
});
export {
  l as checkFieldUsed,
  m as checkFieldUsedWithValue,
  i as checkQuoteProblemUsed
};
//# sourceMappingURL=answer-rating.util.js.map
