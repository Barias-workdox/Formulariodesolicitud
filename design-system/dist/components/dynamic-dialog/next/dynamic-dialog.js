import { jsx as i, jsxs as O } from "react/jsx-runtime";
import { useCallback as m, useMemo as P } from "react";
import { Layer as z } from "baseui/layer";
import { PLACEMENT_MARGIN as C } from "../../../constants/placement.constants.js";
import { useDraggableElement as U } from "../../../hooks/use-draggable-element.hook.js";
import { useResponsiveProps as b } from "../../../utils/use-responsive-props.util.js";
import { ResizeHandles as v } from "./components/resize-handles.js";
import { StyledDialogContainer as W } from "./components/styled-components.js";
import { DynamicDialogProvider as $ } from "./context/dynamic-dialog.context.js";
import { DIALOG_Z_INDEX as u, DEFAULT_DIALOG_WIDTH as j, DEFAULT_DIALOG_HEIGHT as k, MIN_DIALOG_WIDTH as X, MIN_DIALOG_HEIGHT as Z, DEFAULT_PLACEMENT as q } from "./dynamic-dialog.constants.js";
import { useDialogState as B } from "./hooks/use-dialog-state.hook.js";
import { useDialogStyles as J } from "./hooks/use-dialog-styles.hook.js";
import { useDialogFullViewport as K } from "./hooks/use-dialog-fullviewport.hook.js";
import { useDialogContext as Q } from "./hooks/use-dialog-context.hook.js";
import { useDialogResize as Y } from "./hooks/use-dialog-resize.hook.js";
import { useDynamicSizing as ee } from "./hooks/use-dynamic-sizing.hook.js";
const Ie = ({
  dataTestId: p = "dynamic-dialog",
  isOpen: D = !1,
  initialWidth: c = j,
  initialHeight: d = k,
  minWidth: w = X,
  minHeight: I = Z,
  maxWidth: V,
  maxHeight: L,
  placement: g = q,
  fullViewport: E,
  closable: _ = !0,
  draggable: t = !0,
  resizable: r = !0,
  zIndex: s,
  onClose: A,
  onFullViewportChange: T,
  children: h
}) => {
  const o = b({ medium: !1 }, !0), { fullViewport: e, close: M, updateFullViewport: n } = B({
    fullViewport: E,
    onClose: A,
    onFullViewportChange: T
  }), { width: y, height: F } = ee({
    initialWidth: c,
    initialHeight: d,
    minWidth: w,
    minHeight: I,
    fullViewport: e ?? !1,
    isMobile: o ?? !1
  }), { containerRef: l } = K({
    fullViewport: e ?? !1
  }), { handlePointerDown: a } = U({
    elementRef: t ? l : null,
    margin: C,
    parent: window
  }), G = m(
    (f) => {
      l.current && t && a(f);
    },
    [a, l, t]
  ), H = m(() => {
    n(!e);
  }, [e, n]), R = Q({
    fullViewport: e ?? !1,
    closable: _,
    draggable: t,
    resizable: r,
    isMobile: o ?? !1,
    toggleFullViewport: H,
    close: M,
    handleDragStart: G
  }), x = P(() => e ?? !1 ? u.FULL_VIEWPORT : s ?? u.DEFAULT, [e, s]), { shouldShowResizeHandles: S } = Y(
    r,
    e ?? !1,
    o ?? !1
  ), N = J({
    width: y,
    height: F,
    maxWidth: V,
    maxHeight: L,
    placement: g,
    fullViewport: e ?? !1,
    isMobile: o ?? !1
  });
  return D ? /* @__PURE__ */ i(z, { children: /* @__PURE__ */ i($, { value: R, children: /* @__PURE__ */ O(
    W,
    {
      ref: l,
      "data-testid": p,
      $fullViewport: e ?? !1,
      $zIndex: x,
      $isMobile: o ?? !1,
      style: N,
      children: [
        h,
        /* @__PURE__ */ i(
          v,
          {
            containerRef: l,
            disabled: !S
          }
        )
      ]
    }
  ) }) }) : null;
};
export {
  Ie as DynamicDialog
};
//# sourceMappingURL=dynamic-dialog.js.map
