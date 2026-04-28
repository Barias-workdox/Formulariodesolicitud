import { jsx as o, jsxs as g } from "react/jsx-runtime";
import { useMemo as h } from "react";
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
import { TruncatedText as I } from "../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../../../utils/i18n/utils.js";
import { DSTrans as b } from "../../../../../utils/i18n/translation-component.js";
import { styles as y, legalWhisperInformationPopoverOverrides as P, StyledEmoji as W } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as w } from "../popover-title-with-icon/popover-title-with-icon.js";
const eo = ({
  "data-testid": e,
  user: { firstName: i },
  children: m,
  overrides: t,
  isOpen: p,
  onClick: n,
  onClickOutside: s,
  onEsc: a,
  close: l
}) => {
  const { t: d } = T(), { boldTextStyles: c } = v(y), f = h(() => u(
    P,
    t
  ), [t]), r = d("webdoxAI.webdoxAIButton.greetings", {
    userName: i
  });
  return /* @__PURE__ */ o(
    x,
    {
      "data-testid": e,
      isOpen: p,
      onClick: n,
      onClickOutside: s,
      onEsc: a,
      close: l,
      title: /* @__PURE__ */ g(
        w,
        {
          showIcon: !0,
          iconType: "legalWhisper",
          children: [
            /* @__PURE__ */ o(W, { children: "👋" }),
            /* @__PURE__ */ o(
              I,
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
        b,
        {
          i18nKey: "webdoxAI.webdoxAIButton.legalWhisperGreetings.detail",
          components: {
            bold: /* @__PURE__ */ o("span", { className: c })
          }
        }
      ),
      placement: "top",
      overrides: f,
      children: m
    }
  );
};
export {
  eo as LegalWhisperGreetingsInformationPopover
};
//# sourceMappingURL=legal-whisper-greetings-information-popover.js.map
