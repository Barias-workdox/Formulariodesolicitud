import { jsxs as D, Fragment as j, jsx as t } from "react/jsx-runtime";
import { useState as s, useCallback as f } from "react";
import { StopOutline as q, SendAltFilled as F } from "@carbon/icons-react";
import { MessageBox as H } from "../../../../message-box/next/message-box.js";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as X } from "../../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { noop as V } from "../../../../../utils/noop.js";
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
import "../../../../message-box/next/styled-components/styled-addons-container.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as w } from "../../../../utils/i18n/utils.js";
import "../../../../message-box/next/components/text-editor-toolbar/styled-components/styled-container.js";
import "../../../../message-box/next/components/compact-message-box-actions/styled-components/styled-container.js";
import "../../../../message-box/next/providers/message-box.provider.js";
import { QuickActionsPlugin as G } from "../../../../message-box/next/plugins/quick-actions-plugin.js";
import { Notification as z } from "../../../../notification/next/notification.js";
import { Text as J } from "../../../../text/text.js";
import { CustomPromptAction as K } from "../../../constants/custom-prompt-modals.constants.js";
import { MESSAGE_MAX_LENGTH as W } from "../../../constants/webdox-ai.constants.js";
import "../../../constants/webdox-ai-regex.constants.js";
import { usePlanUsage as Y } from "../../../hooks/plan-usage.hook.js";
import { getUsagePlanData as Z } from "../../../utils/webdox-ai-plans.utils.js";
import "baseui/tooltip";
import "baseui/popover";
import "../../../../popover/popover.styles.js";
import "../../../../list/list.js";
import "../../../../list/virtualized-list.js";
import "../../../../list/components/avatar-list-item/avatar-list-item.js";
import "../../../../list/components/file-list-item/file-list-item.js";
import "../../../../list/components/list-item/list-item.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-empty-state-container.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-footer.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-popover-content.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-prompts-list.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-header.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-item-end-enhancer.js";
import "../../add-custom-prompt-button/components/custom-prompts-popover/styled-components/styled-list-container.js";
import "../../../../background-icon/background-icon.styles.js";
import { AddCustomPromptButtonContainer as tt } from "../../add-custom-prompt-button/add-custom-prompt-button.container.js";
import { UsagePlanCounter as ot } from "../../plan-usage/plan-usage-counter.js";
import { PromptQuickActions as it } from "../../prompt-quick-actions/prompt-quick-actions.js";
import { SuggestionsButton as rt } from "./components/suggestions-button/suggestions-button.js";
import { StyledExtraActionsContainer as mt } from "./styled-components/styled-extra-actions-container.js";
import { StyledUsagePlanContainer as pt } from "./styled-components/styled-usage-plan-container.js";
import "./styled-components/styled-settings-container.js";
import "./styled-components/styled-conversation-selector-wrapper.js";
const Do = ({
  "data-testid": a = "chat-composer",
  customPrompts: d = [],
  disabled: r,
  isGeneratingAnswer: l,
  isQuestionWritingAllowed: g = !0,
  isSuggestionsLoading: _ = !1,
  placeholder: y,
  showStopButton: B = !0,
  zIndex: C,
  onCreateMessage: m,
  onExecuteCustomPromptAction: h = V,
  onStopAnswerGeneration: S = V,
  onSuggestionsClick: $
}) => {
  const [v, p] = s(""), [P, x] = s(""), [U, c] = s(!1), [b, E] = s(!1), { t: n } = w(), { theme: e } = X(), { availablePlans: A, isPlanUsageActive: O } = Y(), { usageStatus: L, remainingRequests: T } = Z(A, "brain_companion"), u = !O || L !== "exhausted" && T !== 0, i = B && l, k = i ? !1 : r || l, I = !r && u && !b && !l, M = f(
    (o) => {
      x(o.HTMLValue), p(""), m == null || m(o.textValue);
    },
    [m]
  ), R = f(() => {
    S(), p(P), x("");
  }, [S, P]), N = f(
    (o) => {
      c(!1), h(K.Select, o), p(o.content);
    },
    [h]
  );
  return /* @__PURE__ */ D(j, { children: [
    /* @__PURE__ */ t(
      H,
      {
        autofocus: !0,
        "data-testid": `${a}__message-box`,
        width: "unset",
        margin: `${e.spacing.spacingMd} ${e.spacing.spacingMd} ${e.spacing.spacingXs}`,
        canSendWithEnter: I,
        isReadOnly: !g,
        onSubmit: i ? R : M,
        placeholder: y,
        defaultValue: v,
        disabled: r,
        maxLength: W,
        primaryButtonText: n(i ? "general.stop" : "general.send"),
        primaryButtonIcon: i ? /* @__PURE__ */ t(q, {}) : /* @__PURE__ */ t(F, {}),
        primaryButtonProps: {
          ...(i || k) && {
            disabled: k
          },
          ...!u && { disabled: !0 }
        },
        plugins: [
          G({
            customRender: (o) => /* @__PURE__ */ t(
              it,
              {
                filterValue: o,
                allOptions: d,
                handleChange: (Q) => p(Q),
                zIndex: C,
                isOpen: b,
                setIsOpen: E
              }
            )
          })
        ],
        addons: !u && /* @__PURE__ */ t(
          z,
          {
            kind: "negative",
            description: `${n("webdoxAI.planUsage.popovers.planTrial.notification")}`,
            size: "small",
            closeable: !1
          }
        ),
        extraActions: /* @__PURE__ */ D(mt, { children: [
          /* @__PURE__ */ t(
            tt,
            {
              customPrompts: d,
              dataTestId: `${a}__custom-prompts-button`,
              isEditingDisabled: g,
              isOpen: U,
              onClose: () => c(!1),
              onCustomPromptClick: N,
              onOpen: () => c(!0),
              zIndex: C
            }
          ),
          /* @__PURE__ */ t(
            rt,
            {
              dataTestId: a,
              isLoading: r || _,
              onClick: $
            }
          ),
          /* @__PURE__ */ t(pt, { children: O && /* @__PURE__ */ t(
            ot,
            {
              availablePlans: A,
              planName: "brain_companion"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      J,
      {
        variant: "microCopy",
        color: "neutralStrong",
        textAlign: "center",
        margin: `0 0 ${e.spacing.spacingMd}`,
        children: n("webdoxAI.assistantDisclaimer")
      }
    )
  ] });
};
export {
  Do as ChatComposer
};
//# sourceMappingURL=chat-composer.js.map
