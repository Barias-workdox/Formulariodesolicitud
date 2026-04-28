import { jsx as i } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { ProgressBar as m } from "../../../progress/progress-bar.js";
import { Text as a } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as s } from "../../../utils/i18n/utils.js";
import { useCss as n } from "../../../utils/hooks/use-css.js";
import { getFileProgressBarOverrides as l } from "./file-item.styles.js";
const p = ({ fileDownloadProgress: r }) => {
  const { theme: e } = n(), o = t(() => l(e.spacing), [e.spacing]);
  return /* @__PURE__ */ i(
    m,
    {
      value: r ?? 0,
      completed: !1,
      "data-testid": "file-download-manager--file-item--loading-progress-bar",
      overrides: o
    }
  );
}, P = ({
  fileStatus: r,
  fileDownloadProgress: e
}) => {
  const { t: o } = s();
  return r === "downloading" ? /* @__PURE__ */ i(p, { fileDownloadProgress: e }) : r === "idle" ? null : /* @__PURE__ */ i(
    a,
    {
      margin: 0,
      variant: "microCopy",
      children: o(r === "finished" ? "fileDownloadManager.fileItemStatusLabel.finished" : "fileDownloadManager.fileItemStatusLabel.error")
    }
  );
};
export {
  P as FileItemDetails
};
//# sourceMappingURL=file-item-details.js.map
