import { jsx as t } from "react/jsx-runtime";
import { WarningHex as n, CheckmarkOutline as c } from "@carbon/icons-react";
import { useCss as m } from "../../../../utils/hooks/use-css.js";
import { COMMON_ICON_SIZE_16 as i } from "../../../../../constants/common.constants.js";
const u = ({
  "data-testid": o,
  positive: e,
  error: s
}) => {
  const { theme: r } = m();
  return s ? /* @__PURE__ */ t(
    n,
    {
      "data-testid": `${o}--error-icon`,
      size: i,
      color: r.colors.negative
    }
  ) : e ? /* @__PURE__ */ t(
    c,
    {
      "data-testid": `${o}--positive-icon`,
      size: i,
      color: r.colors.positive
    }
  ) : null;
};
export {
  u as PositiveOrNegativeIcon
};
//# sourceMappingURL=positive-or-negative-icon.js.map
