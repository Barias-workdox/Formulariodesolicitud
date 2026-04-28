import { isSameDay as f } from "../utils/strings/date.utils.js";
const o = (r, t) => {
  if (!r && !t) return !1;
  if (!r || !t) return !0;
  if (Array.isArray(r) && Array.isArray(t)) {
    if (r.length !== t.length) return !0;
    for (let n = 0; n < r.length; n += 1) {
      const i = r[n], e = t[n];
      if (!(i instanceof Date) || !(e instanceof Date)) {
        if (i !== e) return !0;
      } else if (!f(i, e))
        return !0;
    }
    return !1;
  }
  return Array.isArray(r) || Array.isArray(t) ? !0 : r instanceof Date && t instanceof Date ? !f(r, t) : r !== t;
}, y = (r) => r ? (Array.isArray(r) ? r : [r, null]).map((n) => typeof n == "string" ? new Date(n) : n) : [];
export {
  y as getRangeValue,
  o as isDifferentDateIgnoringTime
};
//# sourceMappingURL=calendar.utils.js.map
