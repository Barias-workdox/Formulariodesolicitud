import { useMemo as s } from "react";
import { otherCodes as u, specialAreaCodes as C, allCountryCodes as d, territoryCodes as b, sovereignCountryCodes as f, nonUnSovereignCountryCodes as v } from "../../constants/country-code.constants.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useCountriesTranslation as y } from "../../i18n/use-countries-translation.i18n.js";
const T = {
  asc: ({ label: o }, { label: e }) => o < e ? -1 : 1,
  desc: ({ label: o }, { label: e }) => o > e ? -1 : 1
}, c = {
  countries: [...f, ...v],
  territories: b,
  all: d,
  specialAreas: C,
  other: u
}, k = (o, e) => {
  const { sort: n, territoryType: t = "countries" } = e ?? {}, { t: a } = y(), i = s(() => T[n], [n]), p = s(() => c[t], [t]), m = s(() => {
    if (o != null && o.length) {
      const r = c[t];
      return o.filter((l) => r.includes(l));
    }
    return p;
  }, [o, t, p]);
  return s(
    () => m.filter((r) => d.includes(r)).map(
      (r) => ({
        id: r,
        label: a(r)
      })
    ).sort((r, l) => i ? i(r, l) : void 0),
    [m, a, i]
  );
};
export {
  k as useCountryCodeOptions
};
//# sourceMappingURL=use-country-code-options.js.map
