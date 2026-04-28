import { jsx as f } from "react/jsx-runtime";
import { useState as c } from "react";
import { DEFAULT_TEXT_SELECTION_POSITION as e, TEXT_SELECTION_MARGIN as a } from "../webdox-ai-document-viewer-wrapper.constants.js";
import { SelectionPositionNode as g } from "../webdox-ai-document-viewer-wrapper.styles.js";
const P = ({
  "data-testid": l,
  onSelectText: r,
  onResetSelection: p
}) => {
  const [n, d] = c(
    e
  ), [S, T] = c("");
  return {
    selectedText: S,
    onMouseUp: () => {
      const t = window.getSelection(), i = t == null ? void 0 : t.toString().trim();
      if (t && i !== "") {
        const o = t.getRangeAt(0).getBoundingClientRect();
        r();
        const s = o.top - a;
        d({
          top: s > e.top ? s : e.top,
          left: o.left > e.left ? o.left : e.left
        }), T(i);
      }
    },
    resetSelection: () => {
      var t;
      p(), (t = window.getSelection()) == null || t.removeAllRanges();
    },
    selectionPositionNode: /* @__PURE__ */ f(
      g,
      {
        "data-testid": `${l}--selection-position-node`,
        $left: n.left,
        $top: n.top
      }
    )
  };
};
export {
  P as useTextSelection
};
//# sourceMappingURL=use-text-selection.hook.js.map
