import { checkCIandCEEcuador as t, checkRUCEcuador as c, legacyCheckECURUC as s } from "./ecu-validation.util.js";
const a = ({
  rawNic: e,
  nationalIdentificationKindCode: r
}) => {
  switch (r) {
    case "RUC":
      return c(e);
    case "PAS":
      return new RegExp(/^A[0-9]{9}$/).test(e);
    case "CI":
    case "CE":
      return t(e);
  }
  return c(e) || t(e) || s(e);
};
export {
  a as validateECUNic
};
//# sourceMappingURL=ecu.validation.js.map
