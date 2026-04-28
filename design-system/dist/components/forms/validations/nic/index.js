import { checkContainsOnlyNumbers as i } from "./util/nic-validation.util.js";
import { allRawNicValidationMap as o, validateRawNic as r } from "./util/nic.validation.js";
import { allNicI18nTextsMap as x, allNicI18nValidationTextsMap as p, getNicI18nTexts as l, getNicI18nValidationTexts as n, useNicI18nTexts as f } from "./util/nic-18n.util.js";
import { nicValidationSchema as N, useNicValidation as s } from "./util/nic-validation-schema.util.js";
import { validateBRANic as M } from "./bra/bra.validation.js";
import { nicBRATextsMap as C, nicBRAValidationTextsMap as V } from "./bra/bra.i18n.js";
import { validateCHLNic as E } from "./chl/chl.validation.js";
import { cleanCHLNic as R, formatCHLNic as u } from "./chl/chl.format.js";
import { nicCHLTextsMap as I, nicCHLValidationTextsMap as X } from "./chl/chl.i18n.js";
import { validateCOLNic as B } from "./col/col.validation.js";
import { nicCOLValidationTextsMap as O } from "./col/col.i18n.js";
import { cleanDefaultNic as h, formatDefaultNic as w } from "./default/default.format.js";
import { validateDefaultNic as U } from "./default/default.validation.js";
import { validateECUNic as k } from "./ecu/ecu.validation.js";
import { nicECUTextsMap as S } from "./ecu/ecu.i18n.js";
import { cleanMEXNic as q } from "./mex/mex.format.js";
import { validateMEXNic as F } from "./mex/mex.validation.js";
import { nicMEXTextsMap as J, nicMEXValidationTextsMap as K } from "./mex/mex.i18n.js";
import { validatePERNic as W } from "./per/per.validation.js";
import { nicPERTextsMap as Z } from "./per/per.i18n.js";
export {
  x as allNicI18nTextsMap,
  p as allNicI18nValidationTextsMap,
  o as allRawNicValidationMap,
  i as checkContainsOnlyNumbers,
  R as cleanCHLNic,
  h as cleanDefaultNic,
  q as cleanMEXNic,
  u as formatCHLNic,
  w as formatDefaultNic,
  l as getNicI18nTexts,
  n as getNicI18nValidationTexts,
  C as nicBRATextsMap,
  V as nicBRAValidationTextsMap,
  I as nicCHLTextsMap,
  X as nicCHLValidationTextsMap,
  O as nicCOLValidationTextsMap,
  S as nicECUTextsMap,
  J as nicMEXTextsMap,
  K as nicMEXValidationTextsMap,
  Z as nicPERTextsMap,
  N as nicValidationSchema,
  f as useNicI18nTexts,
  s as useNicValidation,
  M as validateBRANic,
  E as validateCHLNic,
  B as validateCOLNic,
  U as validateDefaultNic,
  k as validateECUNic,
  F as validateMEXNic,
  W as validatePERNic,
  r as validateRawNic
};
//# sourceMappingURL=index.js.map
