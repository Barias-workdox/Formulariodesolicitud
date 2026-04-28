import { jsx as m } from "react/jsx-runtime";
import { GenerativeTextController as i } from "../../../generative-text/generative-text.controller.js";
import "baseui/typography";
import { useCss as p } from "../../../utils/hooks/use-css.js";
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
import "../../../text/text.js";
import "../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import { messageContentStyles as e } from "../../../messages/message-content/message-content.js";
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
import "dompurify";
import "baseui/tag";
import { GENERATIVE_ANSWER_WORD_PROPS as s, GENERATIVE_TEXT_VARIANT as l } from "../../constants/chat-bot.constant.js";
import "../../constants/webdox-ai-regex.constants.js";
import { styledChatBotGenerativeTextStyles as r } from "../../webdox-ai.styles.js";
const st = (o) => {
  const { theme: t } = p(r);
  return /* @__PURE__ */ m(
    i,
    {
      variant: l,
      $style: {
        ...e.textStyle(t),
        ...r.textStyles(t)
      },
      ...s,
      ...o
    }
  );
};
export {
  st as StyledChatBotGenerativeTextController
};
//# sourceMappingURL=styled-chat-bot-generative-text-controller.js.map
