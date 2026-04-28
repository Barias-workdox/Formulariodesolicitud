import { useContext as o } from "react";
import { DecisionTreeContext as t } from "../contexts/decision-tree.context.js";
const n = () => {
  const e = o(t);
  if (!e)
    throw new Error("useDecisionTreeContext must be used within a DecisionTreeProvider");
  return e;
};
export {
  n as useDecisionTreeContext
};
//# sourceMappingURL=use-decision-tree-context.hook.js.map
