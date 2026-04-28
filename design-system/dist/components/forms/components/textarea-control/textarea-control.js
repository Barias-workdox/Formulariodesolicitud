import { jsx as e } from "react/jsx-runtime";
import { Controller as j } from "react-hook-form";
import { FormControl as y } from "../../../form-control/form-control.js";
import { Textarea as F } from "../../../textarea/next/textarea.js";
const k = ({
  "data-testid": a,
  name: i,
  label: m,
  disabled: n,
  caption: d,
  control: l,
  defaultValue: s,
  infoTooltip: f,
  showCharacterCounter: p,
  labelWithHorizontalPadding: c,
  maxLength: u,
  formControlOverrides: x,
  currentCharactersQuantity: C,
  noExternalMargins: h,
  required: g,
  ...v
}) => /* @__PURE__ */ e(
  j,
  {
    name: i,
    control: l,
    defaultValue: s,
    render: ({ field: { ref: T, ...r }, fieldState: { error: t } }) => {
      var o;
      return /* @__PURE__ */ e(
        y,
        {
          infoTooltip: f,
          label: m,
          disabled: n,
          caption: d,
          error: t == null ? void 0 : t.message,
          showCharacterCounter: p,
          labelWithHorizontalPadding: c,
          maxLength: u,
          overrides: x,
          currentCharactersQuantity: C ?? ((o = r.value) == null ? void 0 : o.length),
          noExternalMargins: h,
          required: g,
          children: /* @__PURE__ */ e(
            F,
            {
              ...r,
              inputRef: T,
              "data-testid": a,
              ...v
            }
          )
        }
      );
    }
  }
);
export {
  k as TextareaControl
};
//# sourceMappingURL=textarea-control.js.map
