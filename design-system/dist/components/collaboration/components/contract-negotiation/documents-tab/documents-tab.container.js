import { jsx as i } from "react/jsx-runtime";
import { useContractNegotiationContext as s } from "../../../logic/contexts/contract-negotiation.context.js";
import { DocumentsTab as u } from "./documents-tab.js";
const p = ({
  "data-testid": t = "documents-tab",
  onClose: e
}) => {
  const {
    isLoading: o,
    selectedDocument: { document: { id: n = -1 } } = { document: {} },
    readOnlyDocuments: c,
    negotiableDocuments: d,
    updateSelectedDocument: a
  } = s();
  return /* @__PURE__ */ i(
    u,
    {
      "data-testid": t,
      isLoading: o,
      negotiableDocuments: d,
      readOnlyDocuments: c,
      selectedDocumentId: n,
      onClick: (m) => {
        a(m);
      },
      onClose: e
    }
  );
};
export {
  p as DocumentsTabContainer
};
//# sourceMappingURL=documents-tab.container.js.map
