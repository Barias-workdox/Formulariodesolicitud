import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { Notification as s } from "../../../notification/next/notification.js";
import { Text as r } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../utils/i18n/utils.js";
import { useCss as p } from "../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as d } from "../../../utils/hooks/use-date-util-with-locale.js";
import { styles as g } from "./deleted-document-alert.styles.js";
const W = ({ deletedAt: i }) => {
  const { alertContainerStyles: e, alertTitleContainerStyles: n, theme: o } = p(g), { formatDateAsText: a } = d(), { t: m } = c();
  return /* @__PURE__ */ t("div", { className: e, children: /* @__PURE__ */ t(
    s,
    {
      kind: "warning",
      description: /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t(
          r,
          {
            variant: "bodySmall",
            margin: 0,
            marginBottom: o.spacing.spacingXs,
            color: o.colors.warningStrong,
            children: m("collaborationDetails.deletedDocumentAlert.title")
          }
        ) }),
        /* @__PURE__ */ t(
          r,
          {
            variant: "bodySmall",
            fontWeight: "500",
            margin: 0,
            marginTop: o.spacing.spacingXs,
            color: o.colors.warningStrong,
            children: a(i, !0)
          }
        )
      ] }),
      closeable: !0
    }
  ) });
};
export {
  W as DeletedDocumentAlert
};
//# sourceMappingURL=deleted-document-alert.js.map
