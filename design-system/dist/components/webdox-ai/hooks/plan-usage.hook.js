import { useContext as t } from "react";
import { PlanUsageContext as o } from "../contexts/plan-usage.context.js";
const s = () => {
  const e = t(o);
  if (!e)
    throw new Error("usePlanUsage must be used within a PlanUsageProvider");
  return e;
};
export {
  s as usePlanUsage
};
//# sourceMappingURL=plan-usage.hook.js.map
