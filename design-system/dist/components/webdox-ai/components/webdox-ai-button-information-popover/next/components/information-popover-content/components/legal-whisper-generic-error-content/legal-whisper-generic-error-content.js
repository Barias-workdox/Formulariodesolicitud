import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { Repeat as n } from "@carbon/icons-react";
import { Button as p } from "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as a } from "../../../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as s } from "../../../../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../../../../../../../../utils/i18n/utils.js";
import { DSTrans as l } from "../../../../../../../../utils/i18n/translation-component.js";
import { styles as c } from "../../../../webdox-ai-button-information-popover.styles.js";
import { actionButtonOverrides as f } from "../../information-popover-content.overrides.js";
import { StyledActionsContainer as u } from "../../styled-components/styled-actions-container.js";
import { StyledContentWithActionsContainer as h } from "../../styled-components/styled-content-with-actions-container.js";
const J = ({
  "data-testid": r
}) => {
  const { boldTextStyles: t, theme: i } = a(c), { t: e } = d();
  return /* @__PURE__ */ m(h, { children: [
    /* @__PURE__ */ o(
      s,
      {
        variant: "bodySmall",
        margin: 0,
        color: i.colors.neutralSubdued,
        children: /* @__PURE__ */ o(
          l,
          {
            components: {
              bold: /* @__PURE__ */ o("span", { className: t })
            },
            i18nKey: "webdoxAI.webdoxAIButton.legalWhisperGenericError.detail"
          }
        )
      }
    ),
    /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(
      p,
      {
        "data-testid": `${r}--reloadPage`,
        startEnhancer: n,
        kind: "tertiary",
        overrides: f,
        onClick: () => location.reload(),
        children: e("webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage")
      }
    ) })
  ] });
};
export {
  J as LegalWhisperGenericErrorContent
};
//# sourceMappingURL=legal-whisper-generic-error-content.js.map
