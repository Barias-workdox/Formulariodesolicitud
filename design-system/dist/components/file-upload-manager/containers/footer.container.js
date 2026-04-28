import { jsx as t, Fragment as d } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Restart as u, Close as h } from "@carbon/icons-react";
import { Button as s } from "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../utils/i18n/utils.js";
import { StyledFooterContainer as C } from "../components/styled-components.js";
import { useFileUploadManagerContext as F } from "../hooks/use-file-uploader-manager-context.js";
const Q = ({ dataTestId: o }) => {
  const { t: r } = g(), { activeTab: e, status: i, files: n, onCancelUpload: c, onRetryUpload: l } = F(), a = i === "uploading", m = i === "finished", p = e === "rejected";
  return f(() => n.length < 1 ? !1 : !!(a || m && p), [n.length, a, m, p]) ? /* @__PURE__ */ t(C, { children: e === "rejected" ? /* @__PURE__ */ t(
    s,
    {
      "data-testid": `${o}__retry-button`,
      kind: "ghost-secondary",
      size: "compact",
      startEnhancer: () => /* @__PURE__ */ t(u, {}),
      onClick: () => l(),
      children: r("fileUploadManager.retry")
    }
  ) : /* @__PURE__ */ t(
    s,
    {
      "data-testid": `${o}__cancel-button`,
      kind: "ghost-secondary",
      size: "compact",
      startEnhancer: () => /* @__PURE__ */ t(h, {}),
      onClick: c,
      children: r("fileUploadManager.cancel")
    }
  ) }) : /* @__PURE__ */ t(d, {});
};
export {
  Q as FooterContainer
};
//# sourceMappingURL=footer.container.js.map
