import { jsxs as a, jsx as l } from "react/jsx-runtime";
import { useMessageBoxContext as m } from "../../hooks/use-message-box-context.hook.js";
import "react";
import "@tiptap/react";
import "../../styled-components/styled-root.js";
import { StyledMessageBoxContainer as c } from "../../styled-components/styled-message-box-container.js";
import { StyledTextareaContainer as u } from "../../styled-components/styled-textarea-container.js";
import "../../styled-components/styled-addons-container.js";
const F = ({ actions: r, variant: e = "default" }) => {
  const { disabled: o, editorContentNode: s, isFocused: i, isHovered: n, setIsFocused: d, setIsHovered: t } = m();
  return /* @__PURE__ */ a(
    c,
    {
      $isFocused: i,
      $isHovered: n,
      $disabled: o,
      $variant: e,
      onClick: () => {
        o || d(!0);
      },
      onMouseEnter: () => t(!0),
      onMouseLeave: () => t(!1),
      children: [
        /* @__PURE__ */ l(u, { $variant: e, children: s }),
        r
      ]
    }
  );
};
export {
  F as TextEditor
};
//# sourceMappingURL=text-editor.js.map
