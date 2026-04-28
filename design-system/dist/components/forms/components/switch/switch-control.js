import { jsx as i } from "react/jsx-runtime";
import { Controller as S } from "react-hook-form";
import { FormControl as w } from "../../../form-control/form-control.js";
import { Switch as x } from "../../../switch/switch.js";
const k = ({
  "data-testid": e,
  name: t,
  label: r,
  disabled: d,
  caption: l,
  control: m,
  defaultValue: a,
  infoTooltip: f,
  formControlOverrides: s,
  noExternalMargins: c,
  ...p
}) => /* @__PURE__ */ i(
  S,
  {
    name: t,
    control: m,
    defaultValue: a,
    render: ({ field: { ref: h, value: n, ...C }, fieldState: { error: o } }) => /* @__PURE__ */ i(
      w,
      {
        infoTooltip: f,
        label: r,
        disabled: d,
        caption: l,
        error: o == null ? void 0 : o.message,
        htmlFor: t,
        overrides: s,
        noExternalMargins: c,
        children: /* @__PURE__ */ i(
          x,
          {
            ...C,
            checked: n,
            "data-testid": e,
            "aria-label": t,
            inputRef: h,
            ...p
          }
        )
      }
    )
  }
);
export {
  k as SwitchControl
};
//# sourceMappingURL=switch-control.js.map
