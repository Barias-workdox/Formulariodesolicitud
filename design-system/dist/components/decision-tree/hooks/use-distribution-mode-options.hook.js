import { useMemo as o } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as t } from "../../utils/i18n/utils.js";
const u = () => {
  const { t: i } = t();
  return o(
    () => [
      { id: "disabled", label: i("decisionTree.distributionModeOptions.disabled") },
      {
        id: "global_sequential",
        label: i("decisionTree.distributionModeOptions.globalSequential")
      }
    ],
    [i]
  );
};
export {
  u as useDistributionModeOptions
};
//# sourceMappingURL=use-distribution-mode-options.hook.js.map
