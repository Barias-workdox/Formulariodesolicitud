import { useState as u, useCallback as o } from "react";
import { ContentTypes as a } from "../filter-group-factory.constants.js";
const I = ({
  filtersRawValues: i
}) => {
  const [d, p] = u(
    i.map(({ id: t }) => t)
  ), n = o((t) => {
    p((s) => [...s, t]);
  }, []), c = o((t) => {
    p((s) => s.filter((r) => r !== t));
  }, []), l = o(
    (t) => i.some(({ id: s }) => s === t),
    [i]
  ), m = o(
    ({ filterId: t, pathIds: s, checkedIds: r, date: y, value: b }) => i.map((e) => {
      if (t === e.id)
        switch (e.type) {
          case a.List:
            return { ...e, pathIds: s, checkedIds: r };
          case a.Datepicker:
            return { ...e, date: y };
          case a.String:
            return { ...e, value: b };
        }
      return e;
    }),
    [i]
  );
  return {
    visibleFiltersIds: d,
    showFilter: n,
    hideFilter: c,
    isFilterAlreadyPresent: l,
    updateVisibleFiltersIds: p,
    applyFilterUpdates: m
  };
};
export {
  I as useFiltersGroupFactoryUtils
};
//# sourceMappingURL=use-filters-group-factory-utils.js.map
