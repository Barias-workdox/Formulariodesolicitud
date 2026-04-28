import { jsx as s } from "react/jsx-runtime";
import { CheckboxCheckedFilled as l, Checkbox as m } from "@carbon/icons-react";
import { useCss as d } from "../../utils/hooks/use-css.js";
const u = ({
  dataTestId: r,
  checked: e,
  disabled: c
}) => {
  const { theme: o } = d(), t = c ? o.colors.neutralDepressed : e ? o.colors.brand : o.colors.neutralSubdued;
  return e ? /* @__PURE__ */ s(
    l,
    {
      "data-testid": r,
      color: t
    }
  ) : /* @__PURE__ */ s(
    m,
    {
      "data-testid": r,
      color: t
    }
  );
};
export {
  u as CheckboxCheckmark
};
//# sourceMappingURL=checkbox-checkmark.js.map
