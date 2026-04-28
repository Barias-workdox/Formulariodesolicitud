import { jsxs as C, jsx as o } from "react/jsx-runtime";
import { useMemo as d } from "react";
import "baseui/typography";
import { useCss as c } from "../../../../../../../../utils/hooks/use-css.js";
import { MessageComposer as g } from "../../../../../../../../messages/message-composer/message-composer.js";
import "react-dom/server";
import "../../../../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../../../../background-icon/background-icon.styles.js";
import { Text as h } from "../../../../../../../../text/text.js";
import "../../../../../../../../messages/message-list/message-list.styles.js";
import "../../../../../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/popover";
import "baseui/input";
import "../../../../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../../../../avatar/avatar.styles.js";
import "dompurify";
import "baseui/tag";
import { DSTrans as S } from "../../../../../../../../utils/i18n/translation-component.js";
import { MAX_CHAT_SHORTCUT_HEIGHT as T } from "../../../../../../../constants/webdox-ai.constants.js";
import { styles as v } from "../../../../webdox-ai-button-information-popover.styles.js";
import "../../styled-components/styled-actions-container.js";
import { StyledContentWithActionsContainer as x } from "../../styled-components/styled-content-with-actions-container.js";
import { getMessageComposerOverrides as y } from "./chat-shortcut-content.overrides.js";
const yo = ({
  "data-testid": i,
  buttonKind: r,
  buttonText: t,
  description: p,
  isDisabled: e = !1,
  placeholder: m,
  sendTextValue: s,
  onInputChange: a,
  onSubmit: n
}) => {
  const { boldTextStyles: f } = c(v), l = d(() => y({
    placeholder: m,
    buttonText: t,
    buttonKind: r
  }), [r, t, m]);
  return /* @__PURE__ */ C(x, { children: [
    /* @__PURE__ */ o(
      h,
      {
        variant: "bodySmall",
        margin: 0,
        children: /* @__PURE__ */ o(
          S,
          {
            components: {
              bold: /* @__PURE__ */ o("span", { className: f })
            },
            i18nKey: p
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      g,
      {
        "data-testid": i,
        isDisabled: e,
        isMentionable: !1,
        value: s,
        $maxHeight: T,
        overrides: l,
        onCreate: n,
        onChange: a
      }
    )
  ] });
};
export {
  yo as ChatShortcutContent
};
//# sourceMappingURL=chat-shortcut-content.js.map
