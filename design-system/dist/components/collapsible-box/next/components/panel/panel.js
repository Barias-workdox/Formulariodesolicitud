import { jsx as e } from "react/jsx-runtime";
import { forwardRef as O, useMemo as b } from "react";
import { Panel as x } from "baseui/accordion";
import { isElement as C } from "react-is";
import { mergeOverridesDeep as T } from "../../../../utils/baseui/helpers.js";
import { addExtraProps as h } from "../../../../../utils/add-extra-props.js";
import { CompoundTitle as j } from "./components/compound-title/compound-title.js";
import { HeaderSubtitle as k } from "./components/header-subtitle/header-subtitle.js";
import { HeaderTitle as t } from "./components/header-title/header-title.js";
import { PanelBackgroundIcon as H } from "./components/panel-background-icon/panel-background-icon.js";
import { PanelIconButton as S } from "./components/panel-icon-button/panel-icon-button.js";
import { getPanelOverrides as $ } from "./panel.overrides.js";
const w = O(function({
  dataTestId: n,
  children: m,
  draggableId: i,
  startEnhancer: a,
  endEnhancer: l,
  title: o,
  expanded: r,
  maxHeight: s,
  overrides: p,
  isDraggable: f = !1,
  isOverlay: c = !1,
  isDragging: d = !1,
  attributes: u,
  listeners: P,
  ...g
}, v) {
  const B = b(() => {
    const I = C(o) ? o : /* @__PURE__ */ e(t, { children: o });
    return h(I, { $expanded: r });
  }, [o, r]), E = T(
    $({
      dataTestId: n,
      draggableId: i,
      startEnhancer: a,
      endEnhancer: l,
      maxHeight: s,
      attributes: u,
      listeners: P,
      isOverlay: c,
      isDragging: d,
      isDraggable: f
    }),
    p
  );
  return /* @__PURE__ */ e(
    x,
    {
      ...g,
      ref: v,
      expanded: r,
      title: B,
      overrides: E,
      children: m
    }
  );
}), N = Object.assign(w, {
  Title: t,
  Subtitle: k,
  CompoundTitle: j,
  BackgroundIcon: H,
  IconButton: S
});
export {
  N as Panel
};
//# sourceMappingURL=panel.js.map
