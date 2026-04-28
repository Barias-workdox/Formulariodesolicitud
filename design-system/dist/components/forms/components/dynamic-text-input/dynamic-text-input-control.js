import { jsx as o } from "react/jsx-runtime";
import { Controller as u } from "react-hook-form";
import { DynamicTextInput as C } from "../../../dynamic-text-input/dynamic-text-input.js";
import { FormControl as g } from "../../../form-control/form-control.js";
const I = ({
  "data-testid": r,
  name: m,
  control: e,
  label: i,
  disabled: n,
  caption: a,
  defaultValue: l = "",
  formControlProps: p,
  variant: s,
  fontWeight: d,
  endEnhancer: f,
  placeholder: x
}) => /* @__PURE__ */ o(
  u,
  {
    name: m,
    control: e,
    defaultValue: l,
    render: ({ field: c, fieldState: { error: t } }) => /* @__PURE__ */ o(
      g,
      {
        label: i,
        disabled: n,
        caption: a,
        error: t == null ? void 0 : t.message,
        htmlFor: m,
        noExternalMargins: !0,
        ...p,
        children: /* @__PURE__ */ o(
          C,
          {
            "data-testid": r,
            disabled: n,
            variant: s,
            fontWeight: d,
            endEnhancer: f,
            placeholder: x,
            ...c
          }
        )
      }
    )
  }
);
export {
  I as DynamicTextInputControl
};
//# sourceMappingURL=dynamic-text-input-control.js.map
