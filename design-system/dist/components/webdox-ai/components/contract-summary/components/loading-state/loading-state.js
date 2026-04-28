import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { Spinner as n } from "../../../../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as p } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as a } from "../../../../../utils/i18n/utils.js";
import { StyledRoot as e } from "./loading-state.styles.js";
const I = ({ summaryType: r }) => {
  const { t: o } = a(), i = {
    report: o("webdoxAI.dataExtraction.contractReportGeneration.isLoading"),
    summary: o("webdoxAI.dataExtraction.contractSummaryGeneration.isLoading")
  };
  return /* @__PURE__ */ m(e, { children: [
    /* @__PURE__ */ t(
      p,
      {
        variant: "bodySmall",
        margin: 0,
        children: i[r]
      }
    ),
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(n, { size: "sm" }) })
  ] });
};
export {
  I as LoadingState
};
//# sourceMappingURL=loading-state.js.map
