import { jsxs as n, jsx as t, Fragment as D } from "react/jsx-runtime";
import { useState as p, useEffect as v } from "react";
import { Notification as P } from "../../../notification/next/notification.js";
import { Text as U } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as A } from "../../../utils/i18n/utils.js";
import { noop as q } from "../../../../utils/noop.js";
import { usePlanUsage as _ } from "../../hooks/plan-usage.hook.js";
import { getUsagePlanData as j, planHasCredits as w } from "../../utils/webdox-ai-plans.utils.js";
import { UsagePlanCounter as E } from "../plan-usage/plan-usage-counter.js";
import { ContractSummaryDetailStep as H } from "./components/contract-summary-detail-step/contract-summary-detail-step.js";
import { LoadingState as I } from "./components/loading-state/loading-state.js";
import { SummaryTypeSelectionStep as M } from "./components/summary-type-selection-step/summary-type-selection-step.js";
import { StyledContainer as N } from "./styled-components/styled-container.js";
import { StyledContractSummaryHeader as R } from "./styled-components/styled-contract-summary-header.js";
const z = {
  summaryTypeSelection: M,
  contractSummaryDetail: H
}, st = ({
  "data-testid": c,
  contractSummary: e,
  contractSummaryUpdatedAt: l,
  isContractSummaryLoading: u,
  onContractSummaryCopy: S,
  onGenerateContractSummary: d = q,
  onSummaryScroll: y,
  zIndex: f
}) => {
  const [g, o] = p("summaryTypeSelection"), [C, T] = p("summary"), { t: m } = A(), { availablePlans: a, isPlanUsageActive: r } = _(), b = z[g], { usageStatus: x, remainingRequests: h } = j(a, "brain_companion"), i = !r || x !== "exhausted" && h !== 0, k = (s) => {
    (!r || i && w(a, "brain_companion")) && (d(s), T(s), o("contractSummaryDetail"), o("contractSummaryDetail"));
  };
  return v(() => {
    e && e !== "" && o("contractSummaryDetail");
  }, [e]), /* @__PURE__ */ n(N, { children: [
    /* @__PURE__ */ n(R, { children: [
      /* @__PURE__ */ t(
        U,
        {
          variant: "body",
          margin: 0,
          fontWeight: "700",
          color: "neutralStrong",
          children: m("webdoxAI.dataExtraction.quickActionsTitle")
        }
      ),
      r && /* @__PURE__ */ t(
        E,
        {
          availablePlans: a,
          planName: "brain_companion"
        }
      )
    ] }),
    u ? /* @__PURE__ */ t(I, { summaryType: C }) : /* @__PURE__ */ n(D, { children: [
      !i && /* @__PURE__ */ t(
        P,
        {
          kind: "negative",
          description: `${m("webdoxAI.planUsage.popovers.planTrial.notification")}`,
          size: "small",
          closeable: !1
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          contractSummary: e,
          contractSummaryUpdatedAt: l,
          "data-testid": c,
          onClick: k,
          onClickBack: () => o("summaryTypeSelection"),
          onContractSummaryCopy: S,
          onSummaryScroll: y,
          disabled: !i,
          zIndex: f
        }
      )
    ] })
  ] });
};
export {
  st as ContractSummary
};
//# sourceMappingURL=contract-summary.js.map
