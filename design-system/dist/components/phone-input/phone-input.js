import { jsx as m } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { mergeOverrides as i } from "baseui";
import { PhoneInput as u } from "baseui/phone-input";
import { getPhoneInputBaseOverrides as O } from "./phone-input.styles.js";
const f = "264px", P = "323px", d = ({
  "data-testid": e = "phone-input",
  overrides: r,
  maxDropdownHeight: o = f,
  maxDropdownWidth: t = P,
  ...n
}) => {
  const p = s(
    () => i(O({ dataTestId: e }), r),
    [r, e]
  );
  return /* @__PURE__ */ m(
    u,
    {
      ...n,
      maxDropdownHeight: o,
      maxDropdownWidth: t,
      clearable: !1,
      overrides: p
    }
  );
};
export {
  d as PhoneInput
};
//# sourceMappingURL=phone-input.js.map
