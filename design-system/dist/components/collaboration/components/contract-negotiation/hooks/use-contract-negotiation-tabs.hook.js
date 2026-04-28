import { useState as t } from "react";
const f = () => {
  const [a, e] = t(!0), [n, s] = t(!1);
  return {
    isLeftTabsOpen: a,
    isRightTabsOpen: n,
    handleCloseLeftTabs: () => {
      e(!1);
    },
    handleCloseRightTabs: () => {
      s(!1);
    },
    handleOpenLeftTabs: () => {
      e(!0), s(!1);
    },
    handleOpenRightTabs: () => {
      s(!0), e(!1);
    }
  };
};
export {
  f as useContractNegotiationTabs
};
//# sourceMappingURL=use-contract-negotiation-tabs.hook.js.map
