import { jsx as r } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../../../../utils/i18n/utils.js";
import { useCss as i } from "../../../../../../utils/hooks/use-css.js";
import { styles as p } from "./popover-menu-empty.styles.js";
const E = () => {
  const { t: o } = m(), { containerStyles: t } = i(p);
  return /* @__PURE__ */ r("li", { className: t, children: o("dataTable.addColumnsEmpty") });
};
export {
  E as PopoverMenuEmpty
};
//# sourceMappingURL=popover-menu-empty.js.map
