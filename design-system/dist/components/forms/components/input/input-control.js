import { jsx as o } from "react/jsx-runtime";
import { useRef as g } from "react";
import { Controller as x } from "react-hook-form";
import { FormControl as F } from "../../../form-control/form-control.js";
import { Input as I } from "../../../input/next/input.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
const S = ({
  "data-testid": m,
  name: r,
  label: n,
  disabled: l,
  caption: p,
  defaultValue: d = "",
  control: f,
  formControlOverrides: s,
  noExternalMargins: a,
  infoTooltip: u,
  required: e,
  ...c
}) => {
  const i = g();
  return /* @__PURE__ */ o(
    x,
    {
      name: r,
      control: f,
      defaultValue: d,
      render: ({ field: { ref: h, ...C }, fieldState: { error: t } }) => (h(i.current), /* @__PURE__ */ o(
        F,
        {
          label: n,
          disabled: l,
          caption: p,
          error: t == null ? void 0 : t.message,
          htmlFor: r,
          labelWithHorizontalPadding: !0,
          overrides: s,
          noExternalMargins: a,
          infoTooltip: u,
          required: e,
          children: /* @__PURE__ */ o(
            I,
            {
              ...C,
              inputRef: i,
              "data-testid": m,
              required: e,
              ...c
            }
          )
        }
      ))
    }
  );
};
export {
  S as InputControl
};
//# sourceMappingURL=input-control.js.map
