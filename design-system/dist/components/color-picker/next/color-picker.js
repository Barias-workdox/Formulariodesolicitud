import { jsxs as f, jsx as s } from "react/jsx-runtime";
import { forwardRef as x, useState as y } from "react";
import { Input as g } from "../../input/next/input.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { isValidHexColor as h, doesBrowserSupportsColorType as F, formatHexColor as k } from "../../utils/color/color.utils.js";
import { useCss as S } from "../../utils/hooks/use-css.js";
import { styles as P } from "./color-picker.styles.js";
const B = x(
  function({
    "data-testid": e = "design-system-color-picker",
    value: o = "#FFFFFF",
    onChange: i,
    ...t
  }, a) {
    const [l, m] = y(o), c = h(o), { containerStyles: p, colorPickerStyles: d } = S(P, {
      color: o,
      isValid: c,
      size: t.size
    }), r = (n) => {
      const {
        target: { value: u }
      } = n, C = k(u);
      m(C), i(n);
    };
    return /* @__PURE__ */ f("div", { className: p, children: [
      /* @__PURE__ */ s(
        g,
        {
          inputRef: a,
          "data-testid": `${e}--text-input`,
          "aria-label": t.name,
          value: l,
          type: "text",
          onChange: r,
          maxLength: 7,
          ...t
        }
      ),
      F() && /* @__PURE__ */ s(
        "input",
        {
          "data-testid": `${e}--color-input`,
          name: t.name,
          className: d,
          type: "color",
          value: o,
          onChange: r
        }
      )
    ] });
  }
);
export {
  B as ColorPicker
};
//# sourceMappingURL=color-picker.js.map
