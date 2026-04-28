import { jsx as r } from "react/jsx-runtime";
import { useCallback as l } from "react";
import { Download as p, CheckmarkOutline as s, Error as f } from "@carbon/icons-react";
import { BackgroundIcon as t } from "../../../background-icon/next/background-icon.js";
import "../../../button/button.js";
import { IconButton as c } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as u } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
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
const K = ({
  fileStatus: o,
  isHovered: e,
  onClick: i
}) => {
  const { t: n } = h(), { theme: a } = u(), m = l(
    (d) => {
      d.stopPropagation(), i();
    },
    [i]
  );
  return o === "downloading" || o === "idle" ? null : e && o === "finished" ? /* @__PURE__ */ r(
    w,
    {
      content: n("fileDownloadManager.ariaLabels.downloadFileButton"),
      zIndex: a.zIndex.modal,
      showArrow: !0,
      children: /* @__PURE__ */ r(
        c,
        {
          kind: "tertiary",
          size: "24px",
          "aria-label": n("fileDownloadManager.ariaLabels.downloadFileButton"),
          dataTestId: "file-download-manager--file-item--download-button",
          onClick: m,
          children: /* @__PURE__ */ r(p, {})
        }
      )
    }
  ) : o === "finished" ? /* @__PURE__ */ r(
    t,
    {
      appearance: "tonal",
      dataTestId: "file-download-manager--file-item--finished-icon",
      kind: "positive",
      icon: s,
      size: "24px"
    }
  ) : o === "error" ? /* @__PURE__ */ r(
    t,
    {
      appearance: "tonal",
      dataTestId: "file-download-manager--file-item--error-icon",
      kind: "negative",
      icon: f,
      size: "24px"
    }
  ) : null;
};
export {
  K as FileItemEndEnhancer
};
//# sourceMappingURL=file-item-end-enhancer.js.map
