import { jsx as t } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { StatefulMenu as c } from "../menu/stateful-menu/stateful-menu.js";
import "baseui";
import "baseui/menu";
import "../menu/stateless-menu/stateless-menu.overrides.js";
import { Popover as d } from "../popover/popover.js";
import "baseui/popover";
import { mergeOverridesDeep as w } from "../utils/baseui/helpers.js";
import "../popover/popover.styles.js";
import { Tag as O } from "../tag/tag.js";
import { noop as h } from "../../utils/noop.js";
import { dropdownTagOverrides as x, menuOverrides as D } from "./dropdown-tag.styles.js";
const E = ({
  "data-testid": o = "dropdown-tag",
  kind: e,
  children: u,
  items: m = [],
  onItemSelect: p = h,
  overrides: n,
  disabled: r,
  placement: f = "auto",
  ...s
}) => {
  const g = i(() => {
    const a = x({
      kind: e,
      dataTestId: o,
      disabled: r
    });
    return w(a, n);
  }, [e, o, n, r]), v = i(() => r ? null : /* @__PURE__ */ t(
    c,
    {
      items: m,
      onItemSelect: p,
      overrides: D
    }
  ), [r, m, p]);
  return /* @__PURE__ */ t(
    d,
    {
      placement: f,
      content: v,
      showArrow: !0,
      ignoreBoundary: !0,
      children: /* @__PURE__ */ t(
        O,
        {
          "data-testid": `${o}__tag`,
          overrides: g,
          disabled: r,
          closeable: !0,
          ...s,
          children: u
        }
      )
    }
  );
};
export {
  E as DropdownTag
};
//# sourceMappingURL=dropdown-tag.js.map
