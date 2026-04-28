import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { Help as p, Repeat as s } from "@carbon/icons-react";
import { Button as e } from "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as d } from "../../../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as c } from "../../../../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../../../../../../../utils/i18n/utils.js";
import { DSTrans as f } from "../../../../../../../../utils/i18n/translation-component.js";
import { DOCUMENT_NOT_PROCESSED_URL as u } from "../../../../../../../constants/external-urls.constants.js";
import { styles as x } from "../../../../webdox-ai-button-information-popover.styles.js";
import { actionButtonOverrides as n } from "../../information-popover-content.overrides.js";
import { StyledActionsContainer as b } from "../../styled-components/styled-actions-container.js";
import { StyledContentWithActionsContainer as h } from "../../styled-components/styled-content-with-actions-container.js";
const J = ({
  "data-testid": r
}) => {
  const { boldTextStyles: m, theme: a } = d(x), { t } = l();
  return /* @__PURE__ */ i(h, { children: [
    /* @__PURE__ */ o(
      c,
      {
        variant: "bodySmall",
        margin: 0,
        color: a.colors.neutralSubdued,
        children: /* @__PURE__ */ o(
          f,
          {
            i18nKey: "webdoxAI.webdoxAIButton.genericErrorInformation.detail",
            components: {
              bold: /* @__PURE__ */ o("span", { className: m })
            }
          }
        )
      }
    ),
    /* @__PURE__ */ i(b, { children: [
      /* @__PURE__ */ o(
        e,
        {
          "data-testid": `${r}--reasons`,
          startEnhancer: p,
          kind: "tertiary",
          overrides: n,
          onClick: () => window.open(u),
          children: t("webdoxAI.webdoxAIButton.genericErrorInformation.actions.reasons")
        }
      ),
      /* @__PURE__ */ o(
        e,
        {
          "data-testid": `${r}--reloadPage`,
          startEnhancer: s,
          kind: "tertiary",
          overrides: n,
          onClick: () => location.reload(),
          children: t("webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage")
        }
      )
    ] })
  ] });
};
export {
  J as GenericErrorContent
};
//# sourceMappingURL=generic-error-content.js.map
