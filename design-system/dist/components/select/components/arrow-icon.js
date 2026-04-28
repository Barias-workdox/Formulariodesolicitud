import { jsx as n } from "react/jsx-runtime";
import { ChevronUp as i, ChevronDown as m } from "@carbon/icons-react";
import { useCss as l } from "../../utils/hooks/use-css.js";
const p = {
  icon: {
    pointerEvents: "none"
  }
}, h = ({
  isOpen: t,
  isBorderless: c,
  color: o = "neutralSubdued"
}) => {
  const { icon: s, theme: e } = l(p), r = c ? 16 : 20;
  return t ? /* @__PURE__ */ n(
    i,
    {
      size: r,
      color: e.colors[o],
      className: s
    }
  ) : /* @__PURE__ */ n(
    m,
    {
      size: r,
      color: e.colors[o],
      className: s
    }
  );
};
export {
  h as ArrowIcon
};
//# sourceMappingURL=arrow-icon.js.map
