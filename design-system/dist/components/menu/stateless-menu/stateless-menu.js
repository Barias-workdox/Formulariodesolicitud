import { jsx as u } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { mergeOverrides as O } from "baseui";
import { Menu as c } from "baseui/menu";
import { getBaseOverrides as t } from "./stateless-menu.overrides.js";
const q = ({
  dataTestId: r = "menu",
  itemLabelKey: o,
  itemLabelTemplate: m,
  optionListBorderBottom: s,
  placementChildMenu: e,
  menuWidth: f,
  overrides: g,
  ...i
}) => {
  const { items: n } = i, p = v(
    () => O(
      t({
        dataTestId: r,
        items: n,
        itemLabelKey: o,
        itemLabelTemplate: m,
        optionListBorderBottom: s,
        placementChildMenu: e,
        menuWidth: f
      }),
      g
    ),
    [
      r,
      n,
      o,
      m,
      f,
      s,
      g,
      e
    ]
  );
  return /* @__PURE__ */ u(
    c,
    {
      ...i,
      overrides: p
    }
  );
};
export {
  q as StatelessMenu
};
//# sourceMappingURL=stateless-menu.js.map
