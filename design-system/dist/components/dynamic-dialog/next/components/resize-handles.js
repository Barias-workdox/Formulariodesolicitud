import { jsxs as i, Fragment as l, jsx as o } from "react/jsx-runtime";
import { ReactComponent as r } from "../../../../assets/icons/extend.svg.js";
import { PLACEMENT_MARGIN as m } from "../../../../constants/placement.constants.js";
import { RESIZE_DIRECTIONS as e } from "../../../../constants/resizable-element.constants.js";
import { useResizableElement as T } from "../../../../hooks/use-resizable-element/use-resizable-element.hook.js";
import { MIN_DIALOG_WIDTH as s, MIN_DIALOG_HEIGHT as h } from "../dynamic-dialog.constants.js";
import { StyledLeftHandle as f, StyledRightHandle as H, StyledTopHandle as p, StyledBottomHandle as R, StyledTopLeftCornerHandle as I, StyledTopRightCornerHandle as D, StyledBottomLeftCornerHandle as O, StyledBottomRightCornerHandle as P } from "./styled-components.js";
const C = ({
  containerRef: d,
  disabled: a = !1
}) => {
  const { handleResize: n } = T({
    elementRef: d,
    margin: m,
    minWidth: s,
    minHeight: h
  });
  return a ? null : /* @__PURE__ */ i(l, { children: [
    /* @__PURE__ */ o(
      f,
      {
        "data-testid": "left-handle",
        onPointerDown: (t) => n(t, [e.LEFT])
      }
    ),
    /* @__PURE__ */ o(
      H,
      {
        "data-testid": "right-handle",
        onPointerDown: (t) => n(t, [e.RIGHT])
      }
    ),
    /* @__PURE__ */ o(
      p,
      {
        "data-testid": "top-handle",
        onPointerDown: (t) => n(t, [e.TOP])
      }
    ),
    /* @__PURE__ */ o(
      R,
      {
        "data-testid": "bottom-handle",
        onPointerDown: (t) => n(t, [e.BOTTOM])
      }
    ),
    /* @__PURE__ */ o(
      I,
      {
        "data-testid": "top-left-corner-handle",
        onPointerDown: (t) => n(t, [e.TOP, e.LEFT])
      }
    ),
    /* @__PURE__ */ o(
      D,
      {
        "data-testid": "top-right-corner-handle",
        onPointerDown: (t) => n(t, [e.TOP, e.RIGHT])
      }
    ),
    /* @__PURE__ */ o(
      O,
      {
        "data-testid": "bottom-left-corner-handle",
        onPointerDown: (t) => n(t, [e.BOTTOM, e.LEFT]),
        children: /* @__PURE__ */ o(r, { style: { rotate: "90deg" } })
      }
    ),
    /* @__PURE__ */ o(
      P,
      {
        "data-testid": "bottom-right-corner-handle",
        onPointerDown: (t) => n(t, [e.BOTTOM, e.RIGHT]),
        children: /* @__PURE__ */ o(r, {})
      }
    )
  ] });
};
export {
  C as ResizeHandles
};
//# sourceMappingURL=resize-handles.js.map
