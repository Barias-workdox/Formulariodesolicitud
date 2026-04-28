import { jsx as t } from "react/jsx-runtime";
import { List as e } from "@carbon/icons-react";
import "../../../../../../button/button.js";
import { IconButton as n } from "../../../../../../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltipNext as s } from "../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../../../../utils/i18n/utils.js";
const D = ({
  dataTestId: o,
  isLoading: r,
  zIndex: i,
  onClick: m
}) => {
  const { t: p } = u();
  return /* @__PURE__ */ t(
    s,
    {
      content: p("webdoxAI.suggestionsSection.buttonText"),
      placement: "bottomRight",
      showArrow: !0,
      zIndex: i,
      children: /* @__PURE__ */ t(
        n,
        {
          dataTestId: `${o}--prompt-suggestion-button`,
          onClick: m,
          disabled: r,
          kind: "tertiary",
          size: "32px",
          children: /* @__PURE__ */ t(e, {})
        }
      )
    }
  );
};
export {
  D as SuggestionsButton
};
//# sourceMappingURL=suggestions-button.js.map
