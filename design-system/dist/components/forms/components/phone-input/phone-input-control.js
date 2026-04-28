import { jsx as e } from "react/jsx-runtime";
import { Controller as j } from "react-hook-form";
import { FormControl as E } from "../../../form-control/form-control.js";
import { findFirstErrorMessage as F } from "../../validations/utils/rhf-controller.utils.js";
import { PhoneInput as I } from "../../../phone-input/next/phone-input.js";
const V = ({
  "data-testid": s,
  name: n,
  label: a,
  disabled: d,
  caption: l,
  control: c,
  formControlOverrides: f,
  noExternalMargins: u = !1,
  infoTooltip: p,
  required: h,
  ...m
}) => /* @__PURE__ */ e(
  j,
  {
    name: n,
    control: c,
    render: ({ field: { value: t, onChange: i, ref: x, ...C }, fieldState: { error: g } }) => {
      const y = F(g), r = typeof t == "object" && t !== null && "text" in t ? t : { text: "", country: void 0 }, P = (o) => {
        i({
          ...r,
          text: o.currentTarget.value
        });
      }, T = (o) => {
        const [b] = o;
        i({
          ...r,
          country: b
        });
      };
      return /* @__PURE__ */ e(
        E,
        {
          label: a,
          disabled: d,
          caption: l,
          error: y,
          labelWithHorizontalPadding: !0,
          overrides: f,
          noExternalMargins: u,
          infoTooltip: p,
          required: h,
          children: /* @__PURE__ */ e(
            I,
            {
              ...C,
              ...m,
              "data-testid": s,
              name: n,
              inputRef: x,
              text: r.text,
              country: r.country,
              onTextChange: P,
              onCountryChange: T
            }
          )
        }
      );
    }
  }
);
export {
  V as PhoneInputControl
};
//# sourceMappingURL=phone-input-control.js.map
