import { jsx as $ } from "react/jsx-runtime";
import { useState as b, useEffect as A, useMemo as p, useCallback as S } from "react";
import { FiltersGroup as z } from "../../filters-group/filters-group.js";
import "../../filters-group/stateful-filters-group.js";
import { ListFactory as D } from "../../list-factory/list-factory.js";
import { useListFactoryUtils as H } from "../../list-factory/hooks/use-list-factory-utils.js";
import { getItemsTraversed as K } from "../../list-factory/utils/list-factory.utils.js";
import { ContentTypes as g } from "../filter-group-factory.constants.js";
const et = ({
  dataTestId: i = "filters-group__list-filter",
  id: r,
  label: F,
  value: J,
  multi: f,
  startEnhancer: j,
  tooltipText: B,
  minWidth: m,
  maxWidth: y,
  focusOnShow: E,
  content: t,
  disabled: G,
  disabledReason: M = "",
  onFilterChange: d,
  hideVisibleFilter: c
}) => {
  var P;
  const [u, R] = b(""), [e, T] = b(t.pathIds);
  A(() => {
    T(
      (s) => JSON.stringify(s) !== JSON.stringify(t.pathIds) ? t.pathIds : s
    );
  }, [t.pathIds]);
  const l = p(
    () => t.type === g.List ? t.items : [],
    [t.type, t.items]
  ), h = p(
    () => t.type === g.List && t.checkedIds || [],
    [t.type, t.checkedIds]
  ), k = S((s, o = 0) => {
    var N;
    const I = ((N = s.find(({ items: C }) => C == null ? void 0 : C.length)) == null ? void 0 : N.items) || [];
    return I.length > 0 ? k(I, o + 1) : o;
  }, []), L = p(() => k(l), [l, k]), U = p(
    () => h.length === 0 && e.length < L,
    [h.length, e.length, L]
  ), q = L > 0 && e.length > 0 && ((P = K(l, e).at(-1)) == null ? void 0 : P.label) || F, v = e.length > 0 || h.length > 0, { onSearchValueChange: n } = t, a = S(
    (s) => {
      R(s), n == null || n(s);
    },
    [n]
  ), w = S(() => {
    d({ filterId: r, type: g.List, pathIds: [], checkedIds: [] }), a(""), c == null || c(r);
  }, [r, d, a, c]);
  A(() => {
    a("");
  }, [e]);
  const { options: _, onOptionClick: O } = H({
    root: l,
    pathIds: e,
    checkedIds: h,
    searchValue: u,
    onChange: ({ pathIds: s, checkedIds: o }) => d({ filterId: r, type: g.List, pathIds: s, checkedIds: o })
  }), x = p(() => {
    const { isFiltrable: s, paginationProps: o } = t, I = Array.isArray(s) ? s[e.length] : s;
    return /* @__PURE__ */ $(
      D,
      {
        "data-testid": `${i}__list`,
        isFiltrable: I,
        searchValue: u,
        items: _,
        multi: f,
        minWidth: m,
        maxWidth: y,
        paginationProps: o,
        onItemClick: O,
        onSearchValueChange: a
      }
    );
  }, [
    i,
    t,
    f,
    m,
    y,
    e.length,
    u,
    _,
    O,
    a
  ]);
  return /* @__PURE__ */ $(
    z.Filter,
    {
      "data-testid": `${i}--${r}`,
      id: r,
      label: q,
      value: J,
      multi: !U && f,
      hasInteractions: v,
      startEnhancer: j,
      tooltipText: B,
      minWidth: m,
      maxWidth: y,
      initialIsOpen: E,
      content: x,
      onClear: w,
      disabled: G,
      disabledReason: M
    },
    r
  );
};
export {
  et as FilterFactoryListType
};
//# sourceMappingURL=filter-factory-list-type.js.map
