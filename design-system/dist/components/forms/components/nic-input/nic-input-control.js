import { jsx as i } from "react/jsx-runtime";
import { Controller as T } from "react-hook-form";
import { FormControl as F } from "../../../form-control/form-control.js";
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
import { formatRawNic as a } from "../../validations/utils/format.util.js";
import { useNicI18nTexts as P } from "../../validations/nic/util/nic-18n.util.js";
import { Input as R } from "../../../input/next/input.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
const U = ({
  "data-testid": m,
  name: e,
  label: p,
  disabled: n,
  caption: d,
  defaultValue: u = "",
  control: f,
  formControlOverrides: s,
  countryCode: t,
  placeholder: c,
  infoTooltip: h,
  noExternalMargins: g,
  ...v
}) => {
  const {
    label: N,
    placeholder: b,
    tooltip: w
  } = P({ countryCode: t });
  return /* @__PURE__ */ i(
    T,
    {
      name: e,
      control: f,
      defaultValue: u,
      render: ({ field: { ref: x, onChange: C, ...o }, fieldState: { error: r } }) => {
        const I = (l) => C(
          l.target.value ? a({ rawNic: l.target.value, countryCode: t }) : ""
        );
        return /* @__PURE__ */ i(
          F,
          {
            label: p ?? N,
            infoTooltip: h ?? w,
            disabled: n,
            caption: d,
            error: r == null ? void 0 : r.message,
            htmlFor: e,
            labelWithHorizontalPadding: !0,
            overrides: s,
            noExternalMargins: g,
            children: /* @__PURE__ */ i(
              R,
              {
                ...o,
                inputRef: x,
                "data-testid": m,
                placeholder: c ?? b,
                value: o.value ? a({ rawNic: o.value, countryCode: t }) : "",
                onChange: I,
                ...v
              }
            )
          }
        );
      }
    }
  );
};
export {
  U as NicInputControl
};
//# sourceMappingURL=nic-input-control.js.map
