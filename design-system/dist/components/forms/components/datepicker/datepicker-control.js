import { jsx as o } from "react/jsx-runtime";
import { Controller as x } from "react-hook-form";
import { Datepicker as A } from "../../../datepicker/next/datepicker.js";
import { FormControl as E } from "../../../form-control/form-control.js";
import { useDateUtilsWithLocale as M } from "../../../utils/hooks/use-date-util-with-locale.js";
import { useLocale as P } from "../../../../contexts/locale-provider/locale-provider.js";
const S = new Date((/* @__PURE__ */ new Date()).getFullYear() - 100, 0, 1), H = ({
  "data-testid": i,
  name: a,
  label: l,
  disabled: m,
  caption: s,
  defaultValue: n,
  control: d,
  formControlOverrides: c,
  placeholder: p,
  range: t,
  minDate: f = S,
  /** Remove this by default because it breaks when `range` is true. Use under your own risk */
  enableInputBlur: D = !1,
  noExternalMargins: u,
  infoTooltip: h,
  required: g,
  ...C
}) => {
  const { dateLocale: F } = P(), { getDateFormat: r, getDateMask: k } = M();
  return /* @__PURE__ */ o(
    x,
    {
      name: a,
      control: d,
      defaultValue: n,
      render: ({ field: { ref: L, onChange: v, ...U }, fieldState: { error: e } }) => /* @__PURE__ */ o(
        E,
        {
          label: l,
          disabled: m,
          caption: s,
          error: e == null ? void 0 : e.message,
          htmlFor: a,
          labelWithHorizontalPadding: !0,
          overrides: c,
          noExternalMargins: u,
          infoTooltip: h,
          required: g,
          children: /* @__PURE__ */ o(
            A,
            {
              ...U,
              inputRef: L,
              "data-testid": i,
              placeholder: p ?? r().toUpperCase(),
              locale: F,
              mask: t ? void 0 : k(),
              formatString: t ? void 0 : r(),
              minDate: f,
              onChange: ({ date: w }) => v(w),
              range: t,
              enableInputBlur: D,
              ...C
            }
          )
        }
      )
    }
  );
};
export {
  H as DatePickerControl
};
//# sourceMappingURL=datepicker-control.js.map
