import { jsx as e } from "react/jsx-runtime";
import { Controller as h } from "react-hook-form";
import { UserSelect as x } from "../../../user-select/user-select.js";
import { FormControl as F } from "../../../form-control/form-control.js";
const u = ({
  name: t,
  label: r,
  disabled: l,
  options: m,
  caption: i,
  control: f,
  formControlOverrides: s,
  noExternalMargins: n,
  infoTooltip: p,
  required: d,
  ...c
}) => /* @__PURE__ */ e(
  h,
  {
    name: t,
    control: f,
    render: ({ field: { ref: C, ...S }, fieldState: { error: o } }) => /* @__PURE__ */ e(
      F,
      {
        label: r,
        disabled: l,
        caption: i,
        error: o == null ? void 0 : o.message,
        htmlFor: t,
        overrides: s,
        noExternalMargins: n,
        infoTooltip: p,
        required: d,
        children: /* @__PURE__ */ e(
          x,
          {
            ...S,
            inputRef: C,
            options: m,
            ...c
          }
        )
      }
    )
  }
);
export {
  u as UserSelectControl
};
//# sourceMappingURL=user-select-control.js.map
