import { jsx as p } from "react/jsx-runtime";
import { useMemo as m, Children as n } from "react";
import { noop as F } from "../../utils/noop.js";
import { CustomFilter as f } from "./components/custom-filter/custom-filter.js";
import { FiltersGroup as a } from "./filters-group.js";
import { FiltersGroupProvider as d, useFiltersGroupContext as C } from "./filters-group.context.js";
const c = ({ children: r, allFiltersConfig: e }) => {
  const { visibleFiltersId: o, showClearAllFiltersButton: t, addVisibleFilter: i, onClearAllFilters: l } = C(), s = m(
    () => n.toArray(r).filter(
      (u) => o.includes(u.props.id)
    ),
    [r, o]
  );
  return /* @__PURE__ */ p(
    a,
    {
      allFiltersConfig: e,
      visibleFiltersId: o,
      showClearAllFiltersButton: t,
      addVisibleFilter: i,
      onClearAllFilters: l,
      children: s
    }
  );
}, A = ({
  children: r,
  isDirty: e,
  onClearAllFilters: o = F
}) => {
  const t = m(
    () => n.toArray(r).map(
      ({ props: { id: i, label: l, startEnhancer: s } }) => ({
        id: i,
        label: l,
        startEnhancer: s
      })
    ),
    [r]
  );
  return /* @__PURE__ */ p(
    d,
    {
      isDirty: e,
      allFiltersConfig: t,
      onClearAllFilters: o,
      children: /* @__PURE__ */ p(c, { allFiltersConfig: t, children: r })
    }
  );
};
A.Filter = f;
export {
  A as StatefulFiltersGroup
};
//# sourceMappingURL=stateful-filters-group.js.map
