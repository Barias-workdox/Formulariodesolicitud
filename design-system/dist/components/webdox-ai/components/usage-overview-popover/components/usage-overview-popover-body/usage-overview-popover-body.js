import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { Notification as p } from "../../../../../notification/next/notification.js";
import { ProgressBar as g } from "../../../../../progress/progress-bar.js";
import "@carbon/icons-react";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import { Text as o } from "../../../../../text/text.js";
import "../../styled-components/styled-header.js";
import "../../styled-components/styled-popover-content.js";
import "../../styled-components/styled-title-container.js";
import { StyledBody as h } from "../../styled-components/styled-body.js";
import { StyledProgressBarContainer as f } from "../../styled-components/styled-progress-bar-container.js";
const k = ({
  description: l,
  disclaimer: m,
  progressBarLabelText: n,
  remainingRequests: e,
  totalRequests: d,
  warningDescription: i = "",
  isPlanUnlimited: t = !1
}) => {
  const a = e === 0 && i !== "";
  return /* @__PURE__ */ s(h, { $showNotification: a, children: [
    /* @__PURE__ */ r(
      o,
      {
        color: "neutral",
        variant: "body",
        margin: 0,
        children: l
      }
    ),
    !t && /* @__PURE__ */ s(f, { children: [
      /* @__PURE__ */ r(
        g,
        {
          completed: !1,
          value: e,
          maxValue: d,
          minValue: 0,
          showLabel: !0,
          size: "large",
          overrides: {
            BarContainer: {
              style: ({ $theme: c }) => ({
                margin: `0 0 ${c.spacing.spacingXs}`
              })
            }
          },
          getProgressLabel: () => /* @__PURE__ */ r(
            o,
            {
              variant: "bodySmall",
              margin: 0,
              color: "neutralStrong",
              children: n
            }
          )
        }
      ),
      a && /* @__PURE__ */ r(
        p,
        {
          description: i,
          kind: "negative",
          size: "small"
        }
      )
    ] }),
    !t && /* @__PURE__ */ r(
      o,
      {
        variant: "bodySmall",
        margin: 0,
        color: "neutral",
        children: m
      }
    )
  ] });
};
export {
  k as UsageOverviewPopoverBody
};
//# sourceMappingURL=usage-overview-popover-body.js.map
