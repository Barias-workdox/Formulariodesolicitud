import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { useMemo as d } from "react";
import { CheckmarkOutline as m, Error as l } from "@carbon/icons-react";
import { BackgroundIcon as a } from "../../../background-icon/next/background-icon.js";
import { Spinner as p } from "../../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as s } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../utils/i18n/utils.js";
import { StyledHeaderStatusContainer as u } from "./header-status.styles.js";
const c = (r) => r === "downloading" ? /* @__PURE__ */ i(p, { size: "sm" }) : r === "finished" ? /* @__PURE__ */ i(
  a,
  {
    appearance: "tonal",
    dataTestId: "file-download-manager--header-status--finished-icon",
    icon: m,
    kind: "positive",
    size: "24px"
  }
) : r === "error" ? /* @__PURE__ */ i(
  a,
  {
    appearance: "tonal",
    dataTestId: "file-download-manager--header-status--error-icon",
    icon: l,
    kind: "negative",
    size: "24px"
  }
) : null, A = ({ status: r, documentCount: o }) => {
  const { t: e } = f(), n = d(() => r === "downloading" ? `${e("fileDownloadManager.headerStatusLabels.downloading")} ${e("general.items", { count: o, data: o })}` : r === "finished" ? e("fileDownloadManager.headerStatusLabels.finished") : r === "error" ? e("fileDownloadManager.headerStatusLabels.error") : null, [r, o, e]);
  return r === "idle" ? null : /* @__PURE__ */ t(u, { "data-testid": "file-download-manager--header-status", children: [
    c(r),
    /* @__PURE__ */ i(
      s,
      {
        margin: 0,
        variant: "bodySmall",
        children: n
      }
    )
  ] });
};
export {
  A as HeaderStatus
};
//# sourceMappingURL=header-status.js.map
