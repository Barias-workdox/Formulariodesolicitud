import { jsx as o } from "react/jsx-runtime";
import { Edit as U, TrashCan as s, UserFollow as R, DocumentAdd as S, Upload as V, WarningFilled as w, Misuse as M, Chat as P, Download as Y, View as y, CheckmarkFilled as C, Flag as k } from "@carbon/icons-react";
import "react";
import "baseui/progress-steps";
import "../../../../../../text/text.js";
import "baseui";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/utilities.js";
import { useDateUtilsWithLocale as F } from "../../../../../../utils/hooks/use-date-util-with-locale.js";
import "react-i18next";
import "../../../../../../background-icon/background-icon.styles.js";
import "../../../../../../activity-timeline/components/activity-item/components/activity-icon/activity-icon.constants.js";
import { ActivityComment as a } from "../../../../../../activity-timeline/components/activity-comment/activity-comment.js";
import { ActivityUsers as p } from "../../../../../../activity-timeline/components/activity-users/activity-users.js";
import { ActivityDocuments as A } from "../../../../../../activity-timeline/components/activity-documents/activity-documents.js";
import "baseui/modal";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "react-use";
import { TimelineActivity as W } from "../../../../../../timeline/components/timeline-activity/timeline-activity.js";
import { TimelineIcon as $ } from "../../../../../../timeline/components/timeline-icon/timeline-icon.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import { useTranslation as H } from "../../../../../../utils/i18n/utils.js";
import { CREATE_ACTIVITY as e, DOCUMENT_UPDATED_LOCALLY as x, DELETED_THIRD_PARTIES as B, NEW_THIRD_PARTIES as j, DELETED_DOCUMENTS as q, NEW_DOCUMENTS as z, COLLABORATION_DOCUMENT_VERSION_UPLOAD as G, COLLABORATION_APPROVALS_RESTART as J, CANCEL_ACTIVITY as K, COLLABORATION_COMMENT_ACTIVITY as Q, DOWNLOAD_DOCUMENT_ACTIVITY as X, VIEWED_DOCUMENT_ACTIVITY as Z, DOCUMENT_APPROVED_ACTIVITY as oo, FINISH_ACTIVITY as to } from "../../../../../constants/contract-negotiation.constants.js";
const t = {
  iconColor: "brand",
  backgroundColor: "brandSubtle"
}, io = ({
  comment: i = "",
  documents: r = [],
  thirdParties: n = []
}) => ({
  [e]: {
    ...t,
    Icon: k,
    title: "contractNegotiationCollaboration.collaborationActivities.create",
    children: /* @__PURE__ */ o(a, { comment: i })
  },
  [to]: {
    Icon: C,
    iconColor: "positive",
    backgroundColor: "positiveSubtle",
    title: "contractNegotiationCollaboration.collaborationActivities.finish",
    children: /* @__PURE__ */ o(a, { comment: i })
  },
  [oo]: {
    Icon: C,
    iconColor: "positive",
    backgroundColor: "positiveSubtle",
    title: "contractNegotiationCollaboration.collaborationActivities.documentApproved",
    children: /* @__PURE__ */ o(a, { comment: i })
  },
  [Z]: {
    ...t,
    Icon: y,
    title: "contractNegotiationCollaboration.collaborationActivities.viewedDocument"
  },
  [X]: {
    ...t,
    Icon: Y,
    title: "contractNegotiationCollaboration.collaborationActivities.downloadDocument"
  },
  [Q]: {
    ...t,
    Icon: P,
    title: "contractNegotiationCollaboration.collaborationActivities.collaborationComment",
    children: /* @__PURE__ */ o(a, { comment: i })
  },
  [K]: {
    Icon: M,
    iconColor: "negative",
    backgroundColor: "negativeSubtle",
    title: "contractNegotiationCollaboration.collaborationActivities.cancel",
    children: /* @__PURE__ */ o(a, { comment: i })
  },
  [J]: {
    Icon: w,
    iconColor: "warning",
    backgroundColor: "warningSubtle",
    title: "contractNegotiationCollaboration.collaborationActivities.approvalsRestart"
  },
  [G]: {
    ...t,
    Icon: V,
    title: "contractNegotiationCollaboration.collaborationActivities.versionUpload"
  },
  [z]: {
    ...t,
    Icon: S,
    title: "contractNegotiationCollaboration.collaborationActivities.newDocuments",
    children: /* @__PURE__ */ o(A, { documents: r })
  },
  [q]: {
    Icon: s,
    ...t,
    title: "contractNegotiationCollaboration.collaborationActivities.deletedDocuments",
    children: /* @__PURE__ */ o(A, { documents: r })
  },
  [j]: {
    Icon: R,
    ...t,
    title: "contractNegotiationCollaboration.collaborationActivities.newThirdParties",
    children: /* @__PURE__ */ o(p, { users: n })
  },
  [B]: {
    ...t,
    Icon: s,
    title: "contractNegotiationCollaboration.collaborationActivities.deletedThirdParties",
    children: /* @__PURE__ */ o(p, { users: n })
  },
  [x]: {
    ...t,
    Icon: U,
    title: "contractNegotiationCollaboration.collaborationActivities.documentUpdatedLocally"
  }
}), Fo = ({
  isLast: i,
  responsible: r,
  activity: {
    id: n,
    key: l,
    createdAt: b,
    owner: { firstName: d = "", lastName: I = "" } = { id: -1, email: "", firstName: "", lastName: "" },
    collaboration: { message: T = "" },
    parameters: {
      comment: N = "",
      documentName: v = "",
      documentVersion: c = 0,
      documents: E = [],
      thirdParties: D = []
    } = {}
  }
}) => {
  const { t: u } = H(), { formatDateAsText: g } = F(), m = {
    comment: l === e ? T : N,
    userFullName: l === e ? `${r.firstName} ${r.lastName}` : `${d} ${I}`,
    version: `${c}.0`,
    documentName: v,
    documents: E,
    documentVersion: c,
    thirdParties: D
  }, { title: O, Icon: _, iconColor: h, backgroundColor: L, children: f } = io(m)[l] || {
    title: ""
  };
  return /* @__PURE__ */ o(
    W,
    {
      isLast: i,
      title: u(O, m),
      subtitle: g(b, !0),
      indicator: /* @__PURE__ */ o(
        $,
        {
          "data-testid": `activity-${n}-icon`,
          Icon: _,
          iconColor: h,
          backgroundColor: L
        }
      ),
      children: f
    }
  );
};
export {
  Fo as HistoryElement
};
//# sourceMappingURL=history-element.js.map
