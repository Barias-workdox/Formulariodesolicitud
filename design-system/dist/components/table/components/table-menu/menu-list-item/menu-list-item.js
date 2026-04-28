import { jsx as e } from "react/jsx-runtime";
import { ListItem as s } from "baseui/list";
import { ParagraphSmall as a } from "baseui/typography";
import { ariaKeyDownHandler as l } from "../../../../utils/accessibility.utils.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as f } from "../../../../../themes/utilities.js";
import { listItemOverrides as h, listItemCaptionStyles as d } from "./menu-list-item.styles.js";
const L = ({
  dataTestId: i,
  Icon: n,
  label: p,
  onClick: r,
  disabled: t
}) => {
  const [, m] = f(), o = () => {
    t || r == null || r();
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-testid": i,
      role: "menuitem",
      tabIndex: t ? -1 : 0,
      onClick: o,
      onKeyDown: l(o),
      children: /* @__PURE__ */ e(
        s,
        {
          artwork: () => n,
          overrides: h(m, t),
          children: /* @__PURE__ */ e(a, { $style: d(m, t), children: p })
        }
      )
    }
  );
};
export {
  L as MenuListItem
};
//# sourceMappingURL=menu-list-item.js.map
