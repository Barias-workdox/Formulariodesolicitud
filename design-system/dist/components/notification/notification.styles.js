import { jsx as n } from "react/jsx-runtime";
import { InformationFilled as e, WarningFilled as t, ErrorFilled as g, CheckmarkFilled as p } from "@carbon/icons-react";
const u = (o, i) => {
  switch (i) {
    case "positive":
      return {
        borderColor: "transparent",
        borderRadius: o.spacing.spacing2xs,
        icon: /* @__PURE__ */ n(
          p,
          {
            size: 20,
            color: o.colors.positive
          }
        ),
        color: o.colors.positiveStrong,
        backgroundColor: o.colors.positiveSubtle
      };
    case "negative":
      return {
        borderColor: "transparent",
        borderRadius: o.spacing.spacing2xs,
        icon: /* @__PURE__ */ n(
          g,
          {
            size: 20,
            color: o.colors.negative
          }
        ),
        color: o.colors.negativeStrong,
        backgroundColor: o.colors.negativeSubtle
      };
    case "warning":
      return {
        borderColor: "transparent",
        borderRadius: o.spacing.spacing2xs,
        icon: /* @__PURE__ */ n(
          t,
          {
            size: 20,
            color: o.colors.warning
          }
        ),
        color: o.colors.warningStrong,
        backgroundColor: o.colors.warningSubtle
      };
    case "info":
      return {
        borderColor: "transparent",
        borderRadius: o.spacing.spacing2xs,
        icon: /* @__PURE__ */ n(
          e,
          {
            size: 20,
            color: o.colors.brand
          }
        ),
        color: o.colors.brandStrong,
        backgroundColor: o.colors.brandSubtle
      };
  }
}, f = () => ({
  width: "100%"
}), x = (o, {
  marginTop: i = "auto",
  marginBottom: s = "auto",
  marginLeft: a = "auto",
  marginRight: c = "auto",
  width: l,
  kindStyle: r
}) => ({
  alignItems: "center",
  border: `1px solid ${r.borderColor}`,
  borderLeftWidth: o.spacing.spacing2xs,
  borderRadius: r.borderRadius,
  color: r.color,
  backgroundColor: r.backgroundColor,
  display: "flex",
  fontSize: "14px",
  marginBottom: s,
  marginLeft: a,
  marginRight: c,
  marginTop: i,
  width: l,
  gap: o.spacing.spacingXs
}), C = {
  notificationWrapper: () => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  }),
  textWrapper: (o) => ({
    display: "flex",
    marginLeft: o.spacing.spacingXs,
    marginRight: o.spacing.spacingXs
  }),
  titleStyles: (o) => ({
    marginRight: o.spacing.spacing2xs
  }),
  verticalCenter: () => ({
    alignItems: "center",
    display: "flex"
  }),
  endEnhancerWrapper: (o) => ({
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    gap: o.spacing.spacingXs
  })
};
export {
  f as InnerContainerStyles,
  u as kindStyles,
  x as notificationOverrideStyles,
  C as notificationStyles
};
//# sourceMappingURL=notification.styles.js.map
