import { jsx as n } from "react/jsx-runtime";
import { Controller as T } from "react-hook-form";
import { FormControl as D } from "../../../form-control/form-control.js";
import "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "yup";
import { commaSeparatedAmount as F } from "../../validations/utils/format.util.js";
import { Input as W } from "../../../input/next/input.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
const _ = "amount-input-control", M = ({
  "data-testid": l,
  name: m,
  label: u,
  disabled: d,
  caption: s,
  defaultValue: f = "",
  control: c,
  formControlOverrides: h,
  placeholder: g,
  infoTooltip: A,
  noExternalMargins: C,
  required: v,
  ...x
}) => /* @__PURE__ */ n(
  T,
  {
    name: m,
    control: c,
    defaultValue: f,
    render: ({ field: { ref: B, onChange: e, ...p }, fieldState: { error: r } }) => {
      const I = (i) => {
        const { target: t } = i, { value: o } = t;
        if (typeof o == "string" && o.endsWith(",")) {
          const a = o + "0";
          a !== o && e(a);
        }
        p.onBlur();
      }, S = (i) => {
        var t;
        e(F((t = i.target) == null ? void 0 : t.value));
      };
      return /* @__PURE__ */ n(
        D,
        {
          label: u,
          infoTooltip: A,
          disabled: d,
          caption: s,
          error: r == null ? void 0 : r.message,
          htmlFor: m,
          labelWithHorizontalPadding: !0,
          overrides: h,
          noExternalMargins: C,
          required: v,
          children: /* @__PURE__ */ n(
            W,
            {
              ...p,
              inputRef: B,
              "data-testid": `${_}-${l}`,
              placeholder: g,
              onChange: S,
              onBlur: I,
              ...x
            }
          )
        }
      );
    }
  }
);
export {
  M as AmountInputControl
};
//# sourceMappingURL=amount-input-control.js.map
