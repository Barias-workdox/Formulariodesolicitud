import { jsx as i } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as a } from "../utils/i18n/utils.js";
import { DocumentDownload as n } from "./components/document-download/document-download.js";
import { DocumentSelector as c } from "./components/document-selector/document-selector.js";
const C = ({
  "data-testid": e = "design-system-file-picker",
  ...o
}) => {
  const { disabled: m, uploadProgress: t } = o, { t: r } = a(), s = t === 100, p = t / 100, d = s ? r("filePicker.uploadStatuses.progressCompleted") : r("filePicker.uploadStatuses.progress", { number: t });
  return m ? /* @__PURE__ */ i(
    n,
    {
      "data-testid": `${e}__document-download`,
      ...o
    }
  ) : /* @__PURE__ */ i(
    c,
    {
      "data-testid": `${e}__document-selector`,
      uploadPercentage: p,
      progressMessage: d,
      uploadCompleted: s,
      ...o
    }
  );
};
export {
  C as FilePicker
};
//# sourceMappingURL=file-picker.js.map
