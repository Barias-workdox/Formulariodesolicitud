import { jsx as o, jsxs as f, Fragment as u } from "react/jsx-runtime";
import { useMemo as x } from "react";
import "baseui/popover";
import { mergeOverridesDeep as b } from "../../../../../utils/baseui/helpers.js";
import { Text as v } from "../../../../../text/text.js";
import { useCss as y } from "../../../../../utils/hooks/use-css.js";
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
import { InformationPopover as h } from "../../../../../information-popover/information-popover.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as I } from "../../../../../utils/i18n/utils.js";
import { DSTrans as A } from "../../../../../utils/i18n/translation-component.js";
import { styles as D, informationPopoverWithActionsOverrides as E, StyledEmoji as S } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as T } from "../popover-title-with-icon/popover-title-with-icon.js";
const to = ({
  "data-testid": t,
  children: e,
  overrides: r,
  isOpen: m,
  onClick: i,
  onClickOutside: p,
  onEsc: n,
  close: s
}) => {
  const { t: d } = I(), { boldTextStyles: c, theme: a } = y(D), l = x(() => b(
    E,
    r
  ), [r]);
  return /* @__PURE__ */ o(
    h,
    {
      "data-testid": t,
      isOpen: m,
      onClick: i,
      onClickOutside: p,
      onEsc: n,
      close: s,
      title: /* @__PURE__ */ f(T, { children: [
        /* @__PURE__ */ o(S, { children: "⚠️" }),
        d("webdoxAI.webdoxAIButton.encryptedDocumentError.title")
      ] }),
      content: /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(
        v,
        {
          variant: "bodySmall",
          margin: 0,
          color: a.colors.neutralSubdued,
          children: /* @__PURE__ */ o(
            A,
            {
              i18nKey: "webdoxAI.webdoxAIButton.encryptedDocumentError.detail",
              components: {
                bold: /* @__PURE__ */ o("span", { className: c })
              }
            }
          )
        }
      ) }),
      placement: "top",
      overrides: l,
      children: e
    }
  );
};
export {
  to as EncryptedDocumentErrorInformationPopover
};
//# sourceMappingURL=encrypted-document-error-information-popover.js.map
