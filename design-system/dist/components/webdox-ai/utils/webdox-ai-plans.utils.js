const o = ({
  remainingRequests: s,
  totalRequests: t
}) => s === 0 ? "exhausted" : s <= t * 0.2 ? "low" : "active", n = (s, t) => !!s.some((e) => e.resourceName === t), i = (s, t) => s.find((e) => e.resourceName === t), u = (s = [], t, e = 1) => {
  const a = i(s, t);
  return a ? a.remaining >= e : !1;
}, r = (s = [], t) => {
  const e = i(s, t);
  return {
    usageStatus: e == null ? void 0 : e.usageStatus,
    capturedUnits: (e == null ? void 0 : e.capturedUnits) ?? 0,
    reservedUnits: (e == null ? void 0 : e.reservedUnits) ?? 0,
    remainingRequests: (e == null ? void 0 : e.remaining) ?? 0,
    totalRequests: (e == null ? void 0 : e.subscribedQuantity) ?? 0
  };
};
export {
  i as findPlanByName,
  r as getUsagePlanData,
  o as getWebdoxAIUsageStatus,
  n as isUsagePlanFound,
  u as planHasCredits
};
//# sourceMappingURL=webdox-ai-plans.utils.js.map
