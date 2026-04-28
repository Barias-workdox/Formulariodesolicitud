import { jsx as e } from "react/jsx-runtime";
import { Controller as b } from "react-hook-form";
import { FormControl as g } from "../../../form-control/form-control.js";
import { Select as k } from "../../../select/next/select.js";
const z = ({
  "data-testid": d = "select",
  name: l,
  label: m,
  disabled: r,
  multi: s = !1,
  options: f,
  searchable: c = !0,
  caption: S,
  control: h,
  formControlOverrides: n,
  onChange: t,
  noExternalMargins: p,
  infoTooltip: u,
  required: x,
  ...C
}) => /* @__PURE__ */ e(
  b,
  {
    name: l,
    control: h,
    render: ({ field: { ref: F, onChange: a, ...j }, fieldState: { error: o } }) => {
      const R = (i) => {
        a(i), t == null || t(i);
      };
      return /* @__PURE__ */ e(
        g,
        {
          label: m,
          disabled: r,
          caption: S,
          error: o == null ? void 0 : o.message,
          htmlFor: l,
          overrides: n,
          noExternalMargins: p,
          infoTooltip: u,
          required: x,
          children: /* @__PURE__ */ e(
            k,
            {
              ...j,
              "data-testid": d,
              inputRef: F,
              options: f,
              multi: s,
              searchable: c,
              onChange: R,
              ...C
            }
          )
        }
      );
    }
  }
);
export {
  z as SelectControl
};
//# sourceMappingURL=select-control.js.map
