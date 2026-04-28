import { jsx as d } from "react/jsx-runtime";
import { Tag as l } from "../../../../tag/tag.js";
import { useDateUtilsWithLocale as c } from "../../../../utils/hooks/use-date-util-with-locale.js";
import { useTranslation as p } from "../../../../utils/i18n/utils.js";
const s = (t, o) => ({
  pending: {
    kind: "warning",
    text: t("collaborationDetails.updatedText.pending")
  },
  rejected: {
    kind: "negative",
    text: t("collaborationDetails.updatedText.rejected", { date: o })
  },
  approved: {
    kind: "positive",
    text: t("collaborationDetails.updatedText.approved", { date: o })
  }
}), g = ({
  status: t,
  date: o
}) => {
  const { t: e } = p(), { formatDate: a } = c(), n = a(o), { kind: i, text: r } = s(e, n)[t];
  return /* @__PURE__ */ d(
    l,
    {
      kind: i,
      variant: "overlay",
      children: r
    }
  );
};
export {
  g as CollaborationDocumentTag
};
//# sourceMappingURL=collaboration-document-tag.js.map
