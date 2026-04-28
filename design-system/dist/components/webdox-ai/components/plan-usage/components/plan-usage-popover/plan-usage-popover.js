import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { Close as c } from "@carbon/icons-react";
import { ReactComponent as g } from "../../../../../../assets/icons/webdox-ai/credits-icon.svg.js";
import "../../../../../button/button.js";
import { IconButton as h } from "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { Notification as f } from "../../../../../notification/next/notification.js";
import { ProgressBar as v } from "../../../../../progress/progress-bar.js";
import { Text as e } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as b } from "../../../../../utils/i18n/utils.js";
import { StyledPlanUsageContainer as x, StyledPlanUsageHeader as y, StyledPlanUsageHeaderIcon as U, StyledPlanUsageTitle as P, StyledPlanUsageCloseButton as S, StyledPlanUsageContent as u, StyledPlanUsageAction as C } from "./plan-usage.styles.js";
const ro = ({
  dataTestId: p,
  planName: t,
  remainingRequests: l,
  totalRequests: n,
  handleClose: m
}) => {
  const { t: r } = b(), s = t ? t.replace(/_/g, " ").replace(/\b\w/g, (i) => i.toUpperCase()) : "";
  return /* @__PURE__ */ a(x, { "data-testid": `${p}__popover`, children: [
    /* @__PURE__ */ a(y, { children: [
      /* @__PURE__ */ o(U, { children: /* @__PURE__ */ o(g, {}) }),
      /* @__PURE__ */ a(P, { children: [
        /* @__PURE__ */ o(
          e,
          {
            variant: "h2",
            color: "darkPrimary",
            fontWeight: "700",
            margin: 0,
            children: `${r("webdoxAI.planUsage.popovers.planTrial.title")}`
          }
        ),
        /* @__PURE__ */ o(
          e,
          {
            variant: "bodySmall",
            color: "darkSecondary",
            fontWeight: "400",
            margin: "0px",
            children: s
          }
        )
      ] }),
      /* @__PURE__ */ o(S, { children: /* @__PURE__ */ o(
        h,
        {
          kind: "control",
          size: "32px",
          onClick: m,
          children: /* @__PURE__ */ o(c, {})
        }
      ) })
    ] }),
    /* @__PURE__ */ a(u, { children: [
      /* @__PURE__ */ o(
        e,
        {
          variant: "body",
          color: "darkSecondary",
          fontWeight: "400",
          margin: "0px",
          children: `${r("webdoxAI.planUsage.popovers.planTrial.description")}`
        }
      ),
      /* @__PURE__ */ o(
        v,
        {
          maxValue: n,
          minValue: 0,
          showLabel: !0,
          size: "medium",
          steps: 1,
          successValue: n,
          value: l,
          completed: !1,
          getProgressLabel: (i, d) => /* @__PURE__ */ o(e, { variant: "bodySmall", children: `${r("webdoxAI.planUsage.popovers.planTrial.progress", { used: i, total: d })}` })
        }
      ),
      l === 0 && /* @__PURE__ */ o(
        f,
        {
          kind: "negative",
          description: `${r("webdoxAI.planUsage.popovers.planTrial.notification")}`,
          size: "small",
          closeable: !1
        }
      )
    ] }),
    /* @__PURE__ */ o(C, { children: /* @__PURE__ */ o(
      e,
      {
        variant: "bodySmall",
        color: "brandMedium",
        fontWeight: "400",
        margin: "0px",
        children: `${r("webdoxAI.planUsage.popovers.planTrial.action")}`
      }
    ) })
  ] });
};
export {
  ro as PlanUsagePopover
};
//# sourceMappingURL=plan-usage-popover.js.map
