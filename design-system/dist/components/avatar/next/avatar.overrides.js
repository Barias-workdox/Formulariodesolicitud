const i = {
  users: {
    filled: { backgroundColor: "brand", textColor: "textBase" },
    tonal: { backgroundColor: "brandWashed", textColor: "brand" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  group: {
    filled: { backgroundColor: "neutral", textColor: "textBase" },
    tonal: { backgroundColor: "neutralWashed", textColor: "neutralMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  people: {
    filled: { backgroundColor: "peace", textColor: "textBase" },
    tonal: { backgroundColor: "peaceWashed", textColor: "peaceMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  companies: {
    filled: { backgroundColor: "power", textColor: "textBase" },
    tonal: { backgroundColor: "powerWashed", textColor: "powerMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  mint: {
    filled: { backgroundColor: "positive", textColor: "textBase" },
    tonal: { backgroundColor: "positiveSubtle", textColor: "positiveMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  cherry: {
    filled: { backgroundColor: "negative", textColor: "textBase" },
    tonal: { backgroundColor: "negativeWashed", textColor: "negativeMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  sunrise: {
    filled: { backgroundColor: "warning", textColor: "textBase" },
    tonal: { backgroundColor: "warningWashed", textColor: "warningMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  sweet: {
    filled: { backgroundColor: "sweet", textColor: "textBase" },
    tonal: { backgroundColor: "sweetWashed", textColor: "sweetMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  },
  heat: {
    filled: { backgroundColor: "heat", textColor: "textBase" },
    tonal: { backgroundColor: "heatWashed", textColor: "heatMedium" },
    image: { backgroundColor: "transparent", textColor: "textBase" }
  }
}, C = (t, e) => i[t][e], d = {
  "44px": "16px",
  "32px": "14px",
  "24px": "12px"
}, x = ({
  dataTestId: t,
  backgroundColor: e,
  textColor: l,
  disabled: o,
  size: r,
  clickable: n,
  name: s
}) => ({
  Root: {
    props: { "data-testid": `${t}--root` },
    style: ({ $theme: a }) => ({
      backgroundColor: o ? a.colors.neutralSubtle : a.colors[e],
      flexShrink: 0,
      cursor: n && !o ? "pointer" : "default",
      transition: n ? "opacity 0.2s ease, transform 0.1s ease" : void 0
    })
  },
  Initials: {
    props: { "data-testid": `${t}--initials` },
    style: ({ $theme: a }) => ({
      fontSize: d[r],
      lineHeight: "unset",
      fontWeight: 700,
      color: o ? a.colors.neutralDepressed : a.colors[l]
    })
  },
  Avatar: {
    props: {
      "data-testid": `${t}--image`,
      alt: s
    }
  }
}), u = (t, e = "32px", l) => {
  let o = t;
  if ((!o || !o.trim()) && l && (o = l.split(" ").map((n) => n.charAt(0)).join("")), !o) return;
  const r = o.trim().toUpperCase();
  if (r)
    return e === "44px" ? r.slice(0, 2) : r.slice(0, 1);
};
export {
  d as avatarFontSizeMap,
  C as getAvatarColorConfig,
  x as getAvatarOverrides,
  u as processInitials
};
//# sourceMappingURL=avatar.overrides.js.map
