import { jsx as t } from "react/jsx-runtime";
import { WarningFilled as u, CheckmarkFilled as h } from "@carbon/icons-react";
import { BackgroundIcon as g } from "../../../../../../background-icon/background-icon.js";
import { Text as e } from "../../../../../../text/text.js";
import { useCss as y } from "../../../../../../utils/hooks/use-css.js";
import { TitleLayout as f } from "../../../../../../layouts/title-layout/title-layout.js";
import "../../../../../../layouts/title-layout/title-layout.styles.js";
import { StatefulTooltip as b } from "../../../../../../tooltip/stateful-tooltip.js";
import { useDateUtilsWithLocale as x } from "../../../../../../utils/hooks/use-date-util-with-locale.js";
import { useTranslation as T } from "../../../../../../utils/i18n/utils.js";
import { styles as o } from "./third-party-status.styles.js";
const v = {
  approved: {
    text: "contractNegotiationCollaboration.activityTab.thirdParty.status.approved",
    icon: {
      Icon: h,
      color: "positiveMedium",
      backgroundColor: "positiveWashed"
    }
  },
  pending: {
    text: "contractNegotiationCollaboration.activityTab.thirdParty.status.pending",
    icon: {
      Icon: u,
      color: "warningStrong",
      backgroundColor: "warningWashed"
    }
  }
}, N = ({
  thirdParty: { name: r, status: a, approvedAt: n }
}) => {
  const { theme: i } = y(o), { formatDateAsText: l } = x(), { t: c } = T(), {
    text: s,
    icon: { Icon: m, color: d, backgroundColor: p }
  } = v[a];
  return /* @__PURE__ */ t(
    f,
    {
      startEnhancer: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
        g,
        {
          shape: "round",
          Icon: m,
          iconColor: d,
          backgroundColor: p,
          size: "36px"
        }
      ) }),
      titleText: /* @__PURE__ */ t(
        b,
        {
          showArrow: !0,
          placement: "bottom",
          content: r,
          children: /* @__PURE__ */ t(
            e,
            {
              variant: "bodySmall",
              margin: 0,
              fontWeight: "500",
              $style: o.textStyles(i),
              children: r
            }
          )
        }
      ),
      subtitleText: /* @__PURE__ */ t(
        e,
        {
          variant: "bodySmall",
          margin: 0,
          color: "neutralSubdued",
          $style: o.textStyles(i),
          children: c(s, { date: l(n, !0) })
        }
      )
    }
  );
};
export {
  N as ThirdPartyStatus
};
//# sourceMappingURL=third-party-status.js.map
