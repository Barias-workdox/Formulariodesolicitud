import { useCallback as e } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as r } from "../../utils/i18n/utils.js";
const B = () => {
  const { t: o } = r();
  return { getBooleanItems: e(
    ({ withCheckbox: t = !0 } = { withCheckbox: !0 }) => [
      { id: "true", label: o("boolean.true"), withCheckbox: t },
      { id: "false", label: o("boolean.false"), withCheckbox: t }
    ],
    [o]
  ) };
};
export {
  B as useBooleanUtils
};
//# sourceMappingURL=use-boolean-utils.js.map
