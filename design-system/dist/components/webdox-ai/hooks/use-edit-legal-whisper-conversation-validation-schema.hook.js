import * as t from "zod";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as r } from "../../utils/i18n/utils.js";
import { TEXT_AREA_LENGTH as i } from "../../../constants/form.constants.js";
const c = () => {
  const { t: o } = r();
  return t.object({
    title: t.string().trim().nonempty(o("forms.validations.required")).max(
      i.small,
      o("forms.validations.maxLength", { length: i.small })
    ),
    id: t.string()
  });
};
export {
  c as useEditLegalWhisperConversationValidationSchema
};
//# sourceMappingURL=use-edit-legal-whisper-conversation-validation-schema.hook.js.map
