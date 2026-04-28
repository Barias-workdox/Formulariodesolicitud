import { jsx as e, jsxs as c, Fragment as N } from "react/jsx-runtime";
import { useRef as L, useMemo as M } from "react";
import { Draggable as _ } from "@carbon/icons-react";
import { ReactComponent as g } from "../../../../assets/icons/extend.svg.js";
import { DEFAULT_RESIZABLE_CONTAINER_VALUES as b, CONTAINER_TRANSITION as A } from "../../dynamic-dialog.constants.js";
import { fullViewportStyles as u } from "../../dynamic-dialog.styles.js";
import { calcContainerPlacements as B } from "../../utils/calc-container-placements.util.js";
import { useCss as x } from "../../../utils/hooks/use-css.js";
import { COMMON_ICON_SIZE_16 as R } from "../../../../constants/common.constants.js";
import { PLACEMENT_MARGIN as S, PLACEMENT as z } from "../../../../constants/placement.constants.js";
import { RESIZE_DIRECTIONS as o } from "../../../../constants/resizable-element.constants.js";
import { useDraggableElement as F } from "../../../../hooks/use-draggable-element.hook.js";
import { useResizableElement as G } from "../../../../hooks/use-resizable-element/use-resizable-element.hook.js";
import { StyledBottomHandle as W } from "./styled-components/styled-bottom-handle.js";
import { StyledBottomLeftCornerHandle as $ } from "./styled-components/styled-bottom-left-corner-handle.js";
import { StyledBottomRightCornerHandle as Z } from "./styled-components/styled-bottom-right-corner-handle.js";
import { StyledContent as j } from "./styled-components/styled-content.js";
import { StyledContainer as U } from "./styled-components/styled-container.js";
import { StyledLeftHandle as v } from "./styled-components/styled-left-handle.js";
import { StyledRightHandle as k } from "./styled-components/styled-right-handle.js";
import { StyledTopHandle as q } from "./styled-components/styled-top-handle.js";
import { StyledTopLeftCornerHandle as J } from "./styled-components/styled-top-left-corner-handle.js";
import { StyledTopRightCornerHandle as K } from "./styled-components/styled-top-right-corner-handle.js";
import { StyledDragHandlerContainer as Q } from "./styled-components/styled-drag-handler-container.js";
import { StyledChildrenWrapper as X } from "./styled-components/styled-children-wrapper.js";
const yt = ({
  "data-testid": E = "resizable-container",
  children: C,
  placement: i = z.BOTTOM_RIGHT,
  zIndex: O,
  fullViewport: n = !1,
  initialBottom: h,
  initialLeft: f,
  initialRight: p,
  initialTop: T,
  ...P
}) => {
  const { initialHeight: d, initialWidth: a, maxHeight: y, maxWidth: H, minHeight: m, minWidth: l } = {
    ...b,
    ...P
  }, { theme: I } = x(), s = L(null), { handlePointerDown: D } = F({
    elementRef: s,
    margin: S,
    parent: window
  }), { handleResize: r } = G({
    elementRef: s,
    margin: n ? 0 : S
  }), w = M(
    () => B({
      initialHeight: d,
      initialWidth: a,
      minHeight: m,
      minWidth: l,
      initialBottom: h,
      initialLeft: f,
      initialRight: p,
      initialTop: T
    })[i],
    [
      h,
      d,
      f,
      p,
      T,
      a,
      m,
      l,
      i
    ]
  );
  return /* @__PURE__ */ e(
    U,
    {
      "data-testid": E,
      ref: s,
      $placement: i,
      $zIndex: O,
      $fullViewport: n,
      style: {
        height: d,
        width: a,
        minWidth: l,
        maxWidth: H,
        minHeight: m,
        maxHeight: y,
        transition: A,
        ...w,
        ...n && u
      },
      children: /* @__PURE__ */ c(j, { children: [
        !n && /* @__PURE__ */ c(N, { children: [
          /* @__PURE__ */ e(
            v,
            {
              "data-testid": "left-handle",
              onPointerDown: (t) => r(t, [o.LEFT])
            }
          ),
          /* @__PURE__ */ e(
            k,
            {
              "data-testid": "right-handle",
              onPointerDown: (t) => r(t, [o.RIGHT])
            }
          ),
          /* @__PURE__ */ e(
            q,
            {
              "data-testid": "top-handle",
              onPointerDown: (t) => r(t, [o.TOP])
            }
          ),
          /* @__PURE__ */ e(
            W,
            {
              "data-testid": "bottom-handle",
              onPointerDown: (t) => r(t, [o.BOTTOM])
            }
          ),
          /* @__PURE__ */ e(
            J,
            {
              "data-testid": "top-left-corner-handle",
              onPointerDown: (t) => r(t, [o.TOP, o.LEFT])
            }
          ),
          /* @__PURE__ */ e(
            K,
            {
              "data-testid": "top-right-corner-handle",
              onPointerDown: (t) => r(t, [o.TOP, o.RIGHT])
            }
          ),
          /* @__PURE__ */ e(
            Z,
            {
              "data-testid": "bottom-right-corner-handle",
              onPointerDown: (t) => r(t, [o.BOTTOM, o.RIGHT]),
              children: /* @__PURE__ */ e(g, {})
            }
          ),
          /* @__PURE__ */ e(
            $,
            {
              "data-testid": "bottom-left-corner-handle",
              onPointerDown: (t) => r(t, [o.BOTTOM, o.LEFT]),
              children: /* @__PURE__ */ e(
                g,
                {
                  style: {
                    rotate: "90deg"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ e(
            Q,
            {
              "data-testid": "drag-handler",
              onPointerDown: D,
              children: /* @__PURE__ */ e(
                _,
                {
                  width: R,
                  height: R,
                  color: I.colors.neutralSubdued,
                  style: {
                    rotate: "90deg"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(X, { $withPaddingBottom: !n, children: C })
      ] })
    }
  );
};
export {
  yt as ResizableContainer
};
//# sourceMappingURL=resizable-container.js.map
