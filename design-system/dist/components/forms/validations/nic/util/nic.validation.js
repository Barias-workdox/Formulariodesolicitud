import { cleanRawNic as l } from "../../utils/format.util.js";
import { validateBRANic as c } from "../bra/bra.validation.js";
import { validateCHLNic as o } from "../chl/chl.validation.js";
import { validateCOLNic as r } from "../col/col.validation.js";
import { validateDefaultNic as d } from "../default/default.validation.js";
import { validateECUNic as v } from "../ecu/ecu.validation.js";
import { validateMEXNic as m } from "../mex/mex.validation.js";
import { validatePERNic as N } from "../per/per.validation.js";
const t = /* @__PURE__ */ new Map([
  [
    "CHL",
    {
      validateRawNic: o
    }
  ],
  [
    "COL",
    {
      validateRawNic: r
    }
  ],
  [
    "PER",
    {
      validateRawNic: N
    }
  ],
  [
    "ECU",
    {
      validateRawNic: v
    }
  ],
  [
    "MEX",
    {
      validateRawNic: m
    }
  ],
  [
    "BRA",
    {
      validateRawNic: c
    }
  ],
  [
    void 0,
    {
      validateRawNic: d
    }
  ]
]), M = ({
  rawNic: a,
  countryCode: i,
  nationalIdentificationKindCode: e
}) => !a || !l({ rawNic: a, countryCode: i }) ? !1 : (t.get(i) ?? t.get(void 0)).validateRawNic({ rawNic: a, countryCode: i, nationalIdentificationKindCode: e });
export {
  t as allRawNicValidationMap,
  M as validateRawNic
};
//# sourceMappingURL=nic.validation.js.map
