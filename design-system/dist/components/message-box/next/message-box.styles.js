import { getCustomScrollBarStyles as t } from "../../../themes/custom-scroll-bar.js";
const n = {
  editorContentStyles: (o, { $disabled: r }) => ({
    ...t(o),
    ...o.typography.ParagraphMedium,
    lineHeight: "24px",
    outline: "none",
    position: "relative",
    color: r ? o.colors.neutralDepressed : o.colors.neutralStrong,
    overflow: "auto",
    overflowX: "hidden",
    width: "100%",
    // Override Tiptap styles
    ".tiptap": {
      outline: "none"
    },
    // Override Tiptap placeholder styles
    ".ProseMirror p.is-empty::before": {
      content: "attr(data-placeholder)",
      color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
      pointerEvents: "none",
      position: "absolute"
    }
  })
};
export {
  n as styles
};
//# sourceMappingURL=message-box.styles.js.map
