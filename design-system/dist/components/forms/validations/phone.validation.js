import { useMemo as a } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../utils/i18n/utils.js";
const s = {
  BRA: /^\+55\d{3,13}$/,
  default: /(^\+[0-9]+$|^$)/
}, d = (o, t) => (s[t] ?? s.default).test(o), p = ({
  schema: o,
  formatErrorMessage: t,
  requiredErrorMessage: r,
  required: i = !1,
  countryCode: m
}) => {
  const n = o.string().trim().test(
    "phone-number-validation",
    t,
    (e) => e === "" || e === void 0 || e === null ? !0 : d(e, m)
  );
  return i ? n.required(r) : n.optional().nullable();
}, q = () => {
  const { t: o } = l(), t = a(() => o("forms.validations.phoneFormat"), [o]), r = a(() => o("forms.validations.required"), [o]);
  return {
    formatErrorMessage: t,
    requiredErrorMessage: r,
    phoneValidationSchema: (i) => p({ ...i, formatErrorMessage: t, requiredErrorMessage: r })
  };
};
export {
  s as PHONE_NUMBER_REGEX,
  p as phoneValidationSchema,
  q as usePhoneValidation,
  d as validatePhone
};
//# sourceMappingURL=phone.validation.js.map
