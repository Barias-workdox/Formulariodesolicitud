import { useCallback as x } from "react";
import * as r from "yup";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as E } from "../../utils/i18n/utils.js";
const A = () => {
  const { t: o } = E();
  return { phoneInputValidationSchema: x(
    ({ required: C = !1 } = {}) => {
      const i = o("forms.validations.required"), n = o("forms.validations.phoneCountryRequired");
      return r.object({
        country: r.object({
          id: r.string(),
          label: r.string(),
          dialCode: r.string()
        }),
        text: r.string()
      }).test("conditional-phone-validation", i, function(t) {
        var s, c, m, d, p, e, h, y, f;
        if (C) {
          if (!((s = t == null ? void 0 : t.country) != null && s.id) || !((c = t == null ? void 0 : t.country) != null && c.label) || !((m = t == null ? void 0 : t.country) != null && m.dialCode) || !(t != null && t.text))
            return !((d = t == null ? void 0 : t.country) != null && d.id) || !((p = t == null ? void 0 : t.country) != null && p.label) || !((e = t == null ? void 0 : t.country) != null && e.dialCode) ? this.createError({ message: n }) : this.createError({ message: i });
        } else {
          const g = ((h = t == null ? void 0 : t.country) == null ? void 0 : h.id) || ((y = t == null ? void 0 : t.country) == null ? void 0 : y.label) || ((f = t == null ? void 0 : t.country) == null ? void 0 : f.dialCode), b = (t == null ? void 0 : t.text) && t.text.trim() !== "";
          if (b && !g)
            return this.createError({ message: n });
          if (g && !b)
            return this.createError({ message: i });
        }
        return !0;
      });
    },
    [o]
  ) };
};
export {
  A as usePhoneInputValidation
};
//# sourceMappingURL=phone-input.validation.js.map
