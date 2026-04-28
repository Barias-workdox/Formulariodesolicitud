import { useCallback as s } from "react";
import { DATA_TYPES as u, DATA_TYPES_IDS as i } from "../constants/data-types.constant.js";
import { useDataTypeTranslation as c } from "./use-data-type-translation.hook.js";
const p = (e) => {
  const { t: r } = c(), a = e == null ? void 0 : e.formatter, o = s(
    ({ id: t }) => {
      const n = {
        id: t,
        label: r(`dataTypes.${t}.label`, { defaultValue: t, ignoreErrors: !0 }),
        description: r(`dataTypes.${t}.description`, { defaultValue: "", ignoreErrors: !0 }),
        icon: u[t].icon
      };
      return a ? a(n) : n;
    },
    [r, a]
  ), l = s(() => i.map((t) => o({ id: t })), [o]);
  return { getDataTypeOptionById: o, getAllDataTypeOptions: l };
};
export {
  p as useDataTypes
};
//# sourceMappingURL=use-data-types.hook.js.map
