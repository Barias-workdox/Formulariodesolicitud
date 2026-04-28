import { jsxs as a, Fragment as E, jsx as o } from "react/jsx-runtime";
import { useCallback as T } from "react";
import { SendAltFilled as D } from "@carbon/icons-react";
import { MessageBox as I } from "../../../../message-box/next/message-box.js";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as L } from "../../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { noop as n } from "../../../../../utils/noop.js";
import "../../../../message-box/next/contexts/message-box.context.js";
import "@tiptap/react";
import "../../../../message-box/next/components/basic-message-box-actions/styled-components/styled-desktop-wrapper.js";
import "../../../../message-box/next/components/basic-message-box-actions/styled-components/styled-mobile-wrapper.js";
import "../../../../message-box/next/utils/compose-message-box-test-id.utils.js";
import "../../../../message-box/next/components/message-box-actions/styled-components/styled-container.js";
import "../../../../message-box/next/components/message-box-actions/styled-components/styled-extra-actions-container.js";
import "react-use";
import "../../../../message-box/next/styled-components/styled-root.js";
import "../../../../message-box/next/styled-components/styled-message-box-container.js";
import "../../../../message-box/next/styled-components/styled-textarea-container.js";
import { StyledAddonsContainer as M } from "../../../../message-box/next/styled-components/styled-addons-container.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as N } from "../../../../utils/i18n/utils.js";
import "../../../../message-box/next/components/text-editor-toolbar/styled-components/styled-container.js";
import "../../../../message-box/next/components/compact-message-box-actions/styled-components/styled-container.js";
import "../../../../message-box/next/providers/message-box.provider.js";
import { Notification as j } from "../../../../notification/next/notification.js";
import { Text as q } from "../../../../text/text.js";
import { MESSAGE_MAX_LENGTH as F } from "../../../constants/webdox-ai.constants.js";
import "../../../constants/webdox-ai-regex.constants.js";
import { usePlanUsage as R } from "../../../hooks/plan-usage.hook.js";
import { getUsagePlanData as X } from "../../../utils/webdox-ai-plans.utils.js";
import { UsagePlanCounter as G } from "../../plan-usage/plan-usage-counter.js";
import { ConversationSelectorWithPopoverContainer as H } from "./components/conversation-selector-with-popover/conversation-selector-with-popover.container.js";
import { CountryAndAreaSelectorWithPopover as V } from "./components/country-and-area-selector-with-popover/country-and-area-selector-with-popover.js";
import { StyledExtraActionsContainer as z } from "./styled-components/styled-extra-actions-container.js";
import { StyledUsagePlanContainer as J } from "./styled-components/styled-usage-plan-container.js";
import { StyledSettingsContainer as K } from "./styled-components/styled-settings-container.js";
import { StyledConversationSelectorWrapper as O } from "./styled-components/styled-conversation-selector-wrapper.js";
import { SuggestionList as Q } from "./suggestion-list/suggestion-list.js";
import "./suggestion-list/suggestion-list.styled.js";
import { UnratedAnswerAlert as Y } from "./unrated-answer-alert/unrated-answer-alert.js";
const rt = ({
  areaOptions: S = [],
  selectedArea: x,
  countryOptions: A,
  selectedCountry: C,
  dataTestId: t = "chat-composer",
  disabled: p,
  isGeneratingAnswer: s,
  showSuggestionList: l,
  showUnratedAnswerAlert: c,
  showSettingsSelector: d,
  suggestionList: v = [],
  zIndex: g,
  onAreaChange: y = n,
  onCountryChange: P = n,
  onCreateMessage: i,
  onRateAnswer: _ = n,
  onSuggestionClick: b = n
}) => {
  const { t: e } = N(), { theme: m } = L(), { availablePlans: f, isPlanUsageActive: u } = R(), { usageStatus: $, remainingRequests: U } = X(f, "legal_whisper"), r = !u || $ !== "exhausted" && U !== 0, h = p || s || !r, W = !p && r && !s, k = l || c || !r || d, w = T(
    (B) => {
      i == null || i(B.textValue);
    },
    [i]
  );
  return /* @__PURE__ */ a(E, { children: [
    /* @__PURE__ */ o(
      I,
      {
        "data-testid": t,
        autofocus: !0,
        width: "unset",
        margin: `${m.spacing.spacingMd} ${m.spacing.spacingMd} ${m.spacing.spacingXs}`,
        canSendWithEnter: W,
        onSubmit: w,
        placeholder: e("webdoxAI.legalWhisperComposerPlaceholder"),
        disabled: p,
        maxLength: F,
        primaryButtonText: e("general.send"),
        primaryButtonIcon: /* @__PURE__ */ o(D, {}),
        primaryButtonProps: {
          ...h && { disabled: h }
        },
        extraActions: /* @__PURE__ */ o(z, { children: /* @__PURE__ */ o(J, { children: u && /* @__PURE__ */ o(
          G,
          {
            availablePlans: f,
            planName: "legal_whisper"
          }
        ) }) }),
        addons: k && /* @__PURE__ */ a(M, { children: [
          r && l && /* @__PURE__ */ o(
            Q,
            {
              dataTestId: `${t}-suggestion-list`,
              onClick: b,
              items: v
            }
          ),
          c && /* @__PURE__ */ o(
            Y,
            {
              dataTestId: `${t}__unrated-answer-alert`,
              onClick: _
            }
          ),
          !r && /* @__PURE__ */ o(
            j,
            {
              kind: "negative",
              description: `${e("webdoxAI.planUsage.popovers.planTrial.notification")}`,
              size: "small",
              closeable: !1
            }
          ),
          d && /* @__PURE__ */ a(K, { children: [
            /* @__PURE__ */ o(
              V,
              {
                areaOptions: S,
                countryOptions: A,
                dataTestId: `${t}__legal-whisper-selector`,
                onAreaChange: y,
                onCountryChange: P,
                selectedArea: x,
                selectedCountry: C,
                zIndex: g
              }
            ),
            /* @__PURE__ */ o(O, { children: /* @__PURE__ */ o(
              H,
              {
                dataTestId: `${t}__conversation-selector`,
                zIndex: g
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ o(
      q,
      {
        variant: "bodySmall",
        color: "neutralStrong",
        textAlign: "center",
        margin: `0 0 ${m.spacing.spacingMd}`,
        children: e("webdoxAI.assistantDisclaimer")
      }
    )
  ] });
};
export {
  rt as LegalWhisperChatComposer
};
//# sourceMappingURL=legal-whisper-chat-composer.js.map
