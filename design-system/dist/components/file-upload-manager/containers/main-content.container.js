import { jsx as n, jsxs as g, Fragment as C } from "react/jsx-runtime";
import { useRef as l, useEffect as h } from "react";
import { useDraggableElement as E } from "../../../hooks/use-draggable-element.hook.js";
import { FileUploadManagerRoot as R } from "../components/file-upload-manager-root/file-upload-manager-root.js";
import { useFileUploadManagerContext as b } from "../hooks/use-file-uploader-manager-context.js";
import { FooterContainer as w } from "./footer.container.js";
import { TabsContentContainer as x } from "./tabs-content.container.js";
const H = ({ "data-testid": e }) => {
  const r = l(null), i = l(null), {
    files: m,
    status: d,
    showContentHelper: f,
    contentHelper: p,
    position: c,
    margin: a,
    isDraggable: s,
    onCloseUpload: u
  } = b(), { handlePointerDown: t } = E({
    elementRef: r,
    direction: "horizontal",
    margin: a
  });
  return h(() => {
    const o = i.current;
    if (o && s)
      return o.addEventListener("pointerdown", t), () => {
        o.removeEventListener("pointerdown", t);
      };
  }, [s, t]), /* @__PURE__ */ n(
    R,
    {
      "data-testid": e,
      initialState: !0,
      files: m,
      status: d,
      onCloseUpload: u,
      rootRef: r,
      headerRef: i,
      position: c,
      margin: a,
      children: f ? p : /* @__PURE__ */ g(C, { children: [
        /* @__PURE__ */ n(x, { dataTestId: `${e}__tabs-content` }),
        /* @__PURE__ */ n(w, { dataTestId: `${e}__footer` })
      ] })
    }
  );
};
export {
  H as MainContentContainer
};
//# sourceMappingURL=main-content.container.js.map
