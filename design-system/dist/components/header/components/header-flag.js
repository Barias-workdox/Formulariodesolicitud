import { jsx as d } from "react/jsx-runtime";
import { COUNTRY_ALPHA3_TO_ALPHA2 as n } from "../../../constants/country-alpha-codes.constants.js";
import { themedStyled as f } from "../../../themes/utilities.js";
import { getFlagEmoji as p } from "../../../utils/string.util.js";
import { useHeader as c } from "../header.provider.js";
import { composeDataTestId as l } from "../utils/compose-data-test-id.js";
import { getIconSize as g } from "../utils/size-maps.js";
const z = f(
  "span",
  ({ $fontSize: e, $isDisabled: t }) => ({
    fontSize: e,
    opacity: t ? 0.2 : 1
  })
), D = ({ countryCode: e, label: t }) => {
  const { size: o, dataTestId: r, isDisabled: i } = c(), a = p(n[e]), s = l(`${r}-flag`), m = g(o);
  return /* @__PURE__ */ d(
    z,
    {
      role: "img",
      $fontSize: m,
      "aria-label": t || "",
      "aria-hidden": t ? "false" : "true",
      "data-testid": s,
      $isDisabled: i,
      children: a
    }
  );
};
export {
  D as HeaderFlag
};
//# sourceMappingURL=header-flag.js.map
