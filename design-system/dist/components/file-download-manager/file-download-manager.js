import { jsx as i, jsxs as c } from "react/jsx-runtime";
import { useMemo as a, useCallback as f } from "react";
import { FileDownloadManagerBodyContainer as F } from "./containers/body/body.container.js";
import { FileDownloadManagerFooterContainer as p } from "./containers/footer/footer.container.js";
import { FileDownloadManagerHeaderContainer as M } from "./containers/header/header.container.js";
import { FileDownloadManagerMainContentContainer as u } from "./containers/main-content/main-content.container.js";
import { FileDownloadManagerProvider as C } from "./providers/file-download-manager.provider.js";
const k = (t) => {
  const { status: r = "idle", files: o, ...l } = t, n = a(() => Array.isArray(o) ? o : [o], [o]), s = a(
    () => n.reduce(
      (e, d) => e + (d.documentsToDownload ?? 0),
      0
    ),
    [n]
  ), m = f(
    (e) => {
      r === "finished" && (e == null || e());
    },
    [r]
  );
  return /* @__PURE__ */ i(
    C,
    {
      ...l,
      documentsToDownload: s,
      status: r,
      children: /* @__PURE__ */ c(u, { children: [
        /* @__PURE__ */ i(M, {}),
        /* @__PURE__ */ i(
          F,
          {
            handleFileClick: m,
            status: r,
            files: n
          }
        ),
        /* @__PURE__ */ i(p, {})
      ] })
    }
  );
};
export {
  k as FileDownloadManager
};
//# sourceMappingURL=file-download-manager.js.map
