import { jsx as m } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { Skeleton as n } from "baseui/skeleton";
import { mergeOverridesDeep as p } from "../utils/baseui/helpers.js";
import { getSkeletonOverrides as d } from "./skeleton.overrides.js";
const O = ({
  "data-testid": e = "design-system-skeleton",
  overrides: r,
  ...o
}) => {
  const t = i(() => {
    const s = d({ dataTestId: e });
    return p(s, r);
  }, [e, r]);
  return /* @__PURE__ */ m(
    n,
    {
      ...o,
      overrides: t
    }
  );
};
export {
  O as Skeleton
};
//# sourceMappingURL=skeleton.js.map
