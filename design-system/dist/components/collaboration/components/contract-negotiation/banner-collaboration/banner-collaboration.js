import { jsx as r } from "react/jsx-runtime";
import { CheckmarkFilled as b, ErrorFilled as g } from "@carbon/icons-react";
import { Alert as h } from "../../../../alert/alert.js";
import { Text as u } from "../../../../text/text.js";
import { useCss as x } from "../../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as C } from "../../../../utils/hooks/use-date-util-with-locale.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as k } from "../../../../utils/i18n/utils.js";
const n = ({
  cancelledAt: t,
  finishedAt: o
}) => ({
  canceled: {
    kind: "error",
    icon: {
      Icon: g,
      fill: "negativeSubdued"
    },
    message: {
      text: "contractNegotiationCollaboration.bannerCollaboration.canceled",
      date: t,
      color: "negativeStrong"
    }
  },
  finished: {
    kind: "success",
    icon: {
      Icon: b,
      fill: "positive"
    },
    message: {
      text: "contractNegotiationCollaboration.bannerCollaboration.finished",
      date: o,
      color: "positiveStrong"
    }
  }
}), W = ({
  status: t,
  finishedAt: o,
  cancelledAt: i
}) => {
  const { theme: e } = x(), { formatDateAsText: a } = C(), { t: l } = k(), {
    kind: c,
    icon: { Icon: s, fill: m },
    message: { text: d, date: p, color: f }
  } = n({
    cancelledAt: i,
    finishedAt: o
  })[t] || n({
    cancelledAt: i,
    finishedAt: o
  }).finished;
  return /* @__PURE__ */ r(
    h,
    {
      kind: c,
      icon: /* @__PURE__ */ r(s, { color: e.colors[m] }),
      children: /* @__PURE__ */ r(
        u,
        {
          variant: "bodySmall",
          margin: 0,
          color: e.colors[f],
          children: l(d, { date: a(p, !0) })
        }
      )
    }
  );
};
export {
  W as BannerCollaboration
};
//# sourceMappingURL=banner-collaboration.js.map
