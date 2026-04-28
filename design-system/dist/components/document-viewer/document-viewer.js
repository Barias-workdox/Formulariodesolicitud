import { jsx as o, jsxs as x } from "react/jsx-runtime";
import { useState as S, useCallback as n, useMemo as C } from "react";
import { DocumentViewer as E } from "@webdoxclm/document-viewer-front";
import { LoadingWrapper as L } from "../loading-wrapper/loading-wrapper.js";
import { Text as M } from "../text/text.js";
import { useCss as R } from "../utils/hooks/use-css.js";
import { useTranslation as N } from "../utils/i18n/utils.js";
import { useLocale as T } from "../../contexts/locale-provider/locale-provider.js";
import { styles as b } from "./document-viewer.styles.js";
const q = ({
  "data-testid": p = "document-viewer",
  url: r = "",
  isLoading: i = !1,
  kind: c = "online",
  pageNumber: d = -1,
  attachmentUrl: e = ""
}) => {
  const { documentStyles: w, containerStyles: V } = R(b), { t: h } = N(), { locale: P } = T(), [v, l] = S(!1), g = !r && !e || v, t = i, s = !t && g, a = !s && e && !i, y = !s && !a && !t && r, m = n(() => {
    l(!0);
  }, []), f = n(() => {
    l(!1);
  }, []), u = n(() => e, [e]), D = C(
    () => ({
      pdfNextPage: d,
      documentViewerType: c,
      pdfMaxWidth: 700,
      pdfVerticalScrollByDefault: !0,
      showPdfDownloadControl: !1,
      showPdfVerticalScrollControl: !1,
      pdfMinZoomLevel: 0.015,
      onFetchPdfViewer: u,
      onErrorPdfViewer: m,
      onSuccessPdfViewer: f
    }),
    [c, m, u, f, d]
  );
  return /* @__PURE__ */ o(L, { isLoading: t, children: /* @__PURE__ */ x("div", { className: V, children: [
    s && /* @__PURE__ */ o(
      M,
      {
        variant: "body",
        color: "contentPrimary",
        children: h("documentViewerModal.previewNotAvailable")
      }
    ),
    y && /* @__PURE__ */ o(
      "iframe",
      {
        "data-testid": `${p}--document`,
        title: "Document viewer",
        height: "100%",
        src: r,
        className: w,
        width: "100%"
      }
    ),
    a && /* @__PURE__ */ o(
      E,
      {
        language: P,
        uri: e,
        config: D
      }
    )
  ] }) });
};
export {
  q as DocumentViewer
};
//# sourceMappingURL=document-viewer.js.map
