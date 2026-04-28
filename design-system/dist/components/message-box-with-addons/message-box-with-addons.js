import { jsxs as f, Fragment as h, jsx as t } from "react/jsx-runtime";
import { useState as l, useRef as m, useEffect as a } from "react";
import { MessageBox as g } from "../message-box/message-box.js";
import { StyledAddonsContainer as p } from "./styled-components/styled-addons-container.js";
import { StyledAddons as x } from "./styled-components/styled-addons.js";
const S = ({
  addons: i,
  isExpanded: r,
  isOpen: n,
  ...c
}) => {
  const [d, u] = l(0), e = m(null), o = () => {
    e.current && u(e.current.clientHeight);
  };
  return a(() => {
    o();
    const s = new MutationObserver(o);
    return e.current && s.observe(e.current, { childList: !0, subtree: !0 }), () => {
      s.disconnect();
    };
  }, []), /* @__PURE__ */ f(h, { children: [
    /* @__PURE__ */ t(
      p,
      {
        $height: d,
        $isExpanded: r,
        $isOpen: n,
        children: /* @__PURE__ */ t(x, { ref: e, children: i })
      }
    ),
    /* @__PURE__ */ t(
      g,
      {
        ...c,
        isExpanded: r,
        isOpen: n,
        addonsRef: e
      }
    )
  ] });
};
export {
  S as MessageBoxWithAddons
};
//# sourceMappingURL=message-box-with-addons.js.map
