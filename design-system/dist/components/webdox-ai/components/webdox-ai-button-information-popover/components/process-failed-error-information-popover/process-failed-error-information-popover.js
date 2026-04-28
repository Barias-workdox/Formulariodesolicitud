import { jsx as o, jsxs as i, Fragment as u } from "react/jsx-runtime";
import { useMemo as I } from "react";
import { Help as x } from "@carbon/icons-react";
import { Button as b } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as h } from "../../../../../utils/hooks/use-css.js";
import "baseui/modal";
import { mergeOverridesDeep as v } from "../../../../../utils/baseui/helpers.js";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "baseui/popover";
import { Text as A } from "../../../../../text/text.js";
import "../../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import { InformationPopover as w } from "../../../../../information-popover/information-popover.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as y } from "../../../../../utils/i18n/utils.js";
import { DSTrans as E } from "../../../../../utils/i18n/translation-component.js";
import { INVALID_DOCUMENT_URL as S } from "../../../../constants/external-urls.constants.js";
import { styles as B, informationPopoverWithActionsOverrides as F, StyledActionsContainer as O, actionButtonOverrides as P, StyledEmoji as T } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as g } from "../popover-title-with-icon/popover-title-with-icon.js";
const so = ({
  "data-testid": r,
  children: m,
  overrides: t,
  isOpen: n,
  onClick: p,
  onClickOutside: s,
  onEsc: a,
  close: d
}) => {
  const { t: e } = y(), { boldTextStyles: l, theme: c } = h(B), f = I(() => v(
    F,
    t
  ), [t]);
  return /* @__PURE__ */ o(
    w,
    {
      "data-testid": r,
      isOpen: n,
      onClick: p,
      onClickOutside: s,
      onEsc: a,
      close: d,
      title: /* @__PURE__ */ i(g, { children: [
        /* @__PURE__ */ o(T, { children: "⚠️" }),
        e("webdoxAI.webdoxAIButton.processFailedErrorInformation.title")
      ] }),
      content: /* @__PURE__ */ i(u, { children: [
        /* @__PURE__ */ o(
          A,
          {
            variant: "bodySmall",
            margin: 0,
            color: c.colors.neutralSubdued,
            children: /* @__PURE__ */ o(
              E,
              {
                i18nKey: "webdoxAI.webdoxAIButton.processFailedErrorInformation.detail",
                components: {
                  bold: /* @__PURE__ */ o("span", { className: l })
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o(O, { children: /* @__PURE__ */ o(
          b,
          {
            "data-testid": `${r}--reasons`,
            startEnhancer: x,
            kind: "tertiary",
            overrides: P,
            onClick: () => window.open(S),
            children: e("webdoxAI.webdoxAIButton.processFailedErrorInformation.actions.reasons")
          }
        ) })
      ] }),
      placement: "top",
      overrides: f,
      children: m
    }
  );
};
export {
  so as ProcessFailedErrorInformationPopover
};
//# sourceMappingURL=process-failed-error-information-popover.js.map
