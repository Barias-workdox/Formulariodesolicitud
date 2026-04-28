import { checkCOLNIT as o } from "./col-validation.util.js";
const r = ({
  rawNic: t,
  nationalIdentificationKindCode: e
}) => {
  switch (e) {
    case "PAS":
      return new RegExp(/^[A-Z]{2}[0-9]{6}$/).test(t);
    default:
      return o(t);
  }
};
export {
  r as validateCOLNic
};
//# sourceMappingURL=col.validation.js.map
