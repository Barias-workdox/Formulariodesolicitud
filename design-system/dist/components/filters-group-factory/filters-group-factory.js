import { jsx as E } from "react/jsx-runtime";
import { useMemo as t } from "react";
import A from "lodash";
import { FiltersGroup as D } from "../filters-group/filters-group.js";
import "../filters-group/stateful-filters-group.js";
import { checkNotEmptyValue as _ } from "../../utils/check-not-empty-value.util.js";
import { noop as d } from "../../utils/noop.js";
import { FilterFactory as g } from "./components/filter-factory.js";
import { getFilterRawValuesArray as z, getNonEmptyFiltersRawValues as H } from "./utils/filters-group-factory.utils.js";
const X = ({
  dataTestId: l = "filters-group",
  defaultRawValues: n,
  disabledReason: s,
  filtersConfig: r,
  visibleFiltersId: m = r.map((p) => p.id),
  addVisibleFilter: w = d,
  onFilterChange: e,
  onClearAllFilters: B,
  maxActiveFilters: i,
  hideVisibleFilter: u
}) => {
  const p = t(
    () => r.filter((o) => m.includes(o.id)).filter(_),
    [r, m]
  ), y = t(
    () => z(
      r.filter((o) => m.includes(o.id))
    ),
    [r, m]
  ), F = t(
    () => H(n),
    [n]
  ), c = t(
    () => F.map((o) => o.id),
    [F]
  ), a = i && c.length >= i, h = t(
    () => a ? p.map((o) => ({
      ...o,
      disabled: !c.includes(o.id)
    })) : p,
    [p, a, c]
  ), G = t(
    () => !A.isEqual(n, y),
    [n, y]
  ), M = t(
    () => r.map(({ id: o, label: j, startEnhancer: k, focusOnShow: q, aiGenerated: x }) => ({
      id: o,
      label: j,
      focusOnShow: q,
      startEnhancer: k,
      aiGenerated: x
    })),
    [r]
  ), N = t(
    () => h.map((o) => /* @__PURE__ */ E(
      g,
      {
        dataTestId: l,
        disabled: !!s,
        disabledReason: s,
        ...o,
        onFilterChange: e,
        hideVisibleFilter: u
      },
      o.id
    )),
    [l, s, h, e, u]
  ), V = G || c.length > 0;
  return /* @__PURE__ */ E(
    D,
    {
      disabledReason: s,
      showClearAllFiltersButton: V,
      visibleFiltersId: m,
      allFiltersConfig: M,
      addVisibleFilter: w,
      onClearAllFilters: B,
      maxActiveFilters: i,
      activeFiltersCount: c.length,
      children: N
    }
  );
};
export {
  X as FiltersGroupFactory
};
//# sourceMappingURL=filters-group-factory.js.map
