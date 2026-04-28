import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { forwardRef as b, useState as h } from "react";
import { Star as m } from "@carbon/icons-react";
import { BackgroundIcon as v } from "../../../background-icon/next/background-icon.js";
import { NavigationMenu as d } from "../../../navigation-menu/navigation-menu.js";
import { Text as S } from "../../../text/text.js";
import { Root as g, Header as x, MenuItemWrapper as M } from "./sublink.styles.js";
const H = b(
  ({ title: l, items: t, position: a, startEnhancer: u = m, onItemClick: n }, s) => {
    const [i, o] = h(null);
    return /* @__PURE__ */ f(
      g,
      {
        ref: s,
        $top: a.top,
        $left: a.left,
        "data-testid": "sidebar-sublink",
        children: [
          /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(
            S,
            {
              margin: 0,
              fontWeight: "700",
              variant: "bodySmall",
              color: "neutralStrong",
              children: l
            }
          ) }),
          /* @__PURE__ */ e(d, { children: t.map((r) => {
            const p = r.icon ?? u, c = i === r.id;
            return /* @__PURE__ */ e(
              M,
              {
                onMouseEnter: () => o(r.id),
                onMouseLeave: () => o(null),
                onFocusCapture: () => o(r.id),
                onBlurCapture: () => o(null),
                children: /* @__PURE__ */ e(
                  d.MenuItem,
                  {
                    startEnhancer: /* @__PURE__ */ e(
                      v,
                      {
                        icon: p,
                        kind: r.disabled ? "neutral" : c ? "brand" : "neutral",
                        appearance: "tonal",
                        size: "24px",
                        shape: "round",
                        disabled: r.disabled
                      }
                    ),
                    label: r.label,
                    counter: r.counter,
                    disabled: r.disabled,
                    href: r.href,
                    onClick: () => n == null ? void 0 : n(r)
                  }
                )
              },
              r.id
            );
          }) })
        ]
      }
    );
  }
);
H.displayName = "Sublink";
export {
  H as Sublink
};
//# sourceMappingURL=sublink.js.map
