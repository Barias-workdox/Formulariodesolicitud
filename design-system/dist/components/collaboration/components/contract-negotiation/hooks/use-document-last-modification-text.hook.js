import { useTranslation as f } from "../../../../utils/i18n/utils.js";
import { formatDateAsText as r } from "../../../../utils/strings/date.utils.js";
import { useLocale as A } from "../../../../../contexts/locale-provider/locale-provider.js";
import { useContractNegotiationContext as N } from "../../../logic/contexts/contract-negotiation.context.js";
const b = 1, $ = ({
  document: i,
  selectedDocumentVersion: s
}) => {
  const { collaborationResponsible: d } = N(), { locale: o } = A(), { t: e } = f(), { updatedAt: c, negotiable: l } = i, {
    versionNumber: u,
    user: p,
    updatedAt: m
  } = s ?? {}, { firstName: a, lastName: n } = p || d;
  let t = "";
  return !l || u === b ? t = e("contractNegotiationCollaboration.uploadedAt", {
    uploadedAt: r(c, o, !0),
    uploadedBy: `${a} ${n}`
  }) : t = e("contractNegotiationCollaboration.updatedAt", {
    updatedAt: r(m, o, !0),
    updatedBy: `${a} ${n}`
  }), { lastModificationText: t };
};
export {
  $ as useDocumentLastModificationText
};
//# sourceMappingURL=use-document-last-modification-text.hook.js.map
