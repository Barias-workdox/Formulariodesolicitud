import { jsx as o } from "react/jsx-runtime";
import { WarningFilled as d, CheckmarkFilled as g } from "@carbon/icons-react";
import { Alert as f } from "../../../../alert/alert.js";
import { Text as u } from "../../../../text/text.js";
import { useCss as x } from "../../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as b } from "../../../../utils/hooks/use-date-util-with-locale.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as v } from "../../../../utils/i18n/utils.js";
const r = {
  approved: {
    kind: "success",
    icon: {
      Icon: g,
      fill: "positive"
    },
    message: {
      text: "contractNegotiationCollaboration.bannerDocument.approved",
      color: "positiveStrong"
    }
  },
  pending: {
    kind: "warning",
    icon: {
      Icon: d,
      fill: "warning"
    },
    message: {
      text: "contractNegotiationCollaboration.bannerDocument.pending",
      color: "warningStrong"
    }
  }
}, L = ({
  status: n = "pending",
  approvedAt: i
}) => {
  const { theme: t } = x(), { formatDateAsText: e } = b(), { t: a } = v(), {
    kind: c,
    icon: { Icon: m, fill: l },
    message: { text: s, color: p }
  } = r[n] || r.approved;
  return /* @__PURE__ */ o(
    f,
    {
      kind: c,
      icon: /* @__PURE__ */ o(m, { color: t.colors[l] }),
      children: /* @__PURE__ */ o(
        u,
        {
          variant: "bodySmall",
          margin: 0,
          color: t.colors[p],
          children: a(s, { date: e(i, !0) })
        }
      )
    }
  );
};
export {
  L as BannerDocument
};
//# sourceMappingURL=banner-document.js.map
