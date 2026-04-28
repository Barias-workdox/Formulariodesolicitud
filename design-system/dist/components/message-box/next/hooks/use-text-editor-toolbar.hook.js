import { useMemo as u } from "react";
import { useCurrentEditor as f, useEditorState as g } from "@tiptap/react";
import { useMessageBoxContext as d } from "./use-message-box-context.hook.js";
const U = () => {
  const { disabled: e } = d(), { editor: n } = f(), r = g({
    editor: n,
    selector: ({ editor: l }) => l ? {
      canBold: (l.can().chain().toggleBold && l.can().chain().toggleBold().run()) ?? !1,
      canItalic: (l.can().chain().toggleItalic && l.can().chain().toggleItalic().run()) ?? !1,
      canUnderline: (l.can().chain().toggleUnderline && l.can().chain().toggleUnderline().run()) ?? !1,
      isBold: l.isActive("bold") ?? !1,
      isItalic: l.isActive("italic") ?? !1,
      isUnderline: l.isActive("underline") ?? !1
    } : null
  }), {
    isBold: a = !1,
    isItalic: c = !1,
    isUnderline: s = !1,
    canBold: i = !1,
    canItalic: t = !1,
    canUnderline: o = !1
  } = r || {};
  return u(
    () => ({
      isBold: a,
      isItalic: c,
      isUnderline: s,
      canBold: i,
      canItalic: t,
      canUnderline: o,
      disabled: e,
      handleBold: () => n == null ? void 0 : n.chain().focus().toggleBold().run(),
      handleItalic: () => n == null ? void 0 : n.chain().focus().toggleItalic().run(),
      handleUnderline: () => n == null ? void 0 : n.chain().focus().toggleUnderline().run()
    }),
    [n, a, c, s, i, t, o, e]
  );
};
export {
  U as useTextEditorToolbar
};
//# sourceMappingURL=use-text-editor-toolbar.hook.js.map
