import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as o } from "../../../utils/i18n/utils.js";
const u = ({
  schema: i
}) => {
  const { t: r } = o();
  return i.array().required(r("forms.validations.required")).min(1, r("forms.validations.required"));
};
export {
  u as useFileUploaderValidationSchema
};
//# sourceMappingURL=use-file-uploader-validation-schema.js.map
