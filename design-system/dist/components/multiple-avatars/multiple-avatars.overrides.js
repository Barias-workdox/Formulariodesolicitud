const l = {
  brain: {
    backgroundColor: "powerSubtle",
    textColor: "powerStrong"
  },
  default: {
    backgroundColor: "brandSubtle",
    textColor: "brandMedium"
  },
  companies: {
    backgroundColor: "powerWashed",
    textColor: "powerMedium"
  },
  groups: {
    backgroundColor: "neutralWashed",
    textColor: "neutralMedium"
  }
}, a = ({
  variant: r = "default"
}) => {
  const { backgroundColor: t, textColor: e } = l[r];
  return {
    Root: {
      style: ({ $theme: o }) => ({
        backgroundColor: o.colors[t]
      })
    },
    Initials: {
      style: ({ $theme: o }) => ({
        color: o.colors[e]
      })
    }
  };
};
export {
  a as getAvatarCounterOverrides
};
//# sourceMappingURL=multiple-avatars.overrides.js.map
