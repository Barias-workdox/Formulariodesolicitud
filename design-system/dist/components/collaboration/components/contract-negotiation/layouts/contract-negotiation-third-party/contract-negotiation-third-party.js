import { jsx as t, jsxs as X } from "react/jsx-runtime";
import { ALLOWED_FILE_EXTENSIONS as k } from "../../../../constants/contract-negotiation.constants.js";
import { CollaborationLayout as q } from "../../../../layouts/collaboration-layout/collaboration.layout.js";
import { ContractNegotiationProvider as z } from "../../../../logic/contexts/contract-negotiation.context.js";
import { BannerCollaboration as G } from "../../banner-collaboration/banner-collaboration.js";
import { CollaborationHeader as I } from "../../collaboration-header/collaboration-header.js";
import "react";
import "baseui/tag";
import "baseui";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "@carbon/icons-react";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/popover";
import "../../../../../popover/popover.styles.js";
import { ContractNegotiationBodyContainer as J } from "../../contract-negotiation-body/contract-negotiation-body.container.js";
import { useContractNegotiationTabs as K } from "../../hooks/use-contract-negotiation-tabs.hook.js";
import { LeftTabs as M } from "../../left-tabs/left-tabs.js";
import { RightTabs as Q } from "../../right-tabs/right-tabs.js";
const V = ["activity", "comments", "documents", "history"], Ut = ({
  "data-testid": o = "contract-negotiation-third-party",
  allowedFileExtensions: m = k,
  collaborationDetails: r,
  collaborationResponsible: e,
  collaborationSubtasks: p = [],
  currentThirdParty: s,
  customerName: l,
  enabledTabs: a = V,
  isDocumentPreviewLoading: c = !1,
  isLoading: f = !1,
  isSendMessageLoading: h = !1,
  isActivitiesLoading: d = !1,
  messages: b,
  selectedDocumentPreviewUrl: C,
  selectedDocumentAttachmentUrl: g,
  selectedDocumentVersions: T,
  stakeholders: L,
  collaborationActivities: _,
  headerAction: O,
  loadMoreActivities: y,
  loadMoreMessages: N,
  onApproveDocument: B,
  onChangeSelectedDocument: u,
  onChangeSelectedDocumentVersion: w,
  onDownloadDocument: A,
  onNewDocumentVersion: E,
  onSendMessage: P,
  onTriggerActivityTab: R,
  onTriggerHistoryTab: v,
  onWriteNewDocumentVersion: x
}) => {
  const {
    isLeftTabsOpen: n,
    isRightTabsOpen: S,
    handleCloseLeftTabs: $,
    handleCloseRightTabs: j,
    handleOpenLeftTabs: F,
    handleOpenRightTabs: H
  } = K(), { name: D, status: i, finishedAt: U, cancelledAt: W } = r;
  return /* @__PURE__ */ t(
    z,
    {
      allowedFileExtensions: m,
      collaborationDetails: r,
      collaborationResponsible: e,
      collaborationSubtasks: p,
      currentThirdParty: s,
      isDocumentPreviewLoading: c,
      isLoading: f,
      isSendMessageLoading: h,
      isActivitiesLoading: d,
      messages: b,
      selectedDocumentPreviewUrl: C,
      selectedDocumentAttachmentUrl: g,
      selectedDocumentVersions: T,
      stakeholders: L,
      collaborationActivities: _,
      loadMoreActivities: y,
      loadMoreMessages: N,
      onApproveDocument: B,
      onChangeSelectedDocument: u,
      onChangeSelectedDocumentVersion: w,
      onDownloadDocument: A,
      onNewDocumentVersion: E,
      onSendMessage: P,
      onTriggerActivityTab: R,
      onTriggerHistoryTab: v,
      onWriteNewDocumentVersion: x,
      children: /* @__PURE__ */ X(
        q,
        {
          showBanner: i !== "active",
          Header: /* @__PURE__ */ t(
            I,
            {
              collaborationName: D,
              customerName: l,
              status: i,
              action: O
            }
          ),
          Banner: /* @__PURE__ */ t(
            G,
            {
              status: i,
              finishedAt: U,
              cancelledAt: W
            }
          ),
          children: [
            /* @__PURE__ */ t(
              M,
              {
                "data-testid": `${o}__left-tabs`,
                enabledTabs: a,
                showPanels: n,
                showTabList: !n,
                onClose: $,
                onOpen: F
              }
            ),
            /* @__PURE__ */ t(
              J,
              {
                "data-testid": `${o}__contract-negotiation-body`
              }
            ),
            /* @__PURE__ */ t(
              Q,
              {
                "data-testid": `${o}__right-tabs`,
                enabledTabs: a,
                showPanels: S,
                onClose: j,
                onOpen: H
              }
            )
          ]
        }
      )
    }
  );
};
export {
  Ut as ContractNegotiationThirdParty
};
//# sourceMappingURL=contract-negotiation-third-party.js.map
