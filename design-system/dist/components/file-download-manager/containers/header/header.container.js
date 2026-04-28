import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { Close as m } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as s } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as p } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { HeaderStatus as f } from "../../components/header-status/header-status.js";
import { useFileDownloadManagerContext as g } from "../../hooks/use-file-download-manager-context.js";
import { useFileDownloadManagerDragContext as c } from "../../hooks/use-file-download-manager-drag-context.js";
import { Text as u } from "../../../text/text.js";
import { StatefulTooltipNext as w } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../utils/i18n/utils.js";
import { StyledHeaderContainer as D, StyledHeaderRightContainer as x } from "./header.container.styles.js";
const C = {
  idle: "fileDownloadManager.headerTitle.downloading",
  downloading: "fileDownloadManager.headerTitle.downloading",
  finished: "fileDownloadManager.headerTitle.finished",
  error: "fileDownloadManager.headerTitle.error"
}, X = () => {
  const { t: e } = h(), {
    onCloseDownload: a,
    status: r,
    isDraggable: n,
    documentsToDownload: i = 0
  } = g(), { onPointerDown: l } = c(), { theme: d } = p();
  return /* @__PURE__ */ t(
    D,
    {
      onPointerDown: l,
      $isDraggable: n,
      "data-testid": "file-download-manager--header-container",
      children: [
        /* @__PURE__ */ o(
          u,
          {
            variant: "body",
            margin: 0,
            children: e(C[r])
          }
        ),
        /* @__PURE__ */ t(x, { children: [
          /* @__PURE__ */ o(
            f,
            {
              status: r,
              documentCount: i
            }
          ),
          /* @__PURE__ */ o(
            w,
            {
              ignoreBoundary: !0,
              content: e("fileDownloadManager.ariaLabels.closeButton"),
              zIndex: d.zIndex.modal,
              showArrow: !0,
              children: /* @__PURE__ */ o(
                s,
                {
                  size: "24px",
                  kind: "control",
                  "aria-label": e("fileDownloadManager.ariaLabels.closeButton"),
                  onClick: a,
                  dataTestId: "file-download-manager--header--close-button",
                  children: /* @__PURE__ */ o(m, {})
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
export {
  X as FileDownloadManagerHeaderContainer
};
//# sourceMappingURL=header.container.js.map
