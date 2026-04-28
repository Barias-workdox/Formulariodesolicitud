import { COUNTRY_ALPHA3_TO_ALPHA2 as r } from "../../../constants/country-alpha-codes.constants.js";
import { getFlagEmoji as l } from "../../../utils/string.util.js";
const $ = ({
  option: { id: e, label: o },
  withLabel: t = !0
}) => `${l(r[e] || "")}${t ? ` ${o}` : ""}`, a = ({
  countryOption: e,
  areaOption: o,
  defaultLabel: t = ""
}) => e && o ? `${l(r[e[0].id])} ${o[0].label}` : t;
export {
  a as getCountryAndAreaValueLabel,
  $ as getSelectorCountryOptionLabel
};
//# sourceMappingURL=legal-whisper-selector.util.js.map
