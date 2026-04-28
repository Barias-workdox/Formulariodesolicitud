import { jsx as s } from "react/jsx-runtime";
import { useCallback as a, useMemo as G } from "react";
import { FiltersGroup as M } from "../../filters-group/filters-group.js";
import "../../filters-group/stateful-filters-group.js";
import { FlatSuggestionsInput as N } from "../../suggestion-input/variants/flat-suggestions-input/flat-suggestions-input.js";
import { ContentTypes as m } from "../filter-group-factory.constants.js";
const A = ({
  dataTestId: n = "filters-group__text-filter",
  id: t,
  label: g,
  value: c,
  multi: f,
  startEnhancer: l,
  tooltipText: y,
  minWidth: v,
  maxWidth: S,
  focusOnShow: _,
  content: u,
  disabled: x,
  disabledReason: I = "",
  onFilterChange: o,
  hideVisibleFilter: r
}) => {
  const p = a(
    (e) => {
      o({ filterId: t, type: m.String, value: e });
    },
    [t, o]
  ), $ = a(() => {
    o({ filterId: t, type: m.String, value: "" }), r == null || r(t);
  }, [t, o, r]), C = G(() => {
    const { suggestions: e = [], value: j, typeVariant: k } = u;
    return /* @__PURE__ */ s(
      N,
      {
        dataTestId: `${n}__suggestion`,
        autoFocus: !0,
        value: j.toString(),
        suggestions: e,
        type: k,
        onChange: p
      }
    );
  }, [n, u, p]);
  return /* @__PURE__ */ s(
    M.Filter,
    {
      "data-testid": `${n}--${t}`,
      id: t,
      label: g,
      value: c,
      multi: f,
      startEnhancer: l,
      tooltipText: y,
      minWidth: v,
      maxWidth: S,
      initialIsOpen: _,
      content: C,
      onClear: $,
      disabled: x,
      disabledReason: I
    },
    t
  );
};
export {
  A as FilterFactoryStringType
};
//# sourceMappingURL=filter-factory-string-type.js.map
