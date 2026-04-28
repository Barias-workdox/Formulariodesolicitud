import { jsx as m } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { Radio as d } from "baseui/radio";
import { mergeOverridesDeep as s } from "../utils/baseui/helpers.js";
import { radioOverrides as a } from "./radio-group.styles.js";
const R = ({ "data-testid": r, overrides: o, ...e }) => {
  const i = t(
    () => s(a(r), o),
    [o, r]
  );
  return /* @__PURE__ */ m(
    d,
    {
      ...e,
      overrides: i
    }
  );
};
export {
  R as Radio
};
//# sourceMappingURL=radio.js.map
