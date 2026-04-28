import { jsxs as y, jsx as e } from "react/jsx-runtime";
import { useState as p, Fragment as w, useCallback as F } from "react";
import { BrainViewerModal as _ } from "../../../../../../brain-viewer-modal/brain-viewer-modal.js";
import { noop as $ } from "../../../../../../../../../utils/noop.js";
import { getOverride as f } from "../../../../../../../../../utils/overrides.utils.js";
import { ActionMenu as W } from "./components/action-menu/action-menu.js";
import { StyledContainer as g } from "./components/styled-container.js";
import { StyledFixedMenuContainer as j, StyledMenuContainer as A } from "./components/styled-menu-container.js";
import { StyledMarkdownWrapperViewer as I, StyledMarkdownWrapper as L } from "./components/styled-wrapper.js";
const P = ({
  "data-testid": t,
  children: n,
  isMenuVisible: M = !0,
  questionValue: u,
  zIndex: o,
  isFixed: c = !1,
  isViewerFullwidth: k = !1,
  copyText: i = !1,
  overrides: C = {},
  copyButtonTexts: a = {},
  setIsMenuHovered: l = $
}) => {
  const [b, m] = p(!1), [d, h] = p(""), {
    MarkdownElement: E,
    MarkdownElementViewer: V
  } = C, O = f(E) || w, S = f(V) || w, x = c ? j : A, s = F(
    (r) => {
      if (!r)
        return null;
      const v = i ? r.textContent || "" : new ClipboardItem({
        "text/html": new Blob([r.outerHTML || ""], {
          type: "text/html"
        })
      });
      h(v);
    },
    [i]
  );
  return /* @__PURE__ */ y(g, { children: [
    /* @__PURE__ */ e(
      _,
      {
        "data-testid": `${t}__markdown-viewer`,
        title: u,
        isOpen: b,
        clipboardItem: d,
        onClose: () => m(!1),
        copyButtonTexts: a,
        zIndex: o,
        children: /* @__PURE__ */ e(I, { $isFullWidth: k, children: /* @__PURE__ */ e(S, { ref: s, children: n }) })
      }
    ),
    /* @__PURE__ */ e(
      x,
      {
        $isVisible: M,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: /* @__PURE__ */ e(
          W,
          {
            "data-testid": `${t}__markdown-menu`,
            clipboardItem: d,
            onOpenTableViewer: () => m(!0),
            copyButtonTexts: a,
            zIndex: o
          }
        )
      }
    ),
    /* @__PURE__ */ e(L, { children: /* @__PURE__ */ e(O, { ref: s, children: n }) })
  ] });
};
export {
  P as MarkdownModal
};
//# sourceMappingURL=markdown-modal.js.map
