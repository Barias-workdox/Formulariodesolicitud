import { jsx as t, jsxs as L } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import { CheckboxCheckmark as i } from "../checkbox/components/checkbox-checkmark.js";
import { AvatarListItem as x } from "../list/components/avatar-list-item/avatar-list-item.js";
import { ListItem as c } from "../list/components/list-item/list-item.js";
import { StyledListItemIconInner as p } from "../list/components/list-item/list-item.styles.js";
import { ListItemCounter as S } from "../list/components/list-item-counter/list-item-counter.js";
import { COMMON_FONT_SIZE_12 as d } from "../../constants/common.constants.js";
const M = v(
  function({
    dataTestId: r,
    label: f,
    checked: e = !1,
    disabled: o,
    withCheckbox: s,
    Icon: n,
    kind: l,
    avatarProps: u = {},
    overrides: E = {},
    quantity: _,
    aiGenerated: m,
    onClick: h
  }, I) {
    const a = {
      "data-testid": r,
      ref: I,
      label: f,
      isActive: e,
      disabled: o,
      size: "sm",
      overrides: E,
      aiGenerated: m,
      onClick: h
    };
    switch (l) {
      case "group":
        return /* @__PURE__ */ t(
          c,
          {
            ...a,
            size: "sm",
            aiGenerated: m,
            textProps: {
              label: { $style: { fontSize: d }, variant: "upperDetails" }
            },
            endEnhancer: /* @__PURE__ */ t(S, { quantity: _ })
          }
        );
      case "avatar":
        return /* @__PURE__ */ t(
          x,
          {
            ...a,
            Icon: n,
            avatarProps: u,
            startEnhancer: s && /* @__PURE__ */ t(p, { children: /* @__PURE__ */ t(
              i,
              {
                dataTestId: `${r}__checkbox`,
                checked: e,
                disabled: o
              }
            ) })
          }
        );
      case "basic":
      default:
        return /* @__PURE__ */ t(
          c,
          {
            ...a,
            size: "sm",
            tooltipProps: { placement: "top", hasPointerEventsEnabled: !1 },
            startEnhancer: (s || n) && /* @__PURE__ */ L(p, { children: [
              s && /* @__PURE__ */ t(
                i,
                {
                  dataTestId: `${r}__checkbox`,
                  checked: e,
                  disabled: o
                }
              ),
              n
            ] })
          }
        );
    }
  }
);
export {
  M as ListItemFactory
};
//# sourceMappingURL=list-item-factory.js.map
