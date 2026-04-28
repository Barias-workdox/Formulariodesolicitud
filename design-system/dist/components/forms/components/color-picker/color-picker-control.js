import { jsx as t } from "react/jsx-runtime";
import { Controller as c } from "react-hook-form";
import { ColorPicker as h } from "../../../color-picker/next/color-picker.js";
import { FormControl as k } from "../../../form-control/form-control.js";
const j = ({
  "data-testid": i,
  name: r,
  label: m,
  disabled: e,
  caption: l,
  control: d,
  defaultValue: s,
  infoTooltip: a,
  noExternalMargins: f,
  required: n,
  ...p
}) => /* @__PURE__ */ t(
  c,
  {
    name: r,
    control: d,
    defaultValue: s,
    render: ({ field: C, fieldState: { error: o } }) => /* @__PURE__ */ t(
      k,
      {
        infoTooltip: a,
        label: m,
        disabled: e,
        caption: l,
        error: o == null ? void 0 : o.message,
        htmlFor: r,
        noExternalMargins: f,
        required: n,
        children: /* @__PURE__ */ t(
          h,
          {
            ...C,
            "data-testid": i,
            ...p
          }
        )
      }
    )
  }
);
export {
  j as ColorPickerControl
};
//# sourceMappingURL=color-picker-control.js.map
