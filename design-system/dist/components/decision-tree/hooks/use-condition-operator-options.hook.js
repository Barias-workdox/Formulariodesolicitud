import { useMemo as r } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as o } from "../../utils/i18n/utils.js";
const T = ({
  dataType: i
}) => {
  const { t: e } = o();
  return r(() => {
    switch (i) {
      case "boolean":
      case "string":
      case "list":
        return [
          { id: "==", label: e("decisionTree.equals") },
          { id: "!=", label: e("decisionTree.notEquals") }
        ];
      case "date":
      case "numeric":
        return [
          { id: "==", label: e("decisionTree.equals") },
          { id: "!=", label: e("decisionTree.notEquals") },
          { id: ">", label: e("decisionTree.graterThan") },
          { id: ">=", label: e("decisionTree.graterOrEqual") },
          { id: "<", label: e("decisionTree.lessThan") },
          { id: "<=", label: e("decisionTree.lessOrEqual") }
        ];
    }
  }, [i, e]);
};
export {
  T as useOperatorOptions
};
//# sourceMappingURL=use-condition-operator-options.hook.js.map
