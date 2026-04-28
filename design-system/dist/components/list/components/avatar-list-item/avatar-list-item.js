import { jsx as a, jsxs as f } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { Avatar as c } from "../../../avatar/avatar.js";
import { ListItem as d } from "../list-item/list-item.js";
import { StyledListItemIconInner as v } from "../list-item/list-item.styles.js";
const l = p(
  function({
    "data-testid": t = "avatar-list-item",
    avatarProps: i,
    disabled: r,
    zIndex: m,
    startEnhancer: o,
    endEnhancer: e,
    ...s
  }, n) {
    return /* @__PURE__ */ a(
      d,
      {
        ref: n,
        "data-testid": t,
        disabled: r,
        ...s,
        startEnhancer: /* @__PURE__ */ f(v, { children: [
          o,
          /* @__PURE__ */ a(
            c,
            {
              "data-testid": `${t}--avatar`,
              ...i,
              size: "24px",
              disabled: r,
              zIndex: m
            }
          )
        ] }),
        endEnhancer: e
      }
    );
  }
);
export {
  l as AvatarListItem
};
//# sourceMappingURL=avatar-list-item.js.map
