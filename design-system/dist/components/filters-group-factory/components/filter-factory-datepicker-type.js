import { jsx as f } from "react/jsx-runtime";
import { useCallback as y, useMemo as z } from "react";
import { Calendar as G } from "../../calendar/calendar.js";
import { FiltersGroup as M } from "../../filters-group/filters-group.js";
import "../../filters-group/stateful-filters-group.js";
import { getIsoDateOnly as D, dateWithoutTimezoneOffset as i } from "../../utils/strings/date.utils.js";
import { ContentTypes as v } from "../filter-group-factory.constants.js";
import { useDateFilterUtils as N } from "../hooks/use-date-filter-utils.js";
const H = ({
  dataTestId: n = "filters-group-factory__datepicker-filter",
  id: t,
  label: g,
  multi: k,
  startEnhancer: A,
  tooltipText: _,
  minWidth: x,
  maxWidth: C,
  focusOnShow: I,
  content: O,
  disabled: $,
  disabledReason: L = "",
  onFilterChange: o,
  hideVisibleFilter: a
}) => {
  const { getValueLabel: S } = N(), { range: m, date: r, minDate: c, maxDate: l } = O, s = S(r), T = s ? [{ id: t, label: s }] : void 0, u = y(
    ({ date: e }) => {
      const p = Array.isArray(e) ? e.map(D) : e ? D(e) : null;
      o({ filterId: t, type: v.Datepicker, date: p });
    },
    [t, o]
  ), W = y(() => {
    o({ filterId: t, type: v.Datepicker, date: null }), a == null || a(t);
  }, [t, o, a]), j = z(() => {
    const e = Array.isArray(r) ? r.map((p) => i(p)) : r ? i(r) : null;
    return /* @__PURE__ */ f(
      G,
      {
        dataTestId: `${n}__calendar`,
        value: e,
        range: m,
        minDate: c,
        maxDate: l,
        onChange: u
      }
    );
  }, [n, r, l, c, m, u]);
  return /* @__PURE__ */ f(
    M.Filter,
    {
      "data-testid": `${n}-${t}`,
      id: t,
      label: g,
      value: T,
      multi: k,
      startEnhancer: A,
      tooltipText: _,
      minWidth: x,
      maxWidth: C,
      initialIsOpen: I,
      content: j,
      popoverProps: { minWidth: "min-content" },
      onClear: W,
      disabled: $,
      disabledReason: L
    },
    t
  );
};
export {
  H as FilterFactoryDatepickerType
};
//# sourceMappingURL=filter-factory-datepicker-type.js.map
