import { SERVICES as l } from "./message-card.constants.js";
const a = {
  default: {
    titleTextColor: "neutral",
    contentTextColor: "neutral"
  },
  hovered: {
    titleTextColor: "neutralMedium",
    contentTextColor: "neutralMedium"
  },
  active: {
    titleTextColor: "neutralStrong",
    contentTextColor: "neutralStrong"
  },
  disabled: {
    titleTextColor: "neutralDepressed",
    contentTextColor: "neutralDepressed"
  }
}, s = {
  default: "Brand",
  brain: "Power",
  legalWhisper: "Sweet",
  smartContract: "Positive"
}, d = (o, r) => {
  if (r === "disabled")
    return {
      backgroundIcon: {
        iconColor: "neutralDepressed",
        backgroundColor: "neutralSubtle"
      }
    };
  const e = s[o] || "Brand";
  return {
    backgroundIcon: {
      iconColor: `icon${e}Strong`,
      backgroundColor: `bg${e}${r === "active" ? "Depressed" : "Subtle"}`
    }
  };
}, t = (o) => {
  const r = a[o] || a.default;
  return l.reduce((e, n) => (e[n] = {
    ...d(n, o),
    ...r
  }, e), {});
}, C = t("disabled"), u = t("active"), c = t("default"), i = t("hovered"), g = ({
  $disabled: o,
  $isActive: r,
  $isHovered: e
}) => o ? C : r ? u : e ? i : c;
export {
  c as baseMessageCardColorsMap,
  g as getMessageCardColorsMap,
  i as hoveredMessageCardColorsMap
};
//# sourceMappingURL=message-card.styles.js.map
