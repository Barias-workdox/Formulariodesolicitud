import { jsx as e } from "react/jsx-runtime";
import { useState as i } from "react";
import { TRIGGER_TYPE as D } from "baseui/popover";
import { ListFactory as R } from "../../list-factory/list-factory.js";
import { useListFactoryUtils as S } from "../../list-factory/hooks/use-list-factory-utils.js";
import { Popover as h } from "../../popover/popover.js";
import "baseui";
import "../../popover/popover.styles.js";
import { POPOVER_Z_INDEX as y } from "../../popover/popover.constants.js";
import { PLACEMENT as N } from "../../../constants/placement.constants.js";
import { DROPDOWN_MIN_WIDTH as V } from "./dropdown.constants.js";
const w = ({
  placement: s = N.BOTTOM_RIGHT,
  triggerType: m = D.click,
  overrides: p,
  children: c,
  multi: l = !1,
  options: n,
  showArrow: a = !1,
  selectedItems: f,
  listProps: I = {
    minWidth: `${V}px`
  },
  zIndex: O = y,
  onChange: o
}) => {
  const [r, d] = i(""), [T, u] = i(f), E = (t) => {
    u(t), o == null || o(t);
  }, { options: P, onOptionClick: _ } = S({
    root: n,
    pathIds: [],
    checkedIds: T,
    searchValue: r,
    onChange: ({ checkedIds: t }) => E(t)
  });
  return /* @__PURE__ */ e(
    h,
    {
      zIndex: O,
      placement: s,
      accessibilityType: "menu",
      triggerType: m,
      showArrow: a,
      overrides: p,
      content: () => /* @__PURE__ */ e(
        R,
        {
          ...I,
          items: P,
          searchValue: r,
          onItemClick: ({ item: t }) => _({ item: t, multi: l }),
          onSearchValueChange: d
        }
      ),
      children: c
    }
  );
};
export {
  w as Dropdown
};
//# sourceMappingURL=dropdown.js.map
