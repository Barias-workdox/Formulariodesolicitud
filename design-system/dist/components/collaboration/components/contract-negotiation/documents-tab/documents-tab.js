import { jsxs as r, jsx as n } from "react/jsx-runtime";
import { useCss as C } from "../../../../utils/hooks/use-css.js";
import { useTranslation as T } from "../../../../utils/i18n/utils.js";
import { HeaderTab as g } from "../header-tab/header-tab.js";
import { DocumentsList as m } from "./components/documents-list/documents-list.js";
import "react";
import "baseui/tag";
import "baseui";
import "../../../../text/text.js";
import { styles as f } from "./documents-tab.styles.js";
const S = ({
  "data-testid": t = "documents-tab",
  isLoading: a = !1,
  negotiableDocuments: c,
  readOnlyDocuments: e,
  selectedDocumentId: i = -1,
  onClick: l,
  onClose: d
}) => {
  const { t: o } = T(), { tabContentStyles: b, documentsTabContainer: u } = C(f), s = (p) => {
    l(p);
  };
  return /* @__PURE__ */ r("div", { className: u, children: [
    /* @__PURE__ */ n(
      g,
      {
        "data-testid": t,
        title: o("contractNegotiationCollaboration.documentsTab.documents"),
        onClose: d
      }
    ),
    /* @__PURE__ */ r("div", { className: b, children: [
      /* @__PURE__ */ n(
        m,
        {
          dataTestId: `${t}__negotiable-documents`,
          listHeadingText: o("contractNegotiationCollaboration.documentsTab.negotiable"),
          selectedDocumentId: i,
          documents: c,
          isLoading: a,
          onClick: s
        }
      ),
      e.length > 0 && /* @__PURE__ */ n(
        m,
        {
          dataTestId: `${t}__readonly-documents`,
          listHeadingText: o("contractNegotiationCollaboration.documentsTab.background"),
          selectedDocumentId: i,
          documents: e,
          isLoading: a,
          onClick: s
        }
      )
    ] })
  ] });
};
export {
  S as DocumentsTab
};
//# sourceMappingURL=documents-tab.js.map
