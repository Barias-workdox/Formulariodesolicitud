import { jsx as s } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as f from "@carbon/icons-react";
import { useCss as i } from "../utils/hooks/use-css.js";
const p = a(
  function({ icon: o, color: r, themeColor: n, ...e }, m) {
    const { theme: c } = i(), t = f[o];
    return /* @__PURE__ */ s(
      t,
      {
        ref: m,
        color: c.colors[n] || r,
        ...e
      }
    );
  }
);
p.displayName = "ThemedCarbonIcon";
export {
  p as ThemedCarbonIcon
};
//# sourceMappingURL=themed-carbon-icon.js.map
