import { jsx as i } from "react/jsx-runtime";
import { forwardRef as d, useMemo as s } from "react";
import { Button as f } from "../../button.js";
import { iconButtonOverrides as p } from "./icon-button.styles.js";
import "@carbon/icons-react";
import { mergeOverridesDeep as u } from "../../../utils/baseui/helpers.js";
const x = d(function({ "data-testid": o, dataTestId: t, overrides: r, ...e }, n) {
  const m = s(() => u(p, r), [r]);
  return /* @__PURE__ */ i(
    f,
    {
      dataTestId: t ?? o,
      ref: n,
      kind: "control",
      overrides: m,
      ...e
    }
  );
});
export {
  x as IconButton
};
//# sourceMappingURL=icon-button.js.map
