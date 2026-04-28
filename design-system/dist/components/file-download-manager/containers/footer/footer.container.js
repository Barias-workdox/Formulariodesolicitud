import { jsx as o } from "react/jsx-runtime";
import { ArrowRight as n } from "@carbon/icons-react";
import { Button as e } from "../../../button/next/button.js";
import { useFileDownloadManagerContext as a } from "../../hooks/use-file-download-manager-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as i } from "../../../utils/i18n/utils.js";
import { StyledFooterContainer as m } from "./footer.container.styles.js";
const T = () => {
  const { t: r } = i(), { onGoToDownloads: t } = a();
  return /* @__PURE__ */ o(m, { "data-testid": "file-download-manager--footer-container", children: /* @__PURE__ */ o(
    e,
    {
      dataTestId: "file-download-manager--footer--button",
      appearance: "tonal",
      size: "32px",
      endEnhancer: n,
      onClick: t,
      children: r("fileDownloadManager.goToDownloads")
    }
  ) });
};
export {
  T as FileDownloadManagerFooterContainer
};
//# sourceMappingURL=footer.container.js.map
