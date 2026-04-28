import { jsx as t } from "react/jsx-runtime";
import { Button as d } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../../../../utils/i18n/utils.js";
import { CopyToClipboardButton as u, getAllCopyToClipboardButtonStates as b } from "../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { getButtonOverrides as f } from "../../webdox-ai-document-viewer-wrapper.styles.js";
const L = ({
  "data-testid": o = "copy-action",
  selectedText: r,
  zIndex: i,
  $isFirstChild: p,
  $isLastChild: m,
  onCopy: n
}) => {
  const { t: e } = l();
  return /* @__PURE__ */ t(
    u,
    {
      "data-testid": o,
      value: r,
      tooltipProps: { placement: "bottom" },
      zIndex: i,
      onCopy: n,
      children: ({ buttonState: a }) => {
        const { Icon: s, textKey: c } = b()[a];
        return /* @__PURE__ */ t(
          d,
          {
            "data-testid": `${o}__button`,
            kind: "action-brain",
            size: "32px",
            endEnhancer: /* @__PURE__ */ t(s, {}),
            overrides: f({ $isFirstChild: p, $isLastChild: m }),
            children: e(c)
          }
        );
      }
    }
  );
};
export {
  L as CopyAction
};
//# sourceMappingURL=copy-action.js.map
