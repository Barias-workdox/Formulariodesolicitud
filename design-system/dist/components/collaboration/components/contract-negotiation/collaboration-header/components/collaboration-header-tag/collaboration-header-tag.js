import { jsx as r } from "react/jsx-runtime";
import { Tag as s } from "../../../../../../tag/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../../../../../utils/i18n/utils.js";
const t = {
  active: {
    kind: "accent",
    message: "collaborationDetails.status.active"
  },
  canceled: {
    kind: "negative",
    message: "collaborationDetails.status.canceled"
  },
  finished: {
    kind: "positive",
    message: "collaborationDetails.status.finished"
  }
}, T = ({ status: a }) => {
  const { t: i } = n(), { kind: o, message: e } = t[a] || t.active;
  return /* @__PURE__ */ r(
    s,
    {
      kind: o,
      variant: "overlay",
      children: i(e)
    }
  );
};
export {
  T as CollaborationHeaderTag
};
//# sourceMappingURL=collaboration-header-tag.js.map
