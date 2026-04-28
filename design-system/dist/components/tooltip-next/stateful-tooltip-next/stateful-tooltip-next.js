import { jsx as p } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { mergeOverrides as s } from "baseui";
import { StatefulTooltip as u } from "baseui/tooltip";
import { getOverrides as g } from "../tooltip-next.styles.js";
const x = ({
  size: r = "sm",
  zIndex: o,
  overrides: t,
  hasPointerEventsEnabled: e = !0,
  ...m
}) => {
  const i = f(
    () => s(g({ size: r, zIndex: o, hasPointerEventsEnabled: e }), t),
    [t, r, o, e]
  );
  return /* @__PURE__ */ p(
    u,
    {
      ...m,
      overrides: i
    }
  );
};
export {
  x as StatefulTooltipNext
};
//# sourceMappingURL=stateful-tooltip-next.js.map
