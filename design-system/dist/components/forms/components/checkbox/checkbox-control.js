import { jsx as t } from "react/jsx-runtime";
import { Controller as x } from "react-hook-form";
import { Checkbox as k } from "../../../checkbox/checkbox.js";
import { FormControl as b } from "../../../form-control/form-control.js";
const S = ({
  "data-testid": r,
  name: e,
  label: d,
  disabled: i,
  caption: m,
  control: l,
  defaultValue: s,
  infoTooltip: c,
  formControlOverrides: f,
  noExternalMargins: a,
  required: h,
  ...n
}) => /* @__PURE__ */ t(
  x,
  {
    name: e,
    control: l,
    defaultValue: s,
    render: ({ field: { value: p, ...C }, fieldState: { error: o } }) => /* @__PURE__ */ t(
      b,
      {
        infoTooltip: c,
        label: d,
        disabled: i,
        caption: m,
        error: o == null ? void 0 : o.message,
        htmlFor: e,
        overrides: f,
        noExternalMargins: a,
        required: h,
        children: /* @__PURE__ */ t(
          k,
          {
            ...C,
            "data-testid": r,
            checked: p,
            ...n
          }
        )
      }
    )
  }
);
export {
  S as CheckboxControl
};
//# sourceMappingURL=checkbox-control.js.map
