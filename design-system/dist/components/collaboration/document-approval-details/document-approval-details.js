import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { useState as n, useMemo as u } from "react";
import "baseui/block";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { TableDivisionLine as D } from "../../table/components/table-layout/table-layout.js";
import "baseui/typography";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "../../table/components/table-header/table-header-container.js";
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import { useCss as a } from "../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "../../text/text.js";
import "../../table/components/table-actions/table-actions-layout.js";
import { getSubtasks as f } from "../collaboration.utils.js";
import { DeletedDocumentAlert as A } from "./deleted-document-alert/deleted-document-alert.js";
import { DocumentApprovalDetailsLastUpdate as v } from "./document-approval-details-last-update/document-approval-details-last-update.js";
import { DocumentApprovalDetailsList as S } from "./document-approval-details-list/document-approval-details-list.js";
import { DocumentApprovalDetailsSelector as b } from "./document-approval-details-selector/document-approval-details-selector.js";
import { styles as x } from "./document-approval-details.styles.js";
const it = ({
  invitations: e = [],
  subtasks: m = []
}) => {
  const { wrapper: s } = a(x), [r, l] = n([]), [{ deletedAt: i = void 0, id: c = null } = {}] = r, p = i !== void 0, o = u(() => f(e, m), [e, m]);
  return /* @__PURE__ */ d("div", { className: s, children: [
    /* @__PURE__ */ t(
      b,
      {
        documentSelected: r,
        setDocumentSelected: l,
        subtasks: o
      }
    ),
    /* @__PURE__ */ t(
      v,
      {
        subtasks: o,
        showSubtitleText: !p
      }
    ),
    p && /* @__PURE__ */ t(A, { deletedAt: i }),
    /* @__PURE__ */ t(D, {}),
    /* @__PURE__ */ t(
      S,
      {
        subtasks: o,
        selectedDocumentId: c
      }
    )
  ] });
};
export {
  it as DocumentApprovalDetails
};
//# sourceMappingURL=document-approval-details.js.map
