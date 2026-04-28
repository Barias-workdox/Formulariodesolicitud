import { jsx as o, jsxs as e, Fragment as I } from "react/jsx-runtime";
import { useMemo as b } from "react";
import { Help as h, Repeat as v } from "@carbon/icons-react";
import { Button as n } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as E } from "../../../../../utils/hooks/use-css.js";
import "baseui/modal";
import { mergeOverridesDeep as g } from "../../../../../utils/baseui/helpers.js";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "baseui/popover";
import { Text as w } from "../../../../../text/text.js";
import "../../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import { InformationPopover as A } from "../../../../../information-popover/information-popover.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as y } from "../../../../../utils/i18n/utils.js";
import { DSTrans as S } from "../../../../../utils/i18n/translation-component.js";
import { DOCUMENT_NOT_PROCESSED_URL as O } from "../../../../constants/external-urls.constants.js";
import { styles as P, informationPopoverWithActionsOverrides as B, StyledActionsContainer as C, actionButtonOverrides as m, StyledEmoji as T } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as k } from "../popover-title-with-icon/popover-title-with-icon.js";
const so = ({
  "data-testid": r,
  children: a,
  overrides: i,
  isOpen: p,
  onClick: d,
  onClickOutside: s,
  onEsc: c,
  close: l
}) => {
  const { t } = y(), { boldTextStyles: f, theme: u } = E(P), x = b(() => g(B, i), [i]);
  return /* @__PURE__ */ o(
    A,
    {
      "data-testid": r,
      isOpen: p,
      onClick: d,
      onClickOutside: s,
      onEsc: c,
      close: l,
      title: /* @__PURE__ */ e(k, { children: [
        /* @__PURE__ */ o(T, { children: "🚧" }),
        t("webdoxAI.webdoxAIButton.genericErrorInformation.title")
      ] }),
      content: /* @__PURE__ */ e(I, { children: [
        /* @__PURE__ */ o(
          w,
          {
            variant: "bodySmall",
            margin: 0,
            color: u.colors.neutralSubdued,
            children: /* @__PURE__ */ o(
              S,
              {
                components: {
                  bold: /* @__PURE__ */ o("span", { className: f })
                },
                i18nKey: "webdoxAI.webdoxAIButton.genericErrorInformation.detail"
              }
            )
          }
        ),
        /* @__PURE__ */ e(C, { children: [
          /* @__PURE__ */ o(
            n,
            {
              "data-testid": `${r}--reasons`,
              startEnhancer: h,
              kind: "tertiary",
              overrides: m,
              onClick: () => window.open(O),
              children: t("webdoxAI.webdoxAIButton.genericErrorInformation.actions.reasons")
            }
          ),
          /* @__PURE__ */ o(
            n,
            {
              "data-testid": `${r}--reloadPage`,
              startEnhancer: v,
              kind: "tertiary",
              overrides: m,
              onClick: () => location.reload(),
              children: t("webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage")
            }
          )
        ] })
      ] }),
      placement: "top",
      overrides: x,
      children: a
    }
  );
};
export {
  so as GenericErrorInformationPopover
};
//# sourceMappingURL=generic-error-information-popover.js.map
