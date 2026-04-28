import { jsx as r } from "react/jsx-runtime";
import { useRef as s } from "react";
import { FileDownloadManagerDragContext as m } from "../../contexts/file-download-manager-drag.context.js";
import { useFileDownloadManagerContext as d } from "../../hooks/use-file-download-manager-context.js";
import { useDraggableElement as f } from "../../../../hooks/use-draggable-element.hook.js";
import { StyledMainContentContainer as g } from "./main-content.container.styles.js";
const M = ({
  children: t
}) => {
  const {
    margin: e = 0,
    position: a = "BOTTOM",
    isDraggable: i = !1,
    status: o
  } = d(), n = s(null), { handlePointerDown: l } = f({
    elementRef: i ? n : null,
    margin: e,
    direction: "horizontal"
  });
  return /* @__PURE__ */ r(m.Provider, { value: { onPointerDown: l }, children: /* @__PURE__ */ r(
    g,
    {
      $margin: `${e}px`,
      $position: a,
      "data-testid": "file-download-manager--main-content-container",
      ref: n,
      role: o === "error" ? "alert" : "status",
      "aria-live": o === "error" ? "assertive" : "polite",
      children: t
    }
  ) });
};
export {
  M as FileDownloadManagerMainContentContainer
};
//# sourceMappingURL=main-content.container.js.map
