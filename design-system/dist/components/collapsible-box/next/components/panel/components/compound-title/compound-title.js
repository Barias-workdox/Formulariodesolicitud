import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, Children as l, useMemo as f, Fragment as h } from "react";
import { addExtraProps as u } from "../../../../../../../utils/add-extra-props.js";
import { StyledDivider as C } from "./styled-components/styled-divider.js";
import { StyledContainer as y } from "./styled-components/styled-container.js";
const P = c(
  function({ children: n, $expanded: r, "data-testid": t }, d) {
    const o = l.toArray(n), m = f(
      () => o.map((p, i) => {
        const s = u(p, { $expanded: r });
        return /* @__PURE__ */ a(h, { children: [
          i !== 0 && /* @__PURE__ */ e(C, { "data-testid": `${t}--divider` }),
          s
        ] }, i);
      }),
      [o, r, t]
    );
    return /* @__PURE__ */ e(y, { ref: d, children: m });
  }
);
export {
  P as CompoundTitle
};
//# sourceMappingURL=compound-title.js.map
