import { useState as u, useMemo as f, useCallback as E } from "react";
import { MOCK_ENTITIES as T } from "../entities-multiselect.constants.js";
const L = (o = 5) => {
  const [n, g] = u(1), [s, C] = u(1), [a, l] = u(null), [c, P] = u(""), S = f(() => {
    const e = (c == null ? void 0 : c.toLowerCase().trim()) ?? "";
    return e ? T.filter((t) => t.label.toLowerCase().includes(e)) : T;
  }, [c]), r = S.filter((e) => e.type === "people"), p = S.filter((e) => e.type === "company"), d = Math.ceil(r.length / o), h = Math.ceil(p.length / o), w = f(() => {
    const e = r.slice(0, n * o), t = p.slice(0, s * o);
    return [...e, ...t];
  }, [n, s, r, p, o]), y = n < d || s < h, M = E(
    async (e) => {
      if (a) return;
      const t = e === "people" && n < d, m = e === "company" && s < h;
      !t && !m || (l(e), await new Promise((i) => setTimeout(i, 1e3)), t && g((i) => i + 1), m && C((i) => i + 1), l(null));
    },
    [a, n, s, d, h]
  ), b = E(
    async (e) => {
      const { search: t } = e;
      a || (l("all"), g(1), C(1), await new Promise((m) => setTimeout(m, 1500)), l(null), P(t));
    },
    [a]
  );
  return {
    options: f(
      () => w.map((e) => ({
        id: String(e.id),
        uuid: String(e.id),
        label: String(e.label),
        type: String(e.type),
        isValidated: e.isValidated ?? !0
      })),
      [w]
    ),
    setSearch: P,
    isFetching: a,
    hasNextPage: y,
    fetchData: M,
    peopleTotalElements: r.length,
    companyTotalElements: p.length,
    refetchData: b
  };
};
export {
  L as useEntitiesDirectoryMockList
};
//# sourceMappingURL=use-entities-mock-data.js.map
