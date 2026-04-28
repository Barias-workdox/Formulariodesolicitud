import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { TruncatedText as l } from "../../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../../../utils/i18n/utils.js";
import { checkNotEmptyValue as a } from "../../../../../../../utils/check-not-empty-value.util.js";
import "react";
import "baseui/typography";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/utilities.js";
import "@carbon/icons-react";
import "baseui/input";
import "baseui/popover";
import "baseui";
import "../../../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../../avatar/avatar.styles.js";
import "baseui/modal";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../../text/text.js";
import "../../../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../../background-icon/background-icon.styles.js";
import "../../../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../information-popover-content/styled-components/styled-actions-container.js";
import "../information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import { PopoverTitleWithIcon as d } from "../popover-title-with-icon/popover-title-with-icon.js";
import { StyledEmoji as g } from "./styled-components/styled-emoji.js";
const I = {
  active: "brainCompanion",
  legalWhisperActive: "legalWhisper",
  legalWhisperGreetings: "legalWhisper",
  loading: "brainCompanion",
  suiteAIGreetings: "suiteAI"
}, x = {
  active: "👋",
  genericError: "🚧",
  legalWhisperActive: "👋",
  legalWhisperGenericError: "🚧",
  legalWhisperGreetings: "👋",
  loading: "👋",
  processFailedError: "⚠️",
  encryptedDocumentError: "⚠️",
  suiteAIGreetings: "👋"
}, A = {
  active: "webdoxAI.webdoxAIButton.greetings",
  genericError: "webdoxAI.webdoxAIButton.genericErrorInformation.title",
  legalWhisperActive: "webdoxAI.webdoxAIButton.greetings",
  legalWhisperGenericError: "webdoxAI.webdoxAIButton.legalWhisperGenericError.title",
  legalWhisperGreetings: "webdoxAI.webdoxAIButton.greetings",
  loading: "webdoxAI.webdoxAIButton.greetings",
  processFailedError: "webdoxAI.webdoxAIButton.processFailedErrorInformation.title",
  suiteAIGreetings: "webdoxAI.webdoxAIButton.greetings",
  encryptedDocumentError: "webdoxAI.webdoxAIButton.encryptedDocumentError.title"
}, Er = ({
  popoverVariant: r,
  user: { firstName: p }
}) => {
  const { t: m } = c(), t = I[r], o = x[r], n = A[r], e = m(n, { userName: p });
  return /* @__PURE__ */ s(
    d,
    {
      showIcon: a(t),
      iconType: t,
      children: [
        o && /* @__PURE__ */ i(g, { children: o }),
        /* @__PURE__ */ i(
          l,
          {
            textProps: {
              variant: "bodySmall",
              fontWeight: "500",
              margin: "0",
              as: "div"
            },
            tooltipProps: {
              content: e
            },
            children: e
          }
        )
      ]
    }
  );
};
export {
  Er as InformationPopoverTitle
};
//# sourceMappingURL=information-popover-title.js.map
