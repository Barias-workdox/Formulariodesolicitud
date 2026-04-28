import { jsxs as y, jsx as n } from "react/jsx-runtime";
import { forwardRef as g, useState as h } from "react";
import { Input as F } from "../input/input.js";
import { isValidHexColor as k, doesBrowserSupportsColorType as S, formatHexColor as P } from "../utils/color/color.utils.js";
import { useCss as V } from "../utils/hooks/use-css.js";
import { styles as j } from "./color-picker.styles.js";
const L = g(
  function({
    "data-testid": r = "design-system-color-picker",
    value: o = "#FFFFFF",
    kind: i = "gray",
    name: t,
    placeholder: a,
    onChange: l
  }, c) {
    const [p, d] = h(o), m = k(o), { containerStyles: u, colorPickerStyles: C } = V(j, { color: o, isValid: m }), e = (s) => {
      const {
        target: { value: f }
      } = s, x = P(f);
      d(x), l(s);
    };
    return /* @__PURE__ */ y("div", { className: u, children: [
      /* @__PURE__ */ n(
        F,
        {
          inputRef: c,
          "data-testid": `${r}--text-input`,
          "aria-label": t,
          name: t,
          value: p,
          placeholder: a,
          type: "text",
          kind: i,
          onChange: e,
          maxLength: 7
        }
      ),
      S() && /* @__PURE__ */ n(
        "input",
        {
          "data-testid": `${r}--color-input`,
          name: t,
          className: C,
          type: "color",
          value: o,
          onChange: e
        }
      )
    ] });
  }
);
export {
  L as ColorPicker
};
//# sourceMappingURL=color-picker.js.map
