import { jsx as X } from "react/jsx-runtime";
import { createContext as Y, useState as g, useMemo as n, useEffect as A, useContext as Z } from "react";
import { DISABLED_RESOURCE_STATUSES as $ } from "../../constants/contract-negotiation.constants.js";
import { getActivityDocuments as k } from "../business/contract-negotiation.business.js";
const y = Y({
  activityDocuments: [],
  allowedFileExtensions: {
    extensions: [],
    names: ""
  },
  collaborationDetails: {
    name: "",
    status: "active",
    createdAt: "",
    updatedAt: "",
    cancelledAt: null,
    finishedAt: null,
    message: ""
  },
  collaborationResponsible: {
    id: -1,
    firstName: "",
    lastName: "",
    email: ""
  },
  currentThirdParty: {
    email: "",
    firstName: "",
    id: -1,
    lastName: ""
  },
  isApprovalDisabled: !1,
  isDocumentPreviewLoading: !1,
  isLoading: !1,
  isSendMessageLoading: !1,
  isActivitiesLoading: !1,
  messages: [],
  negotiableDocuments: [],
  readOnlyDocuments: [],
  selectedDocument: void 0,
  selectedDocumentPreviewUrl: void 0,
  selectedDocumentVersions: void 0,
  selectedVersion: void 0,
  stakeholders: [],
  collaborationActivities: [],
  loadMoreMessages: () => {
  },
  loadMoreActivities: () => {
  },
  onApproveDocument: () => {
  },
  onDownloadDocument: () => {
  },
  onNewDocumentVersion: () => {
  },
  onSendMessage: async () => ({ isSuccess: !0 }),
  updateSelectedDocument: () => {
  },
  updateSelectedDocumentVersion: () => {
  },
  onFinalize: () => {
  },
  onTriggerActivityTab: () => {
  },
  onTriggerHistoryTab: () => {
  },
  onWriteNewDocumentVersion: () => {
  }
}), ie = ({
  children: S,
  allowedFileExtensions: N,
  collaborationActivities: w,
  collaborationDetails: x,
  collaborationResponsible: T,
  collaborationSubtasks: r,
  currentThirdParty: m,
  isActivitiesLoading: P = !1,
  isDocumentPreviewLoading: b = !1,
  isLoading: C = !1,
  isSendMessageLoading: E = !1,
  messages: M,
  selectedDocumentPreviewUrl: V,
  selectedDocumentAttachmentUrl: L,
  selectedDocumentVersions: c = [],
  stakeholders: R,
  loadMoreActivities: O,
  loadMoreMessages: U,
  onApproveDocument: h,
  onChangeSelectedDocument: d,
  onChangeSelectedDocumentVersion: f,
  onDownloadDocument: F,
  onNewDocumentVersion: I,
  onSendMessage: _,
  onFinalize: j,
  onCancel: z,
  onTriggerActivityTab: B,
  onTriggerHistoryTab: H,
  onWriteNewDocumentVersion: W
}) => {
  const [s, l] = g(), [q, D] = g(), { id: v } = m, G = n(() => {
    const { status: e } = s || {};
    return $.includes(e);
  }, [s]), a = n(
    () => r.filter(
      ({ thirdParty: { id: e } }) => e === v
    ),
    [r, v]
  ), i = n(
    () => a.reduce((e, { resources: t }) => {
      const o = t.filter(
        ({ document: { negotiable: u = !1 } }) => u
      );
      return [...e, ...o];
    }, []),
    [a]
  ), p = n(
    () => a.reduce((e, { resources: t }) => {
      const o = t.filter(
        ({ document: { negotiable: u = !1 } }) => !u
      );
      return [...e, ...o];
    }, []),
    [a]
  ), J = n(
    () => k(i, r),
    [i, r]
  ), K = (e) => {
    const t = [...p, ...i].find(
      ({ document: { id: o } }) => o === e
    );
    d(t), l(t);
  }, Q = (e) => {
    const t = c.find(({ uuid: o }) => o === e);
    f(t), D(t);
  };
  return A(() => {
    const [e] = i;
    if (s === void 0)
      d(e), l(e);
    else {
      const t = i.find(({ id: o }) => o === (s == null ? void 0 : s.id));
      d(t), l(t);
    }
  }, [i]), A(() => {
    const [e] = c;
    e && (D(e), f(e));
  }, [c, s]), /* @__PURE__ */ X(
    y.Provider,
    {
      value: {
        activityDocuments: J,
        allowedFileExtensions: N,
        collaborationDetails: x,
        collaborationResponsible: T,
        currentThirdParty: m,
        isApprovalDisabled: G,
        isDocumentPreviewLoading: b,
        isLoading: C,
        isSendMessageLoading: E,
        isActivitiesLoading: P,
        messages: M,
        negotiableDocuments: i,
        readOnlyDocuments: p,
        selectedDocument: s,
        selectedDocumentPreviewUrl: V,
        selectedDocumentAttachmentUrl: L,
        selectedDocumentVersions: c,
        selectedVersion: q,
        stakeholders: R,
        collaborationActivities: w,
        loadMoreMessages: U,
        loadMoreActivities: O,
        onApproveDocument: h,
        onDownloadDocument: F,
        onNewDocumentVersion: I,
        onSendMessage: _,
        updateSelectedDocument: K,
        updateSelectedDocumentVersion: Q,
        onFinalize: j,
        onCancel: z,
        onTriggerActivityTab: B,
        onTriggerHistoryTab: H,
        onWriteNewDocumentVersion: W
      },
      children: S
    }
  );
}, ne = () => Z(y);
export {
  y as ContractNegotiationContext,
  ie as ContractNegotiationProvider,
  ne as useContractNegotiationContext
};
//# sourceMappingURL=contract-negotiation.context.js.map
