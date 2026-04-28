import { jsxs as e, jsx as i } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import { Draggable as u } from "@carbon/icons-react";
import { noop as S } from "../../../../../../../utils/noop.js";
import { ToggleIcon as $ } from "./components/toggle-icon/toggle-icon.js";
import { StyledContainer as D } from "./styled-components/styled-container.js";
import { StyledLeftContainer as h } from "./styled-components/styled-left-container.js";
import { StyledRightContainer as j } from "./styled-components/styled-right-container.js";
import { StyledDraggableContainer as x } from "./styled-components/styled-draggable-container.js";
const k = b(
  function({
    dataTestId: n,
    draggableId: l,
    $neutralWashedHeader: m = !1,
    $expanded: a,
    children: d,
    startEnhancer: o,
    endEnhancer: t,
    attributes: f = {},
    listeners: g = {},
    isOverlay: p,
    isDragging: s,
    isDraggable: c,
    onClick: y = S
  }, C) {
    const r = n ?? `panel-header-${l}--draggable-icon`;
    return /* @__PURE__ */ e(
      D,
      {
        "data-testid": r,
        ref: C,
        $isOverlay: p,
        $expanded: a,
        onClick: y,
        $neutralWashedHeader: m,
        children: [
          /* @__PURE__ */ e(h, { children: [
            c && /* @__PURE__ */ i(
              x,
              {
                "data-testid": `${r}--draggable-icon`,
                $isDragging: s,
                ...f,
                ...g,
                children: /* @__PURE__ */ i(u, {})
              }
            ),
            typeof o == "function" ? o() : o,
            d
          ] }),
          /* @__PURE__ */ e(j, { children: [
            typeof t == "function" ? t() : t,
            /* @__PURE__ */ i(
              $,
              {
                "data-testid": `${r}--toggle-icon`,
                $expanded: a
              }
            )
          ] })
        ]
      }
    );
  }
);
export {
  k as PanelHeader
};
//# sourceMappingURL=panel-header.js.map
