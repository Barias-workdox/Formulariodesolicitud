import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { forwardRef as H, useState as O } from "react";
import { TruncatedText as v } from "../../../truncated-text/truncated-text.js";
import { useCss as j } from "../../../utils/hooks/use-css.js";
import "../../../webdox-ai/components/webdox-ai-button/webdox-ai-button.js";
import "baseui/popover";
import "baseui";
import { getOverride as k, getOverrideProps as x } from "../../../../utils/overrides.utils.js";
import "../../../text/text.js";
import "@carbon/icons-react";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
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
import "../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
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
import "dompurify";
import "baseui/tag";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../../webdox-ai/components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../webdox-ai/components/assistant-layout/assistant-layout.js";
import "../../../webdox-ai/components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../popover/popover.styles.js";
import "../../../webdox-ai/components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../../webdox-ai/components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../data-table/data-table.styles.js";
import "../../../webdox-ai/components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../constants/placement.constants.js";
import "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../dynamic-dialog/next/components/styled-components.js";
import "../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import { AITag as B } from "../../../webdox-ai/components/ai-tag/ai-tag.js";
import "../../../notification/next/notification.js";
import "../../../webdox-ai/contexts/plan-usage.context.js";
import "react-is";
import "../../../tag/next/tag.styled-components.js";
import "../../../webdox-ai/components/usage-overview-popover/usage-overview-popover.js";
import "../../../webdox-ai/components/text-rotator/text-rotator.styles.js";
import "../../../webdox-ai/components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../../../webdox-ai/components/data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../../webdox-ai/components/data-extraction/data-extraction.styles.js";
import "../../../webdox-ai/components/data-extraction/styled-components/styled-container.js";
import "../../../webdox-ai/components/data-extraction/styled-components/styled-header.js";
import "../../../webdox-ai/components/data-extraction/styled-components/styled-content.js";
import "../../../webdox-ai/components/data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../../webdox-ai/components/webdox-ai-spinner/styled-components/styled-container.js";
import "../../../webdox-ai/components/brain-companion-layout/styled-components/styled-container.js";
import "../../../webdox-ai/components/brain-companion-layout/styled-components/styled-chat-container.js";
import "../../../webdox-ai/components/legal-whisper-layout/styled-components/styled-container.js";
import "../../../webdox-ai/components/legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../../webdox-ai/components/legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../../webdox-ai/components/legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../../../webdox-ai/components/virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../../webdox-ai/components/virtualized-conversations-list/styled-components/styled-list.js";
import { styles as u, StyledButtonRoot as M, StyledListItemRoot as N, propertiesBySize as h, StyledListItemInner as D, StyledListItemIconWrap as y, StyledListItemInfo as W } from "./list-item.styles.js";
const q = H(
  function({
    "data-testid": g,
    size: p = "md",
    $withBorderBottom: L,
    isActive: e = !1,
    details: i,
    disabled: s,
    endEnhancer: d,
    label: r,
    overrides: $,
    startEnhancer: l,
    tooltipProps: b,
    textProps: t,
    aiGenerated: S,
    onClick: a
  }, R) {
    const [C, c] = O(!1), { theme: T, labelContainer: w } = j(u), { Root: f } = $ || {}, m = a !== void 0, z = k(f) || (m ? M : N), I = {
      label: {
        variant: h[p].label,
        margin: 0,
        color: "inherit",
        ...t == null ? void 0 : t.label
      },
      details: {
        variant: h[p].details,
        margin: 0,
        $style: u.textDetails({
          $isClickable: m,
          $active: e,
          $isHovered: C,
          $disabled: s,
          theme: T
        }),
        ...t == null ? void 0 : t.details
      }
    };
    return /* @__PURE__ */ o(
      z,
      {
        role: m ? "button" : "listitem",
        "aria-selected": e,
        $disabled: s,
        $withBorderBottom: L,
        $size: p,
        $active: e,
        "data-testid": g,
        onClick: s ? void 0 : a,
        onMouseEnter: () => c(!0),
        onMouseLeave: () => c(!1),
        tabIndex: m ? 0 : void 0,
        ref: R,
        ...x(f),
        children: /* @__PURE__ */ n(D, { children: [
          l && /* @__PURE__ */ o(y, { children: l }),
          /* @__PURE__ */ n(W, { children: [
            typeof r == "string" ? /* @__PURE__ */ n("div", { className: w, children: [
              /* @__PURE__ */ o(
                v,
                {
                  tooltipProps: {
                    content: r,
                    showArrow: !0,
                    ...b
                  },
                  textProps: I.label,
                  zIndex: 10,
                  children: r
                }
              ),
              S && /* @__PURE__ */ o(
                B,
                {
                  variant: "light",
                  shape: "rounded",
                  size: "sm"
                }
              )
            ] }) : r,
            typeof i == "string" ? /* @__PURE__ */ o(
              v,
              {
                tooltipProps: {
                  content: i
                },
                textProps: I.details,
                zIndex: 5,
                children: i
              }
            ) : i
          ] }),
          d && /* @__PURE__ */ o(y, { children: d })
        ] })
      }
    );
  }
);
q.displayName = "ListItem";
export {
  q as ListItem
};
//# sourceMappingURL=list-item.js.map
