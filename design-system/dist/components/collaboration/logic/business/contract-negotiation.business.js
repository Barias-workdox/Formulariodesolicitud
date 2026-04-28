import { ALL_ACTIVITIES_KEYS as g } from "../../constants/contract-negotiation.constants.js";
const y = ["active"], h = (t, e) => t.map(
  ({ document: { id: r, name: i, fileExt: o, updatedAt: p = "", officeDocumentVersion: l } }) => ({
    id: r,
    name: i,
    label: i,
    fileExt: o,
    updatedAt: p,
    officeDocumentVersion: l,
    thirdParties: e.map(
      ({
        thirdParty: { id: u, firstName: m, lastName: v },
        resources: f
      }) => {
        let c = "pending", a = "";
        const d = f.filter(
          ({ document: { id: n, negotiable: s } }) => s && n === r
        );
        if (d.length > 0) {
          const [{ approvedAt: n, status: s }] = d;
          c = s, a = n;
        }
        const A = `${m} ${v}`;
        return {
          id: u,
          name: A,
          status: c,
          approvedAt: a
        };
      }
    )
  })
), C = (t, { id: e, negotiable: r = !1 }) => {
  const [i] = t;
  return r ? t.find(({ id: o }) => o === e) ?? i : i;
}, D = (t) => t.map(
  ({ thirdParties: e }) => e.every(({ status: r }) => r === "approved") ? "approved" : "pending"
), I = (t) => t.filter(({ key: e }) => g.includes(e));
export {
  y as activeCollaborationStates,
  I as filterContractNegotiationActivities,
  D as generalDocumentsStatuses,
  h as getActivityDocuments,
  C as getActivitySelectedDocument
};
//# sourceMappingURL=contract-negotiation.business.js.map
