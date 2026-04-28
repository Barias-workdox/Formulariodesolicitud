import { useCallback as l } from "react";
import { isSameDay as a, isToday as s, subDays as p, subMonths as y, isYesterday as u } from "date-fns";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../../utils/i18n/utils.js";
import { useDateUtilsWithLocale as D } from "../../utils/hooks/use-date-util-with-locale.js";
import { dateWithoutTimezoneOffset as m } from "../../utils/strings/date.utils.js";
const k = () => {
  const { formatDate: e } = D(), { t } = d();
  return { getValueLabel: l(
    (r) => {
      if (!r || Array.isArray(r) && r.length === 0)
        return;
      if (Array.isArray(r)) {
        const [o, n] = r.map(m);
        if (a(o, n))
          return t("calendar.today");
        if (s(n)) {
          const f = p(/* @__PURE__ */ new Date(), 7);
          if (a(o, f))
            return t("calendar.last7Days");
          const c = y(/* @__PURE__ */ new Date(), 1);
          if (a(o, c))
            return t("calendar.lastMonth");
        }
        return `${e(o.toISOString())} / ${e(n.toISOString())}`;
      }
      const i = m(r);
      return s(i) ? t("calendar.today") : u(i) ? t("calendar.yesterday") : e(i.toISOString());
    },
    [t, e]
  ) };
};
export {
  k as useDateFilterUtils
};
//# sourceMappingURL=use-date-filter-utils.js.map
