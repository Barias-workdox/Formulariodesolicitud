import { jsx as r } from "react/jsx-runtime";
import s from "dompurify";
import "baseui/typography";
import { useCss as e } from "../../../utils/hooks/use-css.js";
import "react";
import "@carbon/icons-react";
import "baseui/input";
import "baseui/popover";
import "baseui";
import "../../../menu/stateful-menu/stateful-menu.js";
import "../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../avatar/avatar.styles.js";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as n } from "../../../text/text.js";
import "../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../messages/message-composer/message-composer.styles.js";
import { userMentionCssClassName as a } from "../../../messages/message-composer/user-mention.js";
import "../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../background-icon/background-icon.styles.js";
import "../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import { sanitizeClassUserMention as l } from "../../../utils/strings/regex.utils.js";
import "baseui/tag";
import { styles as i } from "./activity-comment.styles.js";
const et = ({ comment: o }) => {
  const { mentionedUserStyles: m, theme: t } = e(i), p = l({
    text: o,
    userMentionCssClassName: a,
    mentionedUserStyles: m
  });
  return /* @__PURE__ */ r(
    n,
    {
      variant: "bodySmall",
      margin: 0,
      padding: `${t.spacing.spacing2xs} 0 ${t.spacing.spacing2xs} ${t.spacing.spacingXs}`,
      color: "neutralSubdued",
      $style: i.textStyles(t),
      children: /* @__PURE__ */ r(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: s.sanitize(p)
          }
        }
      )
    }
  );
};
export {
  et as ActivityComment
};
//# sourceMappingURL=activity-comment.js.map
