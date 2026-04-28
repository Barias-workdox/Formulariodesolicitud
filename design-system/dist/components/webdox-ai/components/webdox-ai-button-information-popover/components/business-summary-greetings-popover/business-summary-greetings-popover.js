import { jsx as o, jsxs as c } from "react/jsx-runtime";
import { useMemo as f } from "react";
import "baseui/popover";
import { mergeOverridesDeep as u } from "../../../../../utils/baseui/helpers.js";
import "../../../../../text/text.js";
import { useCss as v } from "../../../../../utils/hooks/use-css.js";
import "@carbon/icons-react";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import { InformationPopover as x } from "../../../../../information-popover/information-popover.js";
import { TruncatedText as b } from "../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../../../../utils/i18n/utils.js";
import { DSTrans as y } from "../../../../../utils/i18n/translation-component.js";
import "baseui/typography";
import "baseui/input";
import "baseui";
import "../../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../avatar/avatar.styles.js";
import "../../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../background-icon/background-icon.styles.js";
import "../../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../next/components/information-popover-title/styled-components/styled-emoji.js";
import { PopoverTitleWithIcon as I } from "../../next/components/popover-title-with-icon/popover-title-with-icon.js";
import { styles as T, legalWhisperInformationPopoverOverrides as h, StyledEmoji as P } from "../../webdox-ai-button-information-popover.styles.js";
const Co = ({
  "data-testid": i,
  user: { firstName: m },
  children: p,
  overrides: t,
  isOpen: e,
  onClick: n,
  close: s
}) => {
  const { t: a } = g(), { boldTextStyles: d } = v(T), l = f(() => u(
    h,
    t
  ), [t]), r = a("webdoxAI.webdoxAIButton.greetings", {
    userName: m
  });
  return /* @__PURE__ */ o(
    x,
    {
      "data-testid": i,
      isOpen: e,
      onClick: n,
      close: s,
      title: /* @__PURE__ */ c(
        I,
        {
          showIcon: !0,
          iconType: "brainCompanion",
          children: [
            /* @__PURE__ */ o(P, { children: "👋" }),
            /* @__PURE__ */ o(
              b,
              {
                textProps: {
                  variant: "bodySmall",
                  fontWeight: "500",
                  margin: "0",
                  as: "div"
                },
                tooltipProps: {
                  content: r
                },
                children: r
              }
            )
          ]
        }
      ),
      content: /* @__PURE__ */ o(
        y,
        {
          components: {
            bold: /* @__PURE__ */ o("span", { className: d })
          },
          i18nKey: "webdoxAI.webdoxAIButton.businessSummaryGreetings.detail"
        }
      ),
      placement: "top",
      overrides: l,
      children: p
    }
  );
};
export {
  Co as BusinessSummaryGreetingsPopover
};
//# sourceMappingURL=business-summary-greetings-popover.js.map
