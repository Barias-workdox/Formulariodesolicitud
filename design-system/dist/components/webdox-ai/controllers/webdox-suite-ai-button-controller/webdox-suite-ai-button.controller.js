import { jsx as l } from "react/jsx-runtime";
import { useState as T, useMemo as p, useCallback as c, useEffect as F } from "react";
import { useToggle as J } from "react-use";
import { ariaKeyDownHandler as Q } from "../../../utils/accessibility.utils.js";
import { checkNotEmptyValue as V } from "../../../../utils/check-not-empty-value.util.js";
import { noop as E } from "../../../../utils/noop.js";
import "../../components/webdox-ai-button/webdox-ai-button.js";
import "baseui/popover";
import "baseui";
import "../../../text/text.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "@carbon/icons-react";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
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
import "../../../background-icon/background-icon.styles.js";
import "../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../../truncated-text/truncated-text.js";
import "../../components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import { WebdoxAIButtonInformationPopover as U } from "../../components/webdox-ai-button-information-popover/next/webdox-ai-button-information-popover.js";
import "../../components/assistant-layout/assistant-layout.js";
import "../../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../popover/popover.styles.js";
import { WebdoxAICollapsibleButton as X } from "../../components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import { WebdoxAIOption as Y } from "../../components/webdox-ai-collapsible-button/components/webdox-ai-option/webdox-ai-option.js";
import "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../data-table/data-table.styles.js";
import "../../components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../constants/placement.constants.js";
import "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../dynamic-dialog/next/components/styled-components.js";
import "../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../../tag/next/tag.styled-components.js";
import "../../../notification/next/notification.js";
import "../../contexts/plan-usage.context.js";
import "../../components/usage-overview-popover/usage-overview-popover.js";
import "../../components/text-rotator/text-rotator.styles.js";
import "../../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../../components/data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../components/data-extraction/data-extraction.styles.js";
import "../../components/data-extraction/styled-components/styled-container.js";
import "../../components/data-extraction/styled-components/styled-header.js";
import "../../components/data-extraction/styled-components/styled-content.js";
import "../../components/data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../components/webdox-ai-spinner/styled-components/styled-container.js";
import "../../components/brain-companion-layout/styled-components/styled-container.js";
import "../../components/brain-companion-layout/styled-components/styled-chat-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../../components/virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../components/virtualized-conversations-list/styled-components/styled-list.js";
import { StyledPlacementWrapper as Z } from "../../styled-components/styled-placement-wrapper.js";
import { LOADING_POPOVER_VARIANT_MAP as x, ACTIVE_POPOVER_VARIANT_MAP as z, ERROR_POPOVER_VARIANT_MAP as rr, GENERIC_ERROR_POPOVER_VARIANT_MAP as or } from "./webdox-suite-ai-button-controller.constants.js";
import { getPopoverOverrides as tr } from "./webdox-suite-ai-button-controller.styles.js";
const Pt = ({
  "data-testid": n,
  direction: A = "column",
  options: t,
  placement: u,
  popoverProps: W,
  user: k,
  zIndex: s,
  customLeft: D,
  customRight: M,
  onClickOption: R = E
}) => {
  const {
    onSubmit: B = E,
    sendTextValue: G,
    isDisabled: S,
    autoOpen: b = !0,
    onClose: h = E
  } = W ?? {}, [O, w] = J(!1), [K, m] = T(!1), [j, d] = T("suiteAIGreetings"), a = p(() => t.some(({ isLoading: r }) => r), [t]), I = p(() => t.some(({ errorType: r }) => !!r), [t]), L = p(
    () => t.every(
      ({ isLoading: r, disabled: o, errorType: i }) => !r && !o && !V(i)
    ),
    [t]
  ), $ = p(() => {
    if (!a) return;
    const [{ type: r }] = t;
    return t.length > 1 ? "suiteAIGreetings" : x[r];
  }, [a, t]), y = p(() => {
    const [{ type: r }] = t;
    return t.length > 1 ? "active" : z[r];
  }, [t]), H = p(
    () => tr({
      isCollapsibleButtonOpen: O,
      placement: u,
      direction: A,
      zIndex: s
    }),
    [A, O, u, s]
  ), f = c(
    ({ disabled: r, errorType: o, isLoading: i }) => !V(o) && !i && !r,
    []
  ), P = c(() => {
    m(!1), h();
  }, [h]), C = c(
    ({
      errorType: r,
      webdoxAIOption: o
    }) => {
      var i;
      return ((i = rr[o]) == null ? void 0 : i[r]) ?? or[o];
    },
    []
  ), g = c(
    (r, { type: o, errorType: i, isLoading: v, disabled: e }) => {
      if (r)
        return;
      if (V(i) || e) {
        const _ = C({ errorType: i, webdoxAIOption: o });
        d(_), m(!0);
        return;
      }
      if (v) {
        const _ = x[o];
        d(_), m(!0);
      }
    },
    [C]
  ), N = c(
    (r) => {
      const { type: o } = r;
      f(r) && (R(o), P());
    },
    [P, R, f]
  ), q = p(
    () => t.map((r) => {
      const { type: o, isLoading: i, disabled: v } = r, e = f(r);
      return /* @__PURE__ */ l(
        "div",
        {
          "data-testid": `${n}__option-wrapper-${o}`,
          role: e ? void 0 : "button",
          tabIndex: e ? void 0 : 0,
          onClick: () => g(e, r),
          onKeyDown: Q(() => g(e, r)),
          children: /* @__PURE__ */ l(
            Y,
            {
              "data-testid": `${n}--option-${o}`,
              type: o,
              zIndex: s,
              isLoading: i,
              disabled: v,
              onClick: () => N(r)
            }
          )
        },
        o
      );
    }),
    [
      n,
      g,
      N,
      t,
      f,
      s
    ]
  );
  return F(() => {
    if (I || !b) {
      m(!1);
      return;
    }
    if (a) {
      d($), m(!0);
      return;
    }
    L && (d(y), m(!0));
  }, [
    L,
    y,
    $,
    I,
    b,
    a
  ]), /* @__PURE__ */ l(
    Z,
    {
      $placement: u,
      $zIndex: s,
      $customLeft: D,
      $customRight: M,
      children: /* @__PURE__ */ l(
        U,
        {
          "data-testid": `${n}__popover`,
          placement: u,
          user: k,
          variant: j,
          isOpen: K,
          close: P,
          onSubmit: B,
          sendTextValue: G,
          isDisabled: S,
          overrides: H,
          children: /* @__PURE__ */ l(
            X,
            {
              dataTestId: `${n}__button`,
              options: q,
              direction: A,
              onToggle: w,
              isToggled: O,
              isLoading: a
            }
          )
        }
      )
    }
  );
};
export {
  Pt as WebdoxSuiteAIButtonController
};
//# sourceMappingURL=webdox-suite-ai-button.controller.js.map
