import { formatDatetime as u } from "../utils/strings/date.utils.js";
const s = (t) => {
  if (t.length === 0)
    return "";
  const e = Math.max(...t.map((a) => new Date(a).getTime()));
  return new Date(e).toISOString();
}, S = (t, e) => e.length > 0 ? e : t.map(
  ({ id: a, collaborator: n, documents: m, status: g }) => ({
    id: a,
    status: g,
    createdAt: s(m.map(({ createdAt: r }) => r)),
    updatedAt: s(m.map(({ updatedAt: r }) => r)),
    thirdParty: n,
    resources: m.map(
      ({
        id: r,
        name: p,
        createdAt: o,
        fileExt: c,
        reasonRejection: h,
        status: D,
        updatedAt: i,
        deletedAt: l
      }) => ({
        document: {
          id: r,
          name: p,
          fileExt: c,
          createdAt: o,
          updatedAt: i,
          deletedAt: l
        },
        status: D,
        rejectionReason: h,
        createdAt: o,
        updatedAt: i
      })
    )
  })
), x = (t, e) => {
  if (t.length === 0)
    return "";
  const a = Math.max(...t.map((n) => n.getTime()));
  return u(new Date(a).toISOString(), e);
};
export {
  x as getLastUpdateDateFormatted,
  S as getSubtasks
};
//# sourceMappingURL=collaboration.utils.js.map
