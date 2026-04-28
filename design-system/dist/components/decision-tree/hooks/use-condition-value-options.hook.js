import { useMemo as a } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../utils/i18n/utils.js";
import { getGroupConditionDataType as l } from "../utils/decision-tree.utils.js";
const O = ({
  objectToEval: e,
  field: o,
  groups: n,
  profiles: p,
  dataType: m,
  dynamicAttributes: s
}) => {
  const { t } = f();
  return a(() => {
    const r = l({
      objectToEval: e,
      field: o,
      dataType: m
    });
    if (r === "profiles")
      return p;
    if (r === "groups")
      return n;
    if (r === "booleanAttributes")
      return [
        { id: "true", label: t("decisionTree.true") },
        { id: "false", label: t("decisionTree.false") }
      ];
    if (r === "dynamicAttributes") {
      const i = s.find(
        ({ id: u }) => o === u
      );
      return (i == null ? void 0 : i.options) ?? [];
    }
    return [];
  }, [m, s, o, n, e, p, t]);
};
export {
  O as useValueOptions
};
//# sourceMappingURL=use-condition-value-options.hook.js.map
