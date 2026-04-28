import { jsx as e, Fragment as u } from "react/jsx-runtime";
import { ReactComponent as m } from "../../../../assets/icons/webdox-ai/credits-icon.svg.js";
import { BackgroundIcon as T } from "../../../background-icon/background-icon.js";
import { DIALOG_Z_INDEX as b } from "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import { Text as v } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as x } from "../../../utils/i18n/utils.js";
import { isUsagePlanFound as U, getUsagePlanData as A } from "../../utils/webdox-ai-plans.utils.js";
import { UsageCounterTag as I } from "../usage-counter-tag/usage-counter-tag.js";
import { UsageOverviewPopover as n } from "../usage-overview-popover/usage-overview-popover.js";
const f = "usage-plan", F = ({
  dataTestId: p = f,
  availablePlans: s,
  planName: r
}) => {
  const { t: o } = x(), c = U(s, r), { usageStatus: l, remainingRequests: a, totalRequests: t } = A(
    s,
    r
  ), i = l === "unlimited", d = r ? r.replace(/_/g, " ").replace(/\b\w/g, (g) => g.toUpperCase()) : "";
  return c && /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e(
    n,
    {
      "data-testid": `${p}__popover`,
      placement: "auto",
      header: /* @__PURE__ */ e(
        n.Header,
        {
          title: o(
            `webdoxAI.planUsage.popovers.planTrial.${i ? "unlimitedTitle" : "title"}`
          ),
          subtitle: d,
          startEnhancer: /* @__PURE__ */ e(
            T,
            {
              shape: "square",
              backgroundColor: "positiveSubtle",
              iconColor: "positive",
              Icon: m,
              size: "32px"
            }
          )
        }
      ),
      zIndex: b.TOOLTIP,
      body: /* @__PURE__ */ e(
        n.Body,
        {
          description: i ? o("webdoxAI.planUsage.popovers.planTrial.unlimitedDescription") : o("webdoxAI.planUsage.popovers.planTrial.description", {
            total: t
          }),
          totalRequests: t,
          remainingRequests: a,
          isPlanUnlimited: i,
          progressBarLabelText: `${o("webdoxAI.planUsage.popovers.planTrial.progress", { used: a, total: t })}`,
          disclaimer: `* ${o("webdoxAI.planUsage.popovers.planTrial.disclaimer")}`,
          warningDescription: o("webdoxAI.planUsage.popovers.planTrial.notification")
        }
      ),
      footer: !i && /* @__PURE__ */ e(
        v,
        {
          variant: "bodySmall",
          color: "brandMedium",
          fontWeight: "400",
          margin: "0px",
          textAlign: "center",
          children: `${o("webdoxAI.planUsage.popovers.planTrial.action")}`
        }
      ),
      children: /* @__PURE__ */ e(
        I,
        {
          dataTestId: p,
          usageStatus: l,
          remainingRequests: a,
          totalRequests: t,
          icon: m
        }
      )
    }
  ) });
};
export {
  F as UsagePlanCounter
};
//# sourceMappingURL=plan-usage-counter.js.map
