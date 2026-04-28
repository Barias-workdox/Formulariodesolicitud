const l = {
  peaceSubtle: "peaceStrong",
  brandSubtle: "brandMedium",
  powerSubtle: "powerStrong",
  neutralSubtle: "neutral",
  neutralWashed: "neutral",
  powerWashed: "power",
  /** @deprecated Use peaceSubtle instead */
  bgPeaceSubtle: "textPeaceStrong",
  /** @deprecated Use brandSubtle instead */
  bgBrandSubtle: "textBrandMedium",
  /** @deprecated Use powerSubtle instead */
  bgPowerSubtle: "textPowerStrong",
  /** @deprecated Use neutralSubtle instead */
  bgNeutralSubtle: "textNeutral",
  /** @deprecated Use neutralWashed instead */
  bgNeutralWashed: "textNeutral",
  /** @deprecated Use powerWashed instead */
  bgPowerWashed: "textPower"
}, s = {
  "40px": "16px",
  "32px": "14px",
  "24px": "12px"
}, n = ({
  "data-testid": r,
  backgroundColor: t,
  disabled: a,
  size: o
}) => ({
  Root: {
    props: { "data-testid": `${r}--root` },
    style: ({ $theme: e }) => ({
      backgroundColor: a ? e.colors.neutralDepressed : t ? e.colors[t] : void 0,
      flexShrink: 0
    })
  },
  Initials: {
    props: { "data-testid": `${r}--initials` },
    style: ({ $theme: e }) => ({
      fontSize: s[o],
      lineHeight: "unset",
      fontWeight: 700,
      color: e.colors[l[t] || "textBase"]
    })
  }
});
export {
  s as avatarFontSizeMap,
  n as getAvatarOverrides
};
//# sourceMappingURL=avatar.overrides.js.map
