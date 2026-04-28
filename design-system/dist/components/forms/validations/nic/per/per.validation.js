import { checkContainsOnlyNumbers as t } from "../util/nic-validation.util.js";
import { checkPERRUC as n } from "./per-validation.util.js";
const g = ({
  rawNic: e,
  nationalIdentificationKindCode: s
}) => {
  switch (s) {
    case "DNI":
      return t(e) && e.length === 8;
    case "CE":
      return t(e) && e.length >= 9 && e.length <= 12;
    case "RUC":
      return n(e);
    case "PAS":
      return new RegExp(/^A[0-9]{8}$/).test(e);
    default:
      return t(e) && e.length >= 8 && e.length <= 12 || n(e);
  }
};
export {
  g as validatePERNic
};
//# sourceMappingURL=per.validation.js.map
