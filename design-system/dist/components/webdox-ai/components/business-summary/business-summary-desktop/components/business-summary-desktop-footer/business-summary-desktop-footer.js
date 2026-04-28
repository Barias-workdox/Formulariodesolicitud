import { jsx as t } from "react/jsx-runtime";
import { Copy as i } from "@carbon/icons-react";
import { Button as m } from "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import { CopyToClipboardButton as p } from "../../../../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as e } from "../../../../../../utils/i18n/utils.js";
import { StyledBusinessSummaryFooterContainer as n, StyledBusinessSummaryFooterContent as s, StyledBusinessSummaryFooterButtonContainer as a } from "../../../business-summary.styles.js";
const J = ({
  summary: o
}) => {
  const { t: r } = e();
  return /* @__PURE__ */ t(n, { children: /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(a, { children: /* @__PURE__ */ t(
    p,
    {
      "data-testid": "copy-summary-button",
      text: o,
      children: /* @__PURE__ */ t(
        m,
        {
          "data-testid": "copy-summary-button--trigger",
          kind: "tertiary-brain",
          size: "32px",
          startEnhancer: /* @__PURE__ */ t(i, {}),
          children: r("copyToClipboardButton.defaultText")
        }
      )
    }
  ) }) }) });
};
export {
  J as BusinessSummaryDesktopFooter
};
//# sourceMappingURL=business-summary-desktop-footer.js.map
