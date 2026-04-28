import { jsx as o, jsxs as V, Fragment as Y } from "react/jsx-runtime";
import { useState as a } from "react";
import { ALLOWED_FILE_EXTENSIONS as Z } from "../../../../constants/contract-negotiation.constants.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../text/text.js";
import "../../../../../loading-wrapper/loading-wrapper.styles.js";
import "@carbon/icons-react";
import "../../../../../file-type-icon/file-type-icon.styles.js";
import "../../../../../layouts/title-layout/title-layout.styles.js";
import "baseui/select";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../../../select/select.overrides.js";
import "../../../../../background-icon/background-icon.styles.js";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "baseui/tooltip";
import "../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import { CollaborationLayout as I } from "../../../../layouts/collaboration-layout/collaboration.layout.js";
import { ContractNegotiationProvider as oo } from "../../../../logic/contexts/contract-negotiation.context.js";
import { BannerCollaboration as to } from "../../banner-collaboration/banner-collaboration.js";
import { CollaborationHeader as io } from "../../collaboration-header/collaboration-header.js";
import "baseui/tag";
import { ResponsibleHeaderOptions as ro } from "../../collaboration-header/components/responsible-header-options/responsible-header-options.js";
import { ContractNegotiationBodyContainer as mo } from "../../contract-negotiation-body/contract-negotiation-body.container.js";
import { useContractNegotiationTabs as po } from "../../hooks/use-contract-negotiation-tabs.hook.js";
import { LeftTabs as eo } from "../../left-tabs/left-tabs.js";
import { RightTabs as no } from "../../right-tabs/right-tabs.js";
import { FinalizeDrawerContainer as ao } from "../../../../containers/finalize-drawer.container.js";
import "react-hook-form";
import "baseui/form-control";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "../../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../../select/next/components/select-dropdown-container.js";
import "../../../../../select/next/components/select-optgroup-header.js";
import "../../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../color-picker/next/color-picker.js";
import "../../../../../checkbox/checkbox.js";
import "../../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../../avatar/avatar.styles.js";
import "../../../../../input/input.js";
import "../../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../tag/next/tag.styled-components.js";
import "baseui/drawer";
import "../../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import { CancelModalContainer as so } from "../../../../containers/cancel-modal.container.js";
const lo = ["activity", "comments", "documents", "history"], Jt = ({
  "data-testid": t = "contract-negotiation-third-party",
  allowedFileExtensions: s = Z,
  collaborationActivities: l,
  collaborationDetails: r,
  collaborationResponsible: c,
  collaborationSubtasks: f = [],
  currentThirdParty: d,
  customerName: C,
  enabledTabs: m = lo,
  isActivitiesLoading: h = !1,
  isDocumentPreviewLoading: b = !1,
  isLoading: O = !1,
  isSendMessageLoading: _ = !1,
  messages: g,
  selectedDocumentPreviewUrl: L,
  selectedDocumentAttachmentUrl: u,
  selectedDocumentVersions: w,
  stakeholders: F,
  headerAction: N,
  loadMoreActivities: T,
  loadMoreMessages: y,
  onApproveDocument: R,
  onChangeSelectedDocument: $,
  onChangeSelectedDocumentVersion: z,
  onDownloadDocument: A,
  onNewDocumentVersion: B,
  onSendMessage: D,
  onFinalize: E,
  onCancel: v,
  onTriggerActivityTab: H,
  onTriggerHistoryTab: S,
  onWriteNewDocumentVersion: x
}) => {
  const {
    isLeftTabsOpen: p,
    isRightTabsOpen: M,
    handleCloseLeftTabs: P,
    handleCloseRightTabs: j,
    handleOpenLeftTabs: U,
    handleOpenRightTabs: W
  } = po(), { name: X, status: i, finishedAt: k, cancelledAt: q } = r, G = i !== "active", J = i !== "active", [K, e] = a(!1), [Q, n] = a(!1);
  return /* @__PURE__ */ o(
    oo,
    {
      allowedFileExtensions: s,
      collaborationActivities: l,
      collaborationDetails: r,
      collaborationResponsible: c,
      collaborationSubtasks: f,
      currentThirdParty: d,
      isActivitiesLoading: h,
      isDocumentPreviewLoading: b,
      isLoading: O,
      isSendMessageLoading: _,
      messages: g,
      selectedDocumentPreviewUrl: L,
      selectedDocumentAttachmentUrl: u,
      selectedDocumentVersions: w,
      stakeholders: F,
      loadMoreActivities: T,
      loadMoreMessages: y,
      onApproveDocument: R,
      onChangeSelectedDocument: $,
      onChangeSelectedDocumentVersion: z,
      onDownloadDocument: A,
      onNewDocumentVersion: B,
      onSendMessage: D,
      onFinalize: E,
      onCancel: v,
      onTriggerActivityTab: H,
      onTriggerHistoryTab: S,
      onWriteNewDocumentVersion: x,
      children: /* @__PURE__ */ V(
        I,
        {
          showBanner: G,
          Header: /* @__PURE__ */ o(
            io,
            {
              collaborationName: X,
              customerName: C,
              status: i,
              action: N,
              options: J === !1 ? /* @__PURE__ */ o(
                ro,
                {
                  "data-testid": `${t}__header-options`,
                  onFinalize: () => e(!0),
                  onCancel: () => n(!0)
                }
              ) : /* @__PURE__ */ o(Y, {})
            }
          ),
          Banner: /* @__PURE__ */ o(
            to,
            {
              status: i,
              finishedAt: k,
              cancelledAt: q
            }
          ),
          children: [
            /* @__PURE__ */ o(
              eo,
              {
                "data-testid": `${t}__left-tabs`,
                enabledTabs: m,
                showPanels: p,
                showTabList: !p,
                onClose: P,
                onOpen: U
              }
            ),
            /* @__PURE__ */ o(
              mo,
              {
                "data-testid": `${t}__contract-negotiation-body`
              }
            ),
            /* @__PURE__ */ o(
              no,
              {
                "data-testid": `${t}__right-tabs`,
                enabledTabs: m,
                showPanels: M,
                onClose: j,
                onOpen: W
              }
            ),
            /* @__PURE__ */ o(
              ao,
              {
                "data-testid": `${t}__finalize`,
                isOpen: K,
                onClose: () => e(!1)
              }
            ),
            /* @__PURE__ */ o(
              so,
              {
                "data-testid": `${t}__cancel`,
                isOpen: Q,
                onClose: () => n(!1)
              }
            )
          ]
        }
      )
    }
  );
};
export {
  Jt as ContractNegotiationResponsible
};
//# sourceMappingURL=contract-negotiation-responsible.js.map
