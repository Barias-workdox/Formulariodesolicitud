import { COMMON_ICON_SIZE_20 as n, COMMON_ICON_SIZE_16 as o, COMMON_ICON_SIZE_32 as e } from "../../../constants/common.constants.js";
const r = {
  "24px": {
    iconSize: o
  },
  "32px": {
    iconSize: o
  },
  "44px": {
    iconSize: n
  }
}, a = {
  size: e,
  kind: "brand",
  appearance: "filled",
  shape: "round"
}, i = "background-icon", c = ["brand", "neutral"], d = {
  brand: {
    filled: {
      backgroundColor: "brandSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "brandSubtle",
      iconColor: "brand"
    }
  },
  neutral: {
    filled: {
      backgroundColor: "neutralSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "neutralSubtle",
      iconColor: "neutral"
    }
  },
  positive: {
    filled: {
      backgroundColor: "positiveSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "positiveSubtle",
      iconColor: "positive"
    }
  },
  negative: {
    filled: {
      backgroundColor: "negativeSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "negativeSubtle",
      iconColor: "negative"
    }
  },
  warning: {
    filled: {
      backgroundColor: "warningSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "warningSubtle",
      iconColor: "warning"
    }
  },
  peace: {
    filled: {
      backgroundColor: "peaceSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "peaceSubtle",
      iconColor: "peace"
    }
  },
  power: {
    filled: {
      backgroundColor: "powerSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "powerSubtle",
      iconColor: "power"
    }
  },
  sweet: {
    filled: {
      backgroundColor: "sweetSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "sweetSubtle",
      iconColor: "sweet"
    }
  },
  heat: {
    filled: {
      backgroundColor: "heatSubdued",
      iconColor: "iconBase"
    },
    tonal: {
      backgroundColor: "heatSubtle",
      iconColor: "heat"
    }
  }
}, u = {
  backgroundColor: "neutralSubtle",
  iconColor: "neutralSubdued"
};
export {
  d as BACKGROUND_ICON_COLORS,
  a as BACKGROUND_ICON_DEFAULTS,
  r as BACKGROUND_ICON_SIZE_MAP,
  i as BACKGROUND_ICON_TEST_ID,
  c as BADGE_ENABLED_KINDS,
  u as DISABLED_COLORS
};
//# sourceMappingURL=background-icon.constants.js.map
