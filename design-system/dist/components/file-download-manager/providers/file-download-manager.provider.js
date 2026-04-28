import { jsx as M } from "react/jsx-runtime";
import { useMemo as o } from "react";
import { FileDownloadManagerContext as u } from "../contexts/file-download-manager.context.js";
const c = ({
  children: p,
  documentsToDownload: r,
  isDraggable: e,
  margin: m,
  position: t,
  status: v,
  onCloseDownload: f,
  onGoToDownloads: i
}) => {
  const x = o(
    () => ({
      documentsToDownload: r,
      isDraggable: e,
      margin: m,
      position: t,
      status: v,
      onCloseDownload: f,
      onGoToDownloads: i
    }),
    [r, e, m, t, v, f, i]
  );
  return /* @__PURE__ */ M(u.Provider, { value: x, children: p });
};
export {
  c as FileDownloadManagerProvider
};
//# sourceMappingURL=file-download-manager.provider.js.map
