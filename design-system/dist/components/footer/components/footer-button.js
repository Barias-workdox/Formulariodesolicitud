import { jsx as e } from "react/jsx-runtime";
import { Button as d } from "../../button/next/button.js";
import { useFooter as r } from "../footer.provider.js";
const f = (t) => {
  const { isDisabled: i, fullWidthActions: o, size: s } = r(), l = t.disabled || i;
  return /* @__PURE__ */ e(
    d,
    {
      ...t,
      fullWidth: s === "small" ? o : !1,
      disabled: l,
      size: "44px"
    }
  );
};
export {
  f as FooterButton
};
//# sourceMappingURL=footer-button.js.map
