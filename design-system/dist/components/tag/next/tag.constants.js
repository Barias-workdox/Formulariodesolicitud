import { COMMON_HEIGHT_32 as o, COMMON_HEIGHT_24 as r, COMMON_HEIGHT_20 as e } from "../../../constants/common.constants.js";
const a = "pill", l = "md", b = 180, n = 240, u = {
  positive: "positive",
  negative: "negative",
  warning: "warning",
  neutral: "neutral",
  peace: "peace",
  power: "power",
  brand: "brand",
  ai: "brand"
}, g = {
  sm: {
    height: e,
    gap: "4px"
  },
  md: {
    height: r,
    gap: "8px"
  },
  lg: {
    height: o,
    gap: "12px"
  }
}, t = {
  rounded: {
    sm: {
      borderRadius: "4px"
    },
    md: {
      borderRadius: "4px"
    },
    lg: {
      borderRadius: "4px"
    }
  },
  pill: {
    sm: {
      borderRadius: e
    },
    md: {
      borderRadius: r
    },
    lg: {
      borderRadius: o
    }
  }
}, i = {
  light: {
    border: "none"
  },
  outlined: {
    border: "1px solid"
  }
}, c = {
  positive: {
    light: {
      default: {
        backgroundColor: "positiveWashed",
        color: "positiveMedium",
        borderColor: "positiveWashed"
      },
      hover: {
        backgroundColor: "positiveSubtle",
        borderColor: "positiveSubtle"
      },
      focus: {
        backgroundColor: "positiveWashed",
        borderColor: "positive"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "positiveMedium",
        borderColor: "positive"
      },
      hover: {
        backgroundColor: "positiveSubtle",
        borderColor: "positive"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "positive"
      }
    }
  },
  negative: {
    light: {
      default: {
        backgroundColor: "negativeWashed",
        color: "negativeMedium",
        borderColor: "negativeWashed"
      },
      hover: {
        backgroundColor: "negativeSubtle",
        borderColor: "negativeSubtle"
      },
      focus: {
        backgroundColor: "negativeWashed",
        borderColor: "negative"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "negativeMedium",
        borderColor: "negative"
      },
      hover: {
        backgroundColor: "negativeSubtle",
        borderColor: "negative"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "negative"
      }
    }
  },
  warning: {
    light: {
      default: {
        backgroundColor: "warningWashed",
        color: "warningMedium",
        borderColor: "warningWashed"
      },
      hover: {
        backgroundColor: "warningSubtle",
        borderColor: "warningSubtle"
      },
      focus: {
        backgroundColor: "warningWashed",
        borderColor: "warning"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "warningMedium",
        borderColor: "warning"
      },
      hover: {
        backgroundColor: "warningSubtle",
        borderColor: "warning"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "warning"
      }
    }
  },
  neutral: {
    light: {
      default: {
        backgroundColor: "neutralBase",
        color: "neutralMedium",
        borderColor: "neutralBase"
      },
      hover: {
        backgroundColor: "neutralWashed",
        borderColor: "neutralWashed"
      },
      focus: {
        backgroundColor: "neutralBase",
        borderColor: "neutralStrong"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "neutralMedium",
        borderColor: "neutralSubtle"
      },
      hover: {
        backgroundColor: "neutralWashed",
        borderColor: "neutralWashed"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "neutralStrong"
      }
    }
  },
  peace: {
    light: {
      default: {
        backgroundColor: "peaceWashed",
        color: "peaceMedium",
        borderColor: "peaceWashed"
      },
      hover: {
        backgroundColor: "peaceSubtle",
        borderColor: "peaceSubtle"
      },
      focus: {
        backgroundColor: "peaceWashed",
        borderColor: "peace"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "peaceMedium",
        borderColor: "peace"
      },
      hover: {
        backgroundColor: "peaceSubtle",
        borderColor: "peace"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "peace"
      }
    }
  },
  power: {
    light: {
      default: {
        backgroundColor: "powerWashed",
        color: "powerMedium",
        borderColor: "powerWashed"
      },
      hover: {
        backgroundColor: "powerSubtle",
        borderColor: "powerSubtle"
      },
      focus: {
        backgroundColor: "powerWashed",
        borderColor: "power"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "power",
        borderColor: "power"
      },
      hover: {
        backgroundColor: "powerSubtle",
        borderColor: "power"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "power"
      }
    }
  },
  brand: {
    light: {
      default: {
        backgroundColor: "brandWashed",
        color: "brandMedium",
        borderColor: "brandWashed"
      },
      hover: {
        backgroundColor: "brandSubtle",
        borderColor: "brandSubtle"
      },
      focus: {
        backgroundColor: "brandWashed",
        borderColor: "brand"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBase",
        color: "brandMedium",
        borderColor: "brand"
      },
      hover: {
        backgroundColor: "brandWashed",
        borderColor: "brand"
      },
      focus: {
        backgroundColor: "bgBase",
        borderColor: "brand"
      }
    }
  },
  ai: {
    light: {
      default: {
        backgroundColor: "bgBrandAI",
        color: "brandMedium",
        borderColor: "transparent"
      },
      hover: {
        backgroundColor: "bgBrandAIHover",
        borderColor: "transparent"
      },
      focus: {
        backgroundColor: "bgBrandAI",
        borderColor: "brand"
      }
    },
    outlined: {
      default: {
        backgroundColor: "bgBrandAI",
        color: "brandMedium",
        borderColor: "brand"
      },
      hover: {
        backgroundColor: "bgBrandAIHover",
        borderColor: "brand"
      },
      focus: {
        backgroundColor: "bgBrandAI",
        borderColor: "brand"
      }
    }
  }
};
export {
  a as DEFAULT_SHAPE,
  l as DEFAULT_SIZE,
  n as ELLIPSIS_THRESHOLD,
  i as MAP_BORDER,
  c as MAP_COLORS,
  u as MAP_ICON_COLOR,
  t as MAP_SHAPE,
  g as MAP_SIZE,
  b as TOOLTIP_THRESHOLD
};
//# sourceMappingURL=tag.constants.js.map
