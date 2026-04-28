import { jsx as t } from "react/jsx-runtime";
import { Controller as C } from "react-hook-form";
import { UserMultiselect as U } from "../../../user-multiselect/user-multiselect.js";
import { FormControl as x } from "../../../form-control/form-control.js";
const k = ({
  name: o,
  label: l,
  disabled: r,
  users: i,
  caption: s,
  control: m,
  formControlOverrides: f,
  noExternalMargins: d,
  checkedUsers: c = [],
  infoTooltip: n,
  ...p
}) => /* @__PURE__ */ t(
  C,
  {
    name: o,
    control: m,
    defaultValue: c,
    render: ({ field: { value: u, ref: a, ...h }, fieldState: { error: e } }) => /* @__PURE__ */ t(
      x,
      {
        label: l,
        disabled: r,
        caption: s,
        error: e == null ? void 0 : e.message,
        htmlFor: o,
        overrides: f,
        noExternalMargins: d,
        infoTooltip: n,
        children: /* @__PURE__ */ t(
          U,
          {
            ...h,
            users: i,
            checkedUsers: u,
            inputRef: a,
            ...p
          }
        )
      }
    )
  }
);
export {
  k as UserMultiselectControl
};
//# sourceMappingURL=user-multiselect-control.js.map
