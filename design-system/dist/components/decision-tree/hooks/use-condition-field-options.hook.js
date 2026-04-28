import { useMemo as m } from "react";
import { List as e } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../utils/i18n/utils.js";
import { getDynamicAttributeIcon as s } from "../utils/decision-tree.utils.js";
const q = ({
  objectToEval: r,
  dynamicAttributes: o
}) => {
  const { t: i } = n();
  return m(() => r === "User" ? [
    { id: "group_ids", label: i("decisionTree.profile"), dataType: "string", Icon: e },
    { id: "job_ids", label: i("decisionTree.group"), dataType: "string", Icon: e }
  ] : r === "WorkflowRequest" ? o.map(({ dataType: t, ...p }) => ({
    dataType: t,
    icon: s(t),
    ...p
  })) : [], [o, r, i]);
};
export {
  q as useFieldOptions
};
//# sourceMappingURL=use-condition-field-options.hook.js.map
