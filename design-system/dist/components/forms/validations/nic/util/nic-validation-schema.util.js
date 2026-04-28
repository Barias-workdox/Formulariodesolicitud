import { useMemo as n } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../../utils/i18n/utils.js";
import { getNicI18nValidationTexts as c } from "./nic-18n.util.js";
import { validateRawNic as l } from "./nic.validation.js";
const d = ({
  schema: i,
  requiredErrorMessage: t,
  countryCode: r,
  validationErrorMessage: o,
  required: e = !1,
  nationalIdentificationKindCode: m
}) => {
  const a = i.string().test(
    `${r}-nic-validation`,
    o,
    (s) => s === "" || s === void 0 || s === null ? !0 : l({ rawNic: s ?? "", countryCode: r, nationalIdentificationKindCode: m })
  );
  return e ? a.required(t) : a.optional();
}, R = () => {
  const { t: i } = p(), t = n(() => i("forms.validations.required"), [i]);
  return {
    requiredErrorMessage: t,
    nicValidationSchema: ({ countryCode: r, nationalIdentificationKindCode: o, ...e }) => {
      const { validation: m } = c({
        countryCode: r,
        nationalIdentificationKindCode: o
      }), a = i(m);
      return d({
        ...e,
        requiredErrorMessage: t,
        countryCode: r,
        nationalIdentificationKindCode: o,
        validationErrorMessage: a
      });
    }
  };
};
export {
  d as nicValidationSchema,
  R as useNicValidation
};
//# sourceMappingURL=nic-validation-schema.util.js.map
