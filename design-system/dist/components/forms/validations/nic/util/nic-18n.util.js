import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../../../utils/i18n/utils.js";
import { nicBRATextsMap as s, nicBRAValidationTextsMap as m } from "../bra/bra.i18n.js";
import { nicCHLTextsMap as c, nicCHLValidationTextsMap as M } from "../chl/chl.i18n.js";
import { nicCOLValidationTextsMap as x } from "../col/col.i18n.js";
import { nicDefaultTextsMap as T, nicDefaultValidationTextsMap as g } from "../default/default.i18n.js";
import { nicECUTextsMap as l } from "../ecu/ecu.i18n.js";
import { nicMEXTextsMap as d, nicMEXValidationTextsMap as f } from "../mex/mex.i18n.js";
import { nicPERTextsMap as E } from "../per/per.i18n.js";
const e = /* @__PURE__ */ new Map([
  ["PER", E],
  ["BRA", s],
  ["ECU", l],
  ["MEX", d],
  ["CHL", c],
  [void 0, T]
]), r = /* @__PURE__ */ new Map([
  ["CHL", M],
  ["BRA", m],
  ["COL", x],
  ["MEX", f],
  [void 0, g]
]), v = ({
  countryCode: o,
  nationalIdentificationKindCode: t
}) => {
  var i;
  return ((i = e.get(o)) == null ? void 0 : i.get(t)) ?? e.get(void 0).get(t) ?? e.get(void 0).get(void 0);
}, P = ({
  countryCode: o,
  nationalIdentificationKindCode: t
}) => {
  var i;
  return ((i = r.get(o)) == null ? void 0 : i.get(t)) ?? r.get(void 0).get(t) ?? r.get(void 0).get(void 0);
}, U = (o) => {
  const { t } = n(), i = v(o);
  return Object.fromEntries(
    Object.entries(i).map(([p, a]) => [p, t(a)])
  );
};
export {
  e as allNicI18nTextsMap,
  r as allNicI18nValidationTextsMap,
  v as getNicI18nTexts,
  P as getNicI18nValidationTexts,
  U as useNicI18nTexts
};
//# sourceMappingURL=nic-18n.util.js.map
