import * as o from "zod";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as i } from "../../utils/i18n/utils.js";
import { TEXT_AREA_LENGTH as m } from "../../../constants/form.constants.js";
import { MESSAGE_MAX_LENGTH as r } from "../constants/webdox-ai.constants.js";
const c = () => {
  const { t } = i();
  return o.object({
    title: o.string().max(
      m.small,
      t("forms.validations.maxLength", { length: m.small })
    ),
    content: o.string({ message: t("forms.validations.required") }).nonempty(t("forms.validations.required")).max(r, t("forms.validations.maxLength", { length: r }))
  });
};
export {
  c as useCustomPromptValidationSchema
};
//# sourceMappingURL=use-custom-prompt-validation-schema.hook.js.map
