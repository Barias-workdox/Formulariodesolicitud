import { useMemo as n } from "react";
const s = (r, e) => [
  ...r.map((t) => ({
    ...t,
    id: `${t.id}-user`,
    targetObject: "user"
  })),
  ...e.map((t) => ({
    ...t,
    id: `${t.id}-job`,
    targetObject: "job"
  }))
], o = ({
  actionIdType: r,
  groups: e,
  users: t,
  workflowTemplates: i
}) => n(() => r === "assign_taker" ? s(t, e) : r === "start_workflow" ? i : [], [r, t, e, i]);
export {
  o as useActionValues
};
//# sourceMappingURL=use-action-values.hook.js.map
