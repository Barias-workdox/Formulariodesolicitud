import { jsxs as b, jsx as i } from "react/jsx-runtime";
import { useState as P, useMemo as E } from "react";
import { Popover as T } from "baseui/popover";
import { CloseAction as $ } from "./components/close-action/close-action.js";
import { CopyAction as w } from "./components/copy-action/copy-action.js";
import { ExplainAction as B } from "./components/explain-action/explain-action.js";
import { TranslateAction as M } from "./components/translate-action/translate-action.js";
import { useTextSelection as V } from "./hooks/use-text-selection.hook.js";
import { StyledContainer as g, StyledButtonsContainer as j } from "./webdox-ai-document-viewer-wrapper.styles.js";
const k = {
  close: $,
  copy: w,
  explain: B,
  translate: M
}, G = ({
  "data-testid": t = "document-viewer-wrapper",
  actions: s,
  children: a,
  zIndex: r,
  onCopy: m,
  onExplain: d,
  onTranslate: u
}) => {
  const [f, l] = P(!1), { resetSelection: C, onMouseUp: x, selectedText: n, selectionPositionNode: h } = V({
    "data-testid": t,
    onResetSelection: () => l(!1),
    onSelectText: () => l(!0)
  }), c = E(() => s.filter(({ isVisible: e }) => e), [s]), o = () => {
    C();
  }, A = (e) => u(n, e), S = () => {
    d(n), o();
  };
  return /* @__PURE__ */ b(
    g,
    {
      "data-testid": t,
      onMouseUp: x,
      onAuxClick: o,
      onScrollCapture: o,
      children: [
        /* @__PURE__ */ i(
          T,
          {
            autoFocus: !1,
            isOpen: f,
            placement: "right",
            onClickOutside: o,
            onEsc: o,
            overrides: {
              Body: {
                style: {
                  zIndex: r
                }
              }
            },
            content: /* @__PURE__ */ i(j, { children: c.map(({ action: e, isDisabled: v }, p) => {
              const y = k[e];
              return /* @__PURE__ */ i(
                y,
                {
                  $isFirstChild: p === 0,
                  $isLastChild: p === c.length - 1,
                  "data-testid": `${t}--${e}`,
                  disabled: v,
                  onClose: o,
                  onCopy: m,
                  onTranslate: A,
                  onExplain: S,
                  selectedText: n,
                  zIndex: r
                },
                e
              );
            }) }),
            children: h
          }
        ),
        a
      ]
    }
  );
};
export {
  G as WebdoxAIDocumentViewerWrapper
};
//# sourceMappingURL=webdox-ai-document-viewer-wrapper.js.map
