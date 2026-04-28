import { jsx as o, jsxs as u } from "react/jsx-runtime";
import { useMemo as v } from "react";
import "baseui/popover";
import { mergeOverridesDeep as x } from "../../../../../utils/baseui/helpers.js";
import "../../../../../text/text.js";
import { useCss as I } from "../../../../../utils/hooks/use-css.js";
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
import { InformationPopover as b } from "../../../../../information-popover/information-popover.js";
import { TruncatedText as P } from "../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../../../utils/i18n/utils.js";
import { DSTrans as g } from "../../../../../utils/i18n/translation-component.js";
import { styles as h, informationPopoverOverrides as y, StyledEmoji as w } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as A } from "../popover-title-with-icon/popover-title-with-icon.js";
const io = ({
  "data-testid": i,
  user: { firstName: e },
  children: m,
  overrides: t,
  isOpen: p,
  onClick: n,
  onClickOutside: s,
  onEsc: a,
  close: d
}) => {
  const { t: c } = T(), { boldTextStyles: l } = I(h), f = v(() => x(y, t), [t]), r = c("webdoxAI.webdoxAIButton.greetings", {
    userName: e
  });
  return /* @__PURE__ */ o(
    b,
    {
      "data-testid": i,
      isOpen: p,
      onClick: n,
      onClickOutside: s,
      onEsc: a,
      close: d,
      title: /* @__PURE__ */ u(
        A,
        {
          showIcon: !0,
          iconType: "brainCompanion",
          children: [
            /* @__PURE__ */ o(w, { children: "👋" }),
            /* @__PURE__ */ o(
              P,
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
        g,
        {
          components: {
            bold: /* @__PURE__ */ o("span", { className: l })
          },
          i18nKey: "webdoxAI.webdoxAIButton.documentInProcessInformation.detail"
        }
      ),
      placement: "top",
      overrides: f,
      children: m
    }
  );
};
export {
  io as DocumentProcessingInformationPopover
};
//# sourceMappingURL=document-processing-information-popover.js.map
