import { jsx as o, jsxs as u } from "react/jsx-runtime";
import { useMemo as I } from "react";
import "baseui/popover";
import { mergeOverridesDeep as v } from "../../../../../utils/baseui/helpers.js";
import "../../../../../text/text.js";
import { useCss as x } from "../../../../../utils/hooks/use-css.js";
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
import { InformationPopover as g } from "../../../../../information-popover/information-popover.js";
import { TruncatedText as T } from "../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as b } from "../../../../../utils/i18n/utils.js";
import { DSTrans as h } from "../../../../../utils/i18n/translation-component.js";
import { styles as A, legalWhisperInformationPopoverOverrides as y, StyledEmoji as P } from "../../webdox-ai-button-information-popover.styles.js";
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
  close: d
}) => {
  const { t: l } = b(), { boldTextStyles: c } = x(A), f = I(() => v(
    y,
    t
  ), [t]), r = l("webdoxAI.webdoxAIButton.greetings", {
    userName: i
  });
  return /* @__PURE__ */ o(
    g,
    {
      "data-testid": e,
      isOpen: p,
      onClick: n,
      onClickOutside: s,
      onEsc: a,
      close: d,
      title: /* @__PURE__ */ u(
        w,
        {
          showIcon: !0,
          iconType: "suiteAI",
          children: [
            /* @__PURE__ */ o(P, { children: "👋" }),
            /* @__PURE__ */ o(
              T,
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
        h,
        {
          components: {
            bold: /* @__PURE__ */ o("span", { className: c })
          },
          i18nKey: "webdoxAI.webdoxAIButton.suiteAIGreetings.detail"
        }
      ),
      placement: "top",
      overrides: f,
      children: m
    }
  );
};
export {
  eo as SuiteAIGreetingsInformationPopover
};
//# sourceMappingURL=suite-ai-greetings-information-popover.js.map
