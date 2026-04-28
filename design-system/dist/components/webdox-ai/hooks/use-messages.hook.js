import { useCallback as c, useMemo as o } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../utils/i18n/utils.js";
import { messageUtils as s } from "../utils/message.util.js";
const T = ({ value: e, answerReferences: r }) => {
  const { t: a } = g(), t = c(
    (n) => a("webdoxAI.chat.pageNumber", { pageNumber: n }),
    [a]
  ), i = o(() => s.sanitizeString(e), [e]), m = o(
    () => s.getMessageWithReplacedEncodedData({
      message: i,
      getReferenceName: t,
      availableReferences: r
    }),
    [r, t, i]
  ), p = o(
    () => s.getMessageMapReferences(e || "", t),
    [t, e]
  );
  return {
    replacedValue: m,
    referenceMap: p
  };
};
export {
  T as useMessages
};
//# sourceMappingURL=use-messages.hook.js.map
