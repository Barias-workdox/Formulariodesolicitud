import { jsx as I } from "react/jsx-runtime";
import { createContext as _, useMemo as u, useState as h, useCallback as c, useContext as x } from "react";
import { FILTERS_GROUP_CONTEXT_DEFAULT_VALUES as C, MIN_VISIBLE_FILTERS_NUMBER as s } from "./filters-group.constants.js";
const F = _(
  C
), b = ({
  allFiltersConfig: e,
  children: a,
  isDirty: l,
  onClearAllFilters: n
}) => {
  const t = u(
    () => e.slice(0, s).map(({ id: o }) => o),
    [e]
  ), [r, i] = h(t), d = u(
    () => l || e.length > s && r.length !== s,
    [e.length, l, r.length]
  ), m = c((o) => {
    i((E) => [...E, o]);
  }, []), p = c(() => {
    n(), i(t);
  }, [n, t]);
  return /* @__PURE__ */ I(
    F.Provider,
    {
      value: {
        showClearAllFiltersButton: d,
        visibleFiltersId: r,
        addVisibleFilter: m,
        onClearAllFilters: p
      },
      children: a
    }
  );
}, v = () => x(F);
export {
  F as FiltersGroupContext,
  b as FiltersGroupProvider,
  v as useFiltersGroupContext
};
//# sourceMappingURL=filters-group.context.js.map
