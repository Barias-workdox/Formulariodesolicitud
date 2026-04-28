import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { Help as n } from "@carbon/icons-react";
import { Button as s } from "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as p } from "../../../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as a } from "../../../../../../../../text/text.js";
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
import { INVALID_DOCUMENT_URL as c } from "../../../../../../../constants/external-urls.constants.js";
import { styles as f } from "../../../../webdox-ai-button-information-popover.styles.js";
import { actionButtonOverrides as u } from "../../information-popover-content.overrides.js";
import { StyledActionsContainer as x } from "../../styled-components/styled-actions-container.js";
import { StyledContentWithActionsContainer as b } from "../../styled-components/styled-content-with-actions-container.js";
const z = ({
  "data-testid": r
}) => {
  const { boldTextStyles: t, theme: i } = p(f), { t: m } = d();
  return /* @__PURE__ */ e(b, { children: [
    /* @__PURE__ */ o(
      a,
      {
        variant: "bodySmall",
        margin: 0,
        color: i.colors.neutralSubdued,
        children: /* @__PURE__ */ o(
          l,
          {
            i18nKey: "webdoxAI.webdoxAIButton.processFailedErrorInformation.detail",
            components: {
              bold: /* @__PURE__ */ o("span", { className: t })
            }
          }
        )
      }
    ),
    /* @__PURE__ */ o(x, { children: /* @__PURE__ */ o(
      s,
      {
        "data-testid": `${r}--reasons`,
        startEnhancer: n,
        kind: "tertiary",
        overrides: u,
        onClick: () => window.open(c),
        children: m("webdoxAI.webdoxAIButton.processFailedErrorInformation.actions.reasons")
      }
    ) })
  ] });
};
export {
  z as ProcessFailedErrorContent
};
//# sourceMappingURL=process-failed-error-content.js.map
