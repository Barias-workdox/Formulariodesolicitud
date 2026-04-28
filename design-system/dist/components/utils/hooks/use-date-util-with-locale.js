import { useLocale as o } from "../../../contexts/locale-provider/locale-provider.js";
import { formatDateToIsoStringWithoutTimezoneOffset as m, dateWithoutTimezoneOffset as r, formatDateToIsoString as s, formatDateAsText as D, parseTextAsDatetime as f, formatDatetimeAsText as i, format as T, formatDatetime as g, formatDate as n, getDateMask as x, getDatetimeFormat as u, getDateFormat as A } from "../strings/date.utils.js";
const p = () => {
  const { locale: a } = o();
  return {
    getDateFormat: () => A(a),
    getDatetimeFormat: () => u(a),
    getDateMask: () => x(),
    formatDate: (t) => n(t, a),
    formatDatetime: (t, e = !0) => g(t, a, e),
    format: (t, e) => T(t, e, a),
    formatDatetimeAsText: (t, e) => i(t, a, e),
    parseTextAsDatetime: (t, e) => f(t, a, e),
    formatDateAsText: (t, e) => D(t, a, e),
    formatDateToIsoString: s,
    dateWithoutTimezoneOffset: r,
    formatDateToIsoStringWithoutTimezoneOffset: m
  };
};
export {
  p as useDateUtilsWithLocale
};
//# sourceMappingURL=use-date-util-with-locale.js.map
