import { jsx as l } from "react/jsx-runtime";
import { Tag as s } from "../../../../../../tag/tag.js";
import { useTranslation as d } from "../../../../../../utils/i18n/utils.js";
import { tagOverrides as c } from "./document-status-tag.styles.js";
const u = {
  pending: {
    kind: "warning",
    text: "collaborationDetails.documentStatus.pending",
    longText: "collaborationDetails.documentStatus.longPending"
  },
  approved: {
    kind: "positive",
    text: "collaborationDetails.documentStatus.approved",
    longText: "collaborationDetails.documentStatus.approved"
  },
  rejected: {
    kind: "negative",
    text: "collaborationDetails.documentStatus.rejected",
    longText: "collaborationDetails.documentStatus.rejected"
  }
}, v = ({
  status: t,
  useLongText: e = !1
}) => {
  const { t: o } = d(), { kind: n, text: a, longText: r } = u[t], i = e ? r : a;
  return /* @__PURE__ */ l(
    s,
    {
      kind: n,
      variant: "overlay",
      overrides: c(),
      children: o(i)
    }
  );
};
export {
  v as DocumentStatusTag
};
//# sourceMappingURL=document-status-tag.js.map
