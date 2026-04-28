import { jsx as t } from "react/jsx-runtime";
import { useState as r, useMemo as l, useEffect as p } from "react";
import { a as c } from "../../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
import "baseui/popover";
import "baseui";
import "../../../../popover/popover.styles.js";
import { StatelessPopover as a } from "../../../../popover/stateless-popover.js";
const m = Array.from({ length: 10 }, () => c.lorem.sentence(2)), k = ({ query: i }) => {
  const [n, o] = r(!1), s = l(() => m.filter(
    (e) => e.toLowerCase().includes(i.toLowerCase())
  ), [i]);
  return p(() => {
    o(s.length > 0);
  }, [s]), /* @__PURE__ */ t(
    a,
    {
      isOpen: n,
      zIndex: 999,
      onEsc: () => o(!1),
      onClickOutside: () => o(!1),
      popoverMargin: 40,
      content: /* @__PURE__ */ t(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "200px",
            alignItems: "start"
          },
          children: s.map((e) => /* @__PURE__ */ t(
            "div",
            {
              style: { padding: "10px", borderBottom: "1px solid #ccc" },
              children: e
            },
            e
          ))
        }
      ),
      placement: "bottomLeft",
      children: /* @__PURE__ */ t(
        "span",
        {
          style: {
            position: "absolute",
            top: 0,
            left: 0
          }
        }
      )
    }
  );
};
export {
  k as QuickActionsMenuExample
};
//# sourceMappingURL=quick-actions-menu-example.js.map
