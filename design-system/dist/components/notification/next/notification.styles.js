import { Warning as s, CheckmarkOutline as l, Error as d, Bullhorn as e } from "@carbon/icons-react";
import { ReactComponent as g } from "../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { ClearButton as p } from "../../clear-button/clear-button.js";
import { themedStyled as c } from "../../../themes/utilities.js";
const u = (o) => ({
  default: {
    padding: o.spacing.spacingMd
  },
  small: {
    padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`
  }
}), a = (o) => ({
  info: {
    color: o.colors.brandMedium,
    backgroundColor: o.colors.brandWashed
  },
  infoAI: {
    color: o.colors.brandMedium,
    backgroundColor: o.colors.brandWashed
  },
  negative: {
    color: o.colors.negativeMedium,
    backgroundColor: o.colors.negativeWashed
  },
  positive: {
    color: o.colors.positiveMedium,
    backgroundColor: o.colors.positiveWashed
  },
  warning: {
    color: o.colors.warningMedium,
    backgroundColor: o.colors.warningWashed
  }
}), y = {
  info: {
    Icon: e,
    iconColor: "brandMedium",
    backgroundColor: "brandSubtle"
  },
  infoAI: {
    Icon: g,
    iconColor: "brandMedium",
    backgroundColor: "brandSubtle"
  },
  negative: {
    Icon: d,
    iconColor: "negativeStrong",
    backgroundColor: "negativeSubtle"
  },
  positive: {
    Icon: l,
    iconColor: "positiveStrong",
    backgroundColor: "positiveSubtle"
  },
  warning: {
    Icon: s,
    iconColor: "warningStrong",
    backgroundColor: "warningSubtle"
  }
}, k = ({
  "data-testid": o,
  size: n,
  kind: r,
  theme: t
}) => ({
  CloseIcon: {
    component: p,
    props: {
      "data-testid": `${o}--close-button`,
      iconColor: a(t)[r].color
    },
    style: ({ $theme: i }) => ({
      width: i.spacing.spacingMd,
      height: i.spacing.spacingMd
    })
  },
  Body: {
    style: ({ $theme: i }) => ({
      margin: "0px",
      width: "auto",
      alignItems: "center",
      borderRadius: i.spacing.spacing2xs,
      ...u(i)[n],
      ...a(i)[r]
    })
  },
  InnerContainer: {
    style: () => ({
      width: "100%"
    })
  }
}), S = c("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: o.spacing.spacingMd
})), I = c("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  gap: o.spacing.spacingMd
})), M = c(
  "div",
  ({ $theme: o, $closeable: n }) => ({
    ...n && { paddingRight: o.spacing.spacingXs }
  })
), w = c(
  "div",
  ({ $theme: o, $direction: n }) => ({
    display: n === "vertical" ? "flex" : void 0,
    gap: n === "horizontal" ? o.spacing.spacing2xs : void 0,
    flexDirection: "column"
  })
), m = (o, n) => ({
  Block: {
    style: {
      display: "inline",
      fontWeight: "600",
      wordBreak: "break-word",
      color: a(o)[n].color
    }
  }
}), x = (o, n, r, t) => ({
  Block: {
    style: {
      display: "inline",
      marginLeft: n === "horizontal" && r ? o.spacing.spacing2xs : void 0,
      color: a(o)[t].color
    }
  }
});
export {
  S as StyledNotification,
  M as StyledNotificationActionContainer,
  I as StyledNotificationContent,
  w as StyledNotificationTexts,
  x as getDescriptionOverrides,
  k as getNotificationBaseOverrides,
  m as getTitleOverrides,
  y as iconVariants
};
//# sourceMappingURL=notification.styles.js.map
