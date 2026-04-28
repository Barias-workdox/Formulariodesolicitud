import { jsxs as F, Fragment as R, jsx as a } from "react/jsx-runtime";
import { useState as v, useMemo as k } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as q } from "../../../../utils/i18n/utils.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../text/text.js";
import "../../../../loading-wrapper/loading-wrapper.styles.js";
import "@carbon/icons-react";
import "../../../../file-type-icon/file-type-icon.styles.js";
import "../../../../layouts/title-layout/title-layout.styles.js";
import "baseui/select";
import "../../../../select/select.overrides.js";
import "../../../../background-icon/background-icon.styles.js";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "baseui/tooltip";
import "../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import { useContractNegotiationContext as z } from "../../../logic/contexts/contract-negotiation.context.js";
import "baseui/tag";
import "../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/popover";
import "../../../../popover/popover.styles.js";
import "baseui/tabs-motion";
import "baseui/list";
import "baseui/typography";
import "baseui/input";
import "../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "../../../../avatar/avatar.styles.js";
import "../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../messages/message-list/message-list.styles.js";
import "dompurify";
import "baseui/progress-steps";
import "../../../../activity-timeline/components/activity-item/components/activity-icon/activity-icon.constants.js";
import "../../../../file-icon/file-icon.js";
import "react-hook-form";
import "baseui/form-control";
import "baseui/textarea";
import "lodash";
import "../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../select/next/components/select-dropdown-container.js";
import "../../../../select/next/components/select-optgroup-header.js";
import "../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../color-picker/next/color-picker.js";
import "../../../../checkbox/checkbox.js";
import "../../../../file-uploader/file-uploader.js";
import "../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../dynamic-text-input/dynamic-text-input.js";
import "../../../../input/input.js";
import "../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../tag/next/tag.styled-components.js";
import "baseui/drawer";
import "../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/accordion";
import "../../../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import { NewDocumentVersionDrawerContainer as G } from "../../../containers/new-document-version-drawer.container.js";
import { DocumentApprovalDrawerContainer as H } from "../document-approval-drawer/document-approval-drawer.container.js";
import { useDocumentLastModificationText as I } from "../hooks/use-document-last-modification-text.hook.js";
import { ContractNegotiationBody as J } from "./contract-negotiation-body.js";
const It = ({
  "data-testid": r
}) => {
  const [f, e] = v(!1), [V, m] = v(!1), { t: n } = q(), {
    collaborationDetails: { status: c },
    isApprovalDisabled: N,
    isDocumentPreviewLoading: b,
    isLoading: p,
    selectedDocument: t,
    selectedDocumentPreviewUrl: g,
    selectedDocumentAttachmentUrl: C,
    selectedDocumentVersions: d,
    selectedVersion: l,
    updateSelectedDocumentVersion: h,
    onApproveDocument: O,
    onDownloadDocument: A,
    onNewDocumentVersion: x,
    onWriteNewDocumentVersion: S
  } = z(), {
    status: u,
    approvedAt: L = "",
    document: i = { fileExt: "doc", name: "", id: -1 }
  } = t || {}, { negotiable: s } = i, { uuid: D, versionNumber: M } = l || {}, { lastModificationText: w } = I({
    document: i,
    selectedDocumentVersion: l
  }), U = s && c === "active" && u !== "rejected", y = !s || c !== "active", _ = k(
    () => d.map(({ uuid: o, versionNumber: E }) => ({
      id: o,
      label: n("contractNegotiationCollaboration.version", { version: E })
    })),
    [n, d]
  ), j = D ? {
    id: D,
    label: n("contractNegotiationCollaboration.version", { version: M })
  } : void 0, B = () => {
    A(t);
  }, P = ({ comment: o }) => {
    O(t, { comment: o }, () => e(!1));
  }, T = (o) => {
    x(t, o, () => m(!1));
  }, W = ({ id: o }) => {
    h(String(o));
  }, $ = () => {
    S(t);
  };
  return /* @__PURE__ */ F(R, { children: [
    /* @__PURE__ */ a(
      H,
      {
        "data-testid": `${r}__document-approval`,
        document: i,
        documentLastModificationText: w,
        isLoading: p,
        isOpen: f,
        onClose: () => e(!1),
        onSubmit: P
      }
    ),
    /* @__PURE__ */ a(
      J,
      {
        "data-testid": r,
        disabled: N,
        document: i,
        documentApprovedAt: L,
        documentLastModificationText: w,
        documentPreviewUrl: g,
        documentAttachmentUrl: C,
        documentStatus: u,
        documentVersionOptions: _,
        isDocumentPreviewLoading: b,
        isLoading: p,
        readOnly: y,
        negotiableDocument: !s,
        selectedVersionOption: j,
        showBanner: U,
        handleOpenNewVersionDrawer: () => m(!0),
        onApproveDocument: () => e(!0),
        onChangeDocumentVersion: W,
        onDownloadDocument: B,
        handleWriteNewNewVersion: $
      }
    ),
    /* @__PURE__ */ a(
      G,
      {
        "data-testid": `${r}__new-version`,
        isOpen: V,
        isLoading: p,
        onClose: () => m(!1),
        onSubmit: T
      }
    )
  ] });
};
export {
  It as ContractNegotiationBodyContainer
};
//# sourceMappingURL=contract-negotiation-body.container.js.map
