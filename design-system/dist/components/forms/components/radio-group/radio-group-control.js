import { jsx as r } from "react/jsx-runtime";
import { Controller as u } from "react-hook-form";
import { FormControl as x } from "../../../form-control/form-control.js";
import { RadioGroup as F } from "../../../radio/radio-group.js";
import "react";
import "baseui/radio";
import "baseui";
import "../../../text/text.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
const B = ({
  "data-testid": i,
  name: o,
  label: m,
  disabled: p,
  caption: d,
  control: e,
  defaultValue: l,
  infoTooltip: a,
  formControlOverrides: s,
  noExternalMargins: f,
  required: n,
  ...C
}) => /* @__PURE__ */ r(
  u,
  {
    name: o,
    control: e,
    defaultValue: l,
    render: ({ field: { ref: c, ...h }, fieldState: { error: t } }) => /* @__PURE__ */ r(
      x,
      {
        infoTooltip: a,
        label: m,
        disabled: p,
        caption: d,
        error: t == null ? void 0 : t.message,
        htmlFor: o,
        overrides: s,
        noExternalMargins: f,
        required: n,
        children: /* @__PURE__ */ r(
          F,
          {
            ...h,
            ref: c,
            "data-testid": i,
            "aria-label": o,
            ...C
          }
        )
      }
    )
  }
);
export {
  B as RadioGroupControl
};
//# sourceMappingURL=radio-group-control.js.map
