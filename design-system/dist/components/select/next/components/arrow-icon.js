import { jsx as n } from "react/jsx-runtime";
import { ChevronUp as c, ChevronDown as i } from "@carbon/icons-react";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { COMMON_FONT_SIZE_16 as a } from "../../../../constants/common.constants.js";
const l = {
  iconStyles: {
    pointerEvents: "none"
  }
}, v = ({ isOpen: r, color: o = "neutralSubdued" }) => {
  const { iconStyles: e, theme: s } = m(l), t = a;
  return r ? /* @__PURE__ */ n(
    c,
    {
      size: t,
      color: s.colors[o],
      className: e,
      "data-testid": "chevron-up-icon"
    }
  ) : /* @__PURE__ */ n(
    i,
    {
      size: t,
      color: s.colors[o],
      className: e,
      "data-testid": "chevron-down-icon"
    }
  );
};
export {
  v as ArrowIcon
};
//# sourceMappingURL=arrow-icon.js.map
