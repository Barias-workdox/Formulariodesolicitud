import { jsxs as u, jsx as t } from "react/jsx-runtime";
import { useMemo as c } from "react";
import { FileIcon as h } from "../../../file-icon/file-icon.js";
import { Text as s } from "../../../text/text.js";
import { useCss as d } from "../../../utils/hooks/use-css.js";
import { TitleLayout as b } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { StatefulTooltip as g } from "../../../tooltip/stateful-tooltip.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as y } from "../../../utils/i18n/utils.js";
import { styles as l } from "./activity-documents.styles.js";
const p = ({ title: o, documents: r = [] }) => {
  const { documentContainerStyles: m, documentStyles: i, theme: n } = d(l);
  return /* @__PURE__ */ u("div", { className: m, children: [
    /* @__PURE__ */ t(
      s,
      {
        margin: 0,
        color: "neutral",
        variant: "bodySmall",
        $style: l.titleStyles(n),
        children: o
      }
    ),
    r.map(({ id: e, name: a, fileExt: f }) => /* @__PURE__ */ t(
      "div",
      {
        className: i,
        children: /* @__PURE__ */ t(
          b,
          {
            startEnhancer: /* @__PURE__ */ t(
              h,
              {
                fileExtension: f,
                height: "24px",
                width: "24px"
              }
            ),
            titleText: /* @__PURE__ */ t(
              g,
              {
                showArrow: !0,
                placement: "bottom",
                content: a,
                children: /* @__PURE__ */ t(
                  s,
                  {
                    margin: 0,
                    variant: "bodySmall",
                    fontWeight: "400",
                    color: "neutralSubdued",
                    children: a
                  }
                )
              }
            )
          }
        )
      },
      `activity-document-${o}-${e}`
    ))
  ] });
}, q = ({ documents: o = [] }) => {
  const { t: r } = y(), { containerStyles: m } = d(l), i = c(
    () => o.filter(({ negotiable: e = !1 }) => e),
    [o]
  ), n = c(
    () => o.filter(({ negotiable: e = !1 }) => !e),
    [o]
  );
  return /* @__PURE__ */ u("div", { className: m, children: [
    i.length > 0 && /* @__PURE__ */ t(
      p,
      {
        title: r("contractNegotiationCollaboration.documentsTab.negotiable"),
        documents: i
      }
    ),
    n.length > 0 && /* @__PURE__ */ t(
      p,
      {
        title: r("contractNegotiationCollaboration.documentsTab.background"),
        documents: n
      }
    )
  ] });
};
export {
  q as ActivityDocuments
};
//# sourceMappingURL=activity-documents.js.map
