import { useMemo as c, useCallback as p } from "react";
import { includesStringNormalized as m } from "../../utils/strings/text.utils.js";
import { getItemsTraversed as v } from "../utils/list-factory.utils.js";
const x = ({
  root: d,
  pathIds: r = [],
  checkedIds: s = [],
  searchValue: o,
  onChange: l
}) => {
  const u = c(
    () => r.reduce((t, e) => {
      var i;
      return ((i = t.find((n) => n.id === e)) == null ? void 0 : i.items) || [];
    }, d),
    [r, d]
  ), k = c(() => u.reduce((t, e) => {
    if (e.kind === "group") {
      const i = (e.items || []).filter(({ label: n }) => !o || m(n, o)).map((n) => ({
        ...n,
        checked: s.includes(n.id)
      }));
      t.push({ ...e, items: i });
    } else (!o || m(e.label, o)) && t.push({ ...e, checked: s.includes(e.id) });
    return t;
  }, []), [u, o, s]), g = p(
    ({ item: { id: t, items: e }, multi: i = !1 }) => {
      if ((e == null ? void 0 : e.length) > 0) {
        const n = [...r, t];
        l({
          pathIds: n,
          checkedIds: []
        });
      } else {
        const n = s.includes(t) ? s.filter((f) => f !== t) : i ? [...s, t] : [t];
        l({
          pathIds: r,
          checkedIds: n
        });
      }
    },
    [r, s, l]
  ), C = p(
    () => v(d, r),
    [r, d]
  );
  return {
    options: k,
    onOptionClick: g,
    getItemsTraversed: C
  };
};
export {
  x as useListFactoryUtils
};
//# sourceMappingURL=use-list-factory-utils.js.map
