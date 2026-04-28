import { jsx as A } from "react/jsx-runtime";
import { useState as S, useMemo as T } from "react";
import { FileUploadManagerContext as b } from "../contexts/file-uploader-manager.context.js";
const z = ({
  children: F,
  files: r,
  initialTab: P,
  hiddenTabs: t,
  isDraggable: m,
  status: e,
  contentHelper: v,
  showContentHelper: o,
  position: c,
  margin: i,
  onRetryUpload: u,
  onCancelUpload: x,
  onCloseUpload: M
}) => {
  const [a, f] = S(P), j = T(
    () => ({
      files: r,
      activeTab: a,
      isDraggable: m,
      status: e,
      hiddenTabs: t,
      contentHelper: v,
      showContentHelper: o,
      position: c,
      margin: i,
      setActiveTab: f,
      onRetryUpload: u,
      onCancelUpload: x,
      onCloseUpload: M
    }),
    [
      r,
      a,
      m,
      e,
      t,
      v,
      o,
      c,
      i,
      f,
      u,
      x,
      M
    ]
  );
  return /* @__PURE__ */ A(b.Provider, { value: j, children: F });
};
export {
  z as FileUploadManagerProvider
};
//# sourceMappingURL=file-uploader-manager.provider.js.map
