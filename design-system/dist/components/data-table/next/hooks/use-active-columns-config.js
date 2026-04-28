import { useMemo as i } from "react";
import { useResponsiveProps as r } from "../../../../utils/use-responsive-props.util.js";
import { getActiveColumnsConfigWithUserCustomizations as t } from "../utils/data-table.utils.js";
const g = ({
  activeColumns: e,
  allColumnsConfig: n
}) => {
  const o = i(
    () => t(e, n),
    [e, n]
  ), s = i(
    () => o.map((m) => ({ ...m, isFixed: !1 })),
    [o]
  );
  return { columnsConfig: r(
    {
      large: o,
      extralarge: o,
      medium: s,
      small: s,
      extrasmall: s
    },
    o
  ) ?? [] };
};
export {
  g as useActiveColumnsConfig
};
//# sourceMappingURL=use-active-columns-config.js.map
