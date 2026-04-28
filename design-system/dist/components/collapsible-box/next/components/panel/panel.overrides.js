import { jsx as g } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { getCustomScrollBarStyles as m } from "../../../../../themes/custom-scroll-bar.js";
import { PanelHeader as x } from "./components/panel-header/panel-header.js";
const H = ({
  dataTestId: e,
  draggableId: n,
  startEnhancer: l,
  endEnhancer: d,
  maxHeight: a,
  attributes: s,
  listeners: i,
  isOverlay: r = !1,
  isDragging: t = !1,
  isDraggable: c = !1
}) => ({
  Header: {
    component: u(
      function({ children: p, ...f }, b) {
        return /* @__PURE__ */ g(
          x,
          {
            ...f,
            ref: b,
            dataTestId: e,
            draggableId: n,
            isOverlay: r,
            isDragging: t,
            isDraggable: c,
            startEnhancer: l,
            endEnhancer: d,
            attributes: s,
            listeners: i,
            children: p
          }
        );
      }
    )
  },
  ToggleIcon: {
    component: () => null
  },
  PanelContainer: {
    style: ({ $theme: o }) => ({
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxSizing: "border-box",
      border: `1px solid ${o.colors.neutralSubtle}`,
      borderRadius: o.sizing.scale100
    })
  },
  Content: {
    style: ({ $theme: o }) => ({
      padding: o.spacing.spacingXs,
      maxHeight: a,
      overflow: "auto",
      ...r && {
        border: `1px dashed ${o.colors.brand}`,
        borderTop: "0px",
        backgroundColor: o.colors.brandWashed
      },
      ...m(o)
    })
  }
});
export {
  H as getPanelOverrides
};
//# sourceMappingURL=panel.overrides.js.map
