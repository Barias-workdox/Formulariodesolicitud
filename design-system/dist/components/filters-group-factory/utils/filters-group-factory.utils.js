import { ContentTypes as a } from "../filter-group-factory.constants.js";
const s = ({
  type: r,
  content: e
}) => {
  switch (r) {
    case a.Datepicker: {
      const { date: t = null } = e || {};
      return { date: t };
    }
    case a.List: {
      const { pathIds: t = [], checkedIds: n = [] } = e || {};
      return { pathIds: t, checkedIds: n };
    }
    case a.String: {
      const { value: t = "" } = e || {};
      return { value: t };
    }
    default:
      throw new Error(`Invalid filter type: ${r}`);
  }
}, u = ({ id: r, content: e }, {
  defaultValues: t
} = {}) => ({
  id: r,
  type: e.type,
  ...s({
    type: e.type,
    content: t ? void 0 : e
  })
}), c = (r, {
  defaultValues: e
} = {}) => r.map((t) => u(t, { defaultValues: e })), o = (r) => r.filter((e) => e.type === a.List ? e.checkedIds.length > 0 : e.type === a.Datepicker ? e.date === null ? !1 : Array.isArray(e.date) ? e.date.length > 0 : typeof e.date == "string" ? e.date.trim() !== "" : !1 : e.type === a.String ? e.value !== "" : !0), p = (r) => {
  switch (r.type) {
    case a.String: {
      const { value: e, typeVariant: t } = r;
      if (t === "number") {
        const n = Number(e);
        return Number.isNaN(n) ? void 0 : n;
      }
      return t === "boolean" ? e === "true" : e;
    }
    case a.List: {
      const { checkedIds: e, typeVariant: t } = r;
      return t === "number" ? e.map((n) => Number(n)).filter((n) => !Number.isNaN(n)) : t === "boolean" ? e.map((n) => n === "true") : e;
    }
    case a.Datepicker: {
      const { date: e } = r;
      return e;
    }
  }
};
export {
  u as getFilterRawValues,
  c as getFilterRawValuesArray,
  o as getNonEmptyFiltersRawValues,
  s as getRawValuesByType,
  p as normalizeFilterRawValue
};
//# sourceMappingURL=filters-group-factory.utils.js.map
