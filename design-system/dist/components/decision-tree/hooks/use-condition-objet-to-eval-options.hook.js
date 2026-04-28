import { useMemo as o } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as r } from "../../utils/i18n/utils.js";
const d = () => {
  const { t: e } = r();
  return o(
    () => [
      { id: "User", label: e("decisionTree.requester") },
      { id: "WorkflowRequest", label: e("decisionTree.request") }
    ],
    [e]
  );
};
export {
  d as useObjectToEvalOptions
};
//# sourceMappingURL=use-condition-objet-to-eval-options.hook.js.map
