import { jsx as c } from "react/jsx-runtime";
import { useMemo as m, useEffect as d } from "react";
import { HistoryTab as f } from "../components/contract-negotiation/history-tab/history-tab.js";
import { filterContractNegotiationActivities as l } from "../logic/business/contract-negotiation.business.js";
import { useContractNegotiationContext as b } from "../logic/contexts/contract-negotiation.context.js";
const y = ({
  "data-testid": o = "history-tab",
  onClose: e
}) => {
  const {
    collaborationActivities: t,
    collaborationResponsible: r,
    isActivitiesLoading: s,
    onTriggerHistoryTab: i,
    loadMoreActivities: a
  } = b(), n = m(
    () => l(t),
    [t]
  );
  return d(() => i(), [i]), /* @__PURE__ */ c(
    f,
    {
      "data-testid": o,
      activities: n,
      responsible: r,
      isLoading: s,
      onPageEnd: a,
      onClose: e
    }
  );
};
export {
  y as HistoryTabContainer
};
//# sourceMappingURL=history-tab.container.js.map
