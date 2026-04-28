import { DocumentTasks as p, SubtractAlt as r, FaceDissatisfied as m, Document as n } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../utils/i18n/utils.js";
const y = ({
  activeTab: i,
  status: o
}) => {
  const { t } = l(), a = {
    completed: {
      icon: m,
      title: t("fileUploadManager.emptyState.finished.completed.title"),
      description: t("fileUploadManager.emptyState.finished.completed.description")
    },
    omitted: {
      icon: r,
      title: t("fileUploadManager.emptyState.finished.omitted.title")
    },
    rejected: {
      icon: p,
      title: t("fileUploadManager.emptyState.finished.rejected.title")
    }
  }, e = {
    icon: n,
    title: t("fileUploadManager.empty")
  };
  return o !== "uploading" ? a[i] ?? e : e;
};
export {
  y as useEmptyStateDetails
};
//# sourceMappingURL=use-empty-state-details.js.map
