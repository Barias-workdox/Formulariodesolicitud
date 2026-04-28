import { useMemo as o } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../utils/i18n/utils.js";
const s = ({
  value: t,
  required: r
}) => r ? t != null : !0, l = ({
  value: t,
  required: r
}) => Array.isArray(t) ? r ? t.length > 1 : t.length === 0 || t.length === 2 : !1, d = ({
  schema: t,
  requiredErrorMessage: r,
  required: e = !1,
  range: a = !1
}) => a ? t.array().test(
  "datepicker-range-validation",
  r,
  (i) => l({ value: i, required: e })
) : t.date().test(
  "datepicker-validation",
  r,
  (i) => s({ value: i, required: e })
), h = () => {
  const { t } = n(), r = o(() => t("forms.validations.required"), [t]);
  return {
    requiredErrorMessage: r,
    datePickerValidationSchema: (e) => d({ ...e, requiredErrorMessage: r })
  };
};
export {
  l as datePickerRangeValidationRule,
  s as datePickerSingleDateValidationRule,
  d as datePickerValidationSchema,
  h as useDatePickerValidation
};
//# sourceMappingURL=datepicker.validation.js.map
