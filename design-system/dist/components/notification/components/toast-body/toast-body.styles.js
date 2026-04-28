import { Information as i, WarningHex as a, ErrorOutline as t, CheckmarkOutline as d } from "@carbon/icons-react";
import { COMMON_ICON_SIZE_24 as c } from "../../../../constants/common.constants.js";
const p = {
  bodyWrapper: () => ({
    display: "flex",
    alignItems: "center",
    width: "100%"
  }),
  childrenWrapper: (o) => ({
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingLeft: o.spacing.spacingXs
  })
}, s = {
  Root: {
    style: ({ $theme: o }) => ({
      borderRadius: o.borders.borderCircle
    })
  }
}, u = (o) => ({
  icon: o.icon,
  backgroundColor: o.iconBackgroundColor,
  iconColor: o.iconColor,
  shape: "square",
  size: c,
  overrides: s
}), C = (o) => ({
  positive: {
    icon: d,
    iconColor: "positive",
    iconBackgroundColor: "positiveSubtle",
    leftBorderColor: "positiveDepressed"
  },
  negative: {
    icon: t,
    iconColor: "negative",
    iconBackgroundColor: "negativeSubtle",
    leftBorderColor: "negativeDepressed"
  },
  warning: {
    icon: a,
    iconColor: "warning",
    iconBackgroundColor: "warningSubtle",
    leftBorderColor: "warningDepressed"
  },
  info: {
    icon: i,
    iconColor: "brand",
    iconBackgroundColor: "brandSubtle",
    leftBorderColor: "brandDepressed"
  }
})[o], b = (o, { style: r, width: e }) => {
  const { leftBorderColor: n } = r;
  return {
    backgroundColor: o.colors.neutralMedium,
    borderLeft: `8px solid ${o.colors[n]}`,
    boxSizing: "border-box",
    marginTop: o.spacing.spacingMd,
    marginBottom: 0,
    padding: o.spacing.spacingXs,
    zIndex: 1,
    width: "calc(100% - 32px)",
    [o.mediaQuery.medium]: {
      width: "60vw"
    },
    [o.mediaQuery.large]: {
      width: "40vw"
    },
    [o.mediaQuery.extralarge]: {
      width: "20vw"
    },
    ...e ? { width: e } : {}
  };
};
export {
  s as backgroundIconOverrides,
  C as getKindValues,
  u as getToastIconProps,
  b as styledBody,
  p as toasterContainerStyles
};
//# sourceMappingURL=toast-body.styles.js.map
