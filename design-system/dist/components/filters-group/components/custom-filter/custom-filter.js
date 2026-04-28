import { jsx as m } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { Filter as i } from "../../../filter/filter.js";
import { mergeOverridesDeep as s } from "../../../utils/baseui/helpers.js";
import { filterOverrides as p } from "./custom-filter.overrides.js";
const v = ({ overrides: r, ...e }) => {
  const o = t(
    () => s(r, p),
    [r]
  );
  return /* @__PURE__ */ m(
    i,
    {
      ...e,
      overrides: o
    }
  );
};
export {
  v as CustomFilter
};
//# sourceMappingURL=custom-filter.js.map
