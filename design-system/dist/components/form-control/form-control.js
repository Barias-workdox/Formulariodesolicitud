import { jsx as j } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { FormControl as l } from "baseui/form-control";
import { mergeOverridesDeep as n } from "../utils/baseui/helpers.js";
import { getFormControlBaseOverrides as B, noExternalMarginOverrides as C } from "./form-control.overrides.js";
function x({
  overrides: r,
  currentCharactersQuantity: o,
  infoTooltip: m,
  labelWithHorizontalPadding: e,
  maxLength: s,
  showCharacterCounter: f,
  customOverrides: p = {},
  noExternalMargins: t = !1,
  zIndex: v,
  required: F,
  ...d
}) {
  const O = i(
    () => B({
      currentCharactersQuantity: o,
      infoTooltip: m,
      labelWithHorizontalPadding: e,
      maxLength: s,
      showCharacterCounter: f,
      customOverrides: p,
      zIndex: v,
      required: F
    }),
    [
      o,
      p,
      m,
      e,
      s,
      F,
      f,
      v
    ]
  ), g = i(
    () => n(
      O,
      r,
      t ? C : {}
    ),
    [O, r, t]
  );
  return /* @__PURE__ */ j(
    l,
    {
      overrides: g,
      ...d
    }
  );
}
export {
  x as FormControl
};
//# sourceMappingURL=form-control.js.map
