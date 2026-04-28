import { jsx as d } from "react/jsx-runtime";
import { forwardRef as u, useMemo as c } from "react";
import { OptionList as f } from "baseui/menu";
import { mergeOverridesDeep as I } from "../../utils/baseui/helpers.js";
import { useCss as h } from "../../utils/hooks/use-css.js";
import { MenuItemLabel as l } from "./menu-item-label.js";
import { menuItemListItemStyles as v } from "./menu-item.styles.js";
const A = ({
  startEnhancer: o,
  endEnhancer: t,
  isLoading: r,
  disabled: s,
  selected: e,
  itemLabelTemplate: i,
  itemLabelKey: m = "label",
  ...n
}) => /* @__PURE__ */ d(
  l,
  {
    startEnhancer: o,
    endEnhancer: t,
    isLoading: r,
    disabled: s,
    selected: e,
    children: i ? i(n) : n[m]
  }
), M = ({
  dataTestId: o,
  ref: t,
  optionListBorderBottom: r,
  placementChildMenu: s
}) => {
  const { theme: e } = h();
  return c(
    () => ({
      ListItem: {
        props: { ref: t, "data-testid": o },
        style: ({ $theme: i }) => ({
          ...v({ theme: i, optionListBorderBottom: r })
        })
      },
      ChildMenuPopover: {
        props: {
          popoverMargin: e.spacing.spacing2xs,
          placement: s
        }
      }
    }),
    [o, r, s, t, e.spacing.spacing2xs]
  );
}, _ = u(function({
  baseDataTestId: t,
  optionListBorderBottom: r,
  placementChildMenu: s,
  overrides: e = {},
  index: i,
  ...m
}, n) {
  const {
    item: { "data-testid": a }
  } = m, p = M({
    ref: n,
    dataTestId: a ?? `${t}__item--${i}`,
    optionListBorderBottom: r,
    placementChildMenu: s
  }), g = c(
    () => I(p, e),
    [p, e]
  );
  return /* @__PURE__ */ d(
    f,
    {
      ...m,
      renderHrefAsAnchor: !0,
      $isHighlighted: m.item.selected || m.$isHighlighted,
      overrides: g
    }
  );
});
export {
  _ as MenuItem,
  A as getItemLabel
};
//# sourceMappingURL=menu-item.js.map
