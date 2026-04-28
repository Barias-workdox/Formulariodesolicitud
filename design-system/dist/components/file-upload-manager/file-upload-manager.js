import { jsx as a, Fragment as T } from "react/jsx-runtime";
import { MainContentContainer as g } from "./containers/main-content.container.js";
import { TABS_OMITTED as u } from "./file-upload-manager.constants.js";
import { FileUploadManagerProvider as F } from "./providers/file-uploader-manager.provider.js";
function C({
  "data-testid": r = "file-upload-manager",
  files: e,
  status: t,
  isDraggable: o = !1,
  initialTab: i = "all",
  hiddenTabs: n = u,
  position: l = "BOTTOM",
  contentHelper: m = /* @__PURE__ */ a(T, {}),
  showContentHelper: d = !1,
  margin: f = 0,
  onCancelUpload: p,
  onRetryUpload: s,
  onCloseUpload: M
}) {
  return /* @__PURE__ */ a(
    F,
    {
      files: e,
      initialTab: i,
      status: t,
      isDraggable: o,
      hiddenTabs: n,
      contentHelper: m,
      showContentHelper: d,
      position: l,
      margin: f,
      onCancelUpload: p,
      onRetryUpload: s,
      onCloseUpload: M,
      children: /* @__PURE__ */ a(g, { "data-testid": r })
    }
  );
}
export {
  C as FileUploadManager
};
//# sourceMappingURL=file-upload-manager.js.map
