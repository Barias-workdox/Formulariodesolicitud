import { useMemo as r } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as t } from "../../utils/i18n/utils.js";
const f = () => {
  const { t: o } = t();
  return r(
    () => [
      { id: "assign_taker", label: o("decisionTree.assign") },
      { id: "start_workflow", label: o("decisionTree.startWorkflow") }
    ],
    [o]
  );
};
export {
  f as useActionOptions
};
//# sourceMappingURL=use-action-options.hook.js.map
