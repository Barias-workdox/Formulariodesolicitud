import { jsx as o, jsxs as p } from "react/jsx-runtime";
import { useState as P, useMemo as n, useCallback as w } from "react";
import "baseui/popover";
import { mergeOverridesDeep as A } from "../../../../../utils/baseui/helpers.js";
import "../../../../../text/text.js";
import { useCss as O } from "../../../../../utils/hooks/use-css.js";
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
import { InformationPopover as M } from "../../../../../information-popover/information-popover.js";
import "baseui/typography";
import { MessageComposer as W } from "../../../../../messages/message-composer/message-composer.js";
import "react-dom/server";
import "../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../contexts/locale-provider/locale-provider.js";
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
import { useTranslation as j } from "../../../../../utils/i18n/utils.js";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../background-icon/background-icon.styles.js";
import "../../../../../messages/message-list/message-list.styles.js";
import "../../../../../menu/stateful-menu/stateful-menu.js";
import "baseui";
import "baseui/menu";
import "../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/input";
import "../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../avatar/avatar.styles.js";
import "dompurify";
import "baseui/tag";
import { TruncatedText as D } from "../../../../../truncated-text/truncated-text.js";
import { DSTrans as B } from "../../../../../utils/i18n/translation-component.js";
import { noop as N } from "../../../../../../utils/noop.js";
import { styles as k, informationPopoverOverrides as E, StyledEmoji as H } from "../../webdox-ai-button-information-popover.styles.js";
import { PopoverTitleWithIcon as K } from "../popover-title-with-icon/popover-title-with-icon.js";
import { getChatShortcutInformationPopoverOverrides as $, getMessageComposerOverrides as q } from "./chat-shortcut-overrides.js";
import { StyledChatShortcutWrapper as z } from "./styled-chat-shortcut-wrapper.js";
import { StyledDetailChatShortcutWrapper as F } from "./styled-detail-chat-shortcut-wrapper.js";
const Uo = ({
  "data-testid": r,
  user: { firstName: s },
  children: a,
  overrides: e,
  isOpen: l,
  onClick: d,
  onClickOutside: c,
  onEsc: h,
  close: f,
  onSendClick: u = N,
  isDisabled: v = !1,
  sendTextValue: x
}) => {
  const { t } = j(), [g, C] = P(""), { boldTextStyles: b } = O(k), i = g.length > 0, S = n(() => A(
    E,
    $({ isActive: i }),
    e
  ), [e, i]), I = w((y) => {
    C(y);
  }, []), T = n(() => q({
    placeholder: t("webdoxAI.composerPlaceholder"),
    buttonText: t("general.send")
  }), [t]), m = t("webdoxAI.webdoxAIButton.greetings", { userName: s });
  return /* @__PURE__ */ o(
    M,
    {
      "data-testid": r,
      isOpen: l,
      onClick: d,
      onClickOutside: c,
      onEsc: h,
      close: f,
      title: /* @__PURE__ */ p(
        K,
        {
          showIcon: !0,
          iconType: "brainCompanion",
          children: [
            /* @__PURE__ */ o(H, { children: "👋" }),
            /* @__PURE__ */ o(
              D,
              {
                textProps: {
                  variant: "bodySmall",
                  fontWeight: "500",
                  margin: "0",
                  as: "div"
                },
                tooltipProps: {
                  content: m
                },
                children: m
              }
            )
          ]
        }
      ),
      content: /* @__PURE__ */ p(z, { children: [
        /* @__PURE__ */ o(F, { children: /* @__PURE__ */ o(
          B,
          {
            i18nKey: "webdoxAI.webdoxAIButton.chatShortcutInformation.detail",
            components: {
              bold: /* @__PURE__ */ o("span", { className: b })
            }
          }
        ) }),
        /* @__PURE__ */ o(
          W,
          {
            "data-testid": r,
            isDisabled: v,
            isMentionable: !1,
            value: x,
            $maxHeight: "90px",
            overrides: T,
            onCreate: u,
            onChange: I
          }
        )
      ] }),
      placement: "top",
      overrides: S,
      children: a
    }
  );
};
export {
  Uo as ChatShortcutInformationPopover
};
//# sourceMappingURL=chat-shortcut-information-popover.js.map
