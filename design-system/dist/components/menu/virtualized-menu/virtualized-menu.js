import { jsx as m } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { mergeOverrides as i } from "baseui";
import { StatefulMenu as f } from "../stateful-menu/stateful-menu.js";
import { getOverrides as p } from "./virtualized-menu.overrides.js";
const v = ({ overrides: e, ...r }) => {
  const o = t(
    () => i(p(r), e),
    [e, r]
  );
  return /* @__PURE__ */ m(
    f,
    {
      ...r,
      overrides: o
    }
  );
};
export {
  v as VirtualizedMenu
};
//# sourceMappingURL=virtualized-menu.js.map
