import { NAMESPACE as n } from "@webdoxclm/document-viewer-front/i18n";
import P from "@webdoxclm/document-viewer-front/locales/en.json";
import f from "@webdoxclm/document-viewer-front/locales/es.json";
import $ from "@webdoxclm/document-viewer-front/locales/pt.json";
import p from "i18next";
import d from "i18next-http-backend";
import E from "lodash/mergeWith";
import { initReactI18next as g } from "react-i18next";
import { en as N } from "../../../locales/contract-types/en.js";
import { es as A } from "../../../locales/contract-types/es.js";
import { pt as _ } from "../../../locales/contract-types/pt.js";
import { en as M } from "../../../locales/countries/en.js";
import { es as C } from "../../../locales/countries/es.js";
import { pt as T } from "../../../locales/countries/pt.js";
import { en as y } from "../../../locales/currencies/en.js";
import { es as c } from "../../../locales/currencies/es.js";
import { pt as R } from "../../../locales/currencies/pt.js";
import { en as x } from "../../../locales/data-types/en.js";
import { es as l } from "../../../locales/data-types/es.js";
import { pt as I } from "../../../locales/data-types/pt.js";
import { en as b } from "../../../locales/design-system/en.js";
import { es as u } from "../../../locales/design-system/es.js";
import { pt as h } from "../../../locales/design-system/pt.js";
import { PROJECT_NAMESPACE as o, COUNTRIES_NAMESPACE as t, CURRENCIES_NAMESPACE as e, DATA_TYPE_NAMESPACE as m, defaultLng as k, CONTRACT_TYPE_NAMESPACE as s } from "./i18n.constants.js";
const w = [
  o,
  t,
  e,
  m
], S = (r, i) => {
  if (Array.isArray(r) && Array.isArray(i))
    return [...r, ...i];
};
function mr(r = {}) {
  const i = {
    load: "languageOnly",
    partialBundledLanguages: !0,
    fallbackLng: k,
    interpolation: {
      escapeValue: !1
      // not needed for react as it escapes by default
    },
    ns: [...w],
    resources: {
      en: {
        [o]: b,
        [t]: M,
        [e]: y,
        [m]: x,
        [s]: N,
        [n]: P
      },
      es: {
        [o]: u,
        [t]: C,
        [e]: c,
        [m]: l,
        [s]: A,
        [n]: f
      },
      pt: {
        [o]: h,
        [t]: T,
        [e]: R,
        [m]: I,
        [s]: _,
        [n]: $
      },
      base: {
        [o]: u,
        [t]: C,
        [e]: c,
        [m]: l,
        [s]: A,
        [n]: f
      }
    }
  }, a = E(i, r, S);
  p.use(d), a.backend = E(
    { loadPath: "/locales/{{ns}}/{{lng}}.json" },
    r.backend,
    S
  ), p.use(g), p.init(a);
}
export {
  mr as initI18next
};
//# sourceMappingURL=config.js.map
