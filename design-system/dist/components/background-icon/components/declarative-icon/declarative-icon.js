import { jsx as a } from "react/jsx-runtime";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { SIZE_MAP as n } from "../../background-icon.constants.js";
const h = ({
  "data-testid": e,
  size: r,
  Icon: s,
  iconColor: i,
  disabled: c
}) => {
  const { theme: t } = m(), { iconSize: o = "16px" } = n[r];
  return /* @__PURE__ */ a(
    s,
    {
      color: c ? t.colors.neutralDepressed : t.colors[i],
      height: o,
      width: o,
      "data-testid": e
    }
  );
};
export {
  h as DeclarativeIcon
};
//# sourceMappingURL=declarative-icon.js.map
