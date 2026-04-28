const o = (r) => ({
  button: {
    default: {
      backgroundColor: r.brand,
      border: `1px solid ${r.brand}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.brandMedium,
      border: `1px solid ${r.brandMedium}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.brandStrong,
      border: `1px solid ${r.brandStrong}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
}), e = (r) => ({
  button: {
    default: {
      backgroundColor: r.brandBase,
      border: `1px solid ${r.brandBase}`,
      color: r.brand
    },
    hover: {
      backgroundColor: r.brandWashed,
      border: `1px solid ${r.brandWashed}`,
      color: r.brandMedium
    },
    active: {
      backgroundColor: r.brandSubtle,
      border: `1px solid ${r.brandSubtle}`,
      color: r.brandMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), n = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.brand}`,
      color: r.brand
    },
    hover: {
      backgroundColor: r.brandWashed,
      border: `1px solid ${r.brand}`,
      color: r.brandMedium
    },
    active: {
      backgroundColor: r.brandSubtle,
      border: `1px solid ${r.brand}`,
      color: r.brandMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), t = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.borderTransparent}`,
      color: r.brand
    },
    hover: {
      backgroundColor: r.brandWashed,
      border: `1px solid ${r.brandWashed}`,
      color: r.brandMedium
    },
    active: {
      backgroundColor: r.brandSubtle,
      border: `1px solid ${r.brandSubtle}`,
      color: r.brandMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), a = (r) => ({
  button: {
    default: {
      backgroundColor: r.neutral,
      border: `1px solid ${r.neutral}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.neutralMedium,
      border: `1px solid ${r.neutralMedium}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.neutralStrong,
      border: `1px solid ${r.neutralStrong}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
}), d = (r) => ({
  button: {
    default: {
      backgroundColor: r.neutralBase,
      border: `1px solid ${r.neutralBase}`,
      color: r.neutral
    },
    hover: {
      backgroundColor: r.neutralWashed,
      border: `1px solid ${r.neutralWashed}`,
      color: r.neutralMedium
    },
    active: {
      backgroundColor: r.neutralSubtle,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutralMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), l = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutral
    },
    hover: {
      backgroundColor: r.neutralWashed,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutralStrong
    },
    active: {
      backgroundColor: r.neutralSubtle,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutralStrong
    }
  },
  spinner: {
    kind: "brand"
  }
}), u = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.borderTransparent}`,
      color: r.neutral
    },
    hover: {
      backgroundColor: r.neutralWashed,
      border: `1px solid ${r.neutralWashed}`,
      color: r.neutralMedium
    },
    active: {
      backgroundColor: r.neutralSubtle,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutralMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), b = (r) => ({
  button: {
    default: {
      backgroundColor: r.positive,
      border: `1px solid ${r.positive}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.positiveMedium,
      border: `1px solid ${r.positiveMedium}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.positiveStrong,
      border: `1px solid ${r.positiveStrong}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
}), s = (r) => ({
  button: {
    default: {
      backgroundColor: r.negative,
      border: `1px solid ${r.negative}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.negativeMedium,
      border: `1px solid ${r.negativeMedium}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.negativeStrong,
      border: `1px solid ${r.negativeStrong}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
}), i = (r) => ({
  button: {
    default: {
      backgroundColor: r.bgBase,
      border: `1px solid ${r.borderBase}`,
      color: r.neutral
    },
    hover: {
      backgroundColor: r.neutralWashed,
      border: `1px solid ${r.neutralWashed}`,
      color: r.neutralMedium
    },
    active: {
      backgroundColor: r.neutralSubtle,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.neutralMedium
    }
  },
  spinner: {
    kind: "brand"
  }
}), p = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.neutralStrong,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.neutralStrong,
      border: `1px solid ${r.neutralSubtle}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
}), g = (r) => ({
  button: {
    default: {
      backgroundColor: r.transparent,
      border: `1px solid ${r.borderTransparent}`,
      color: r.textBase
    },
    hover: {
      backgroundColor: r.neutralStrong,
      border: `1px solid ${r.neutralStrong}`,
      color: r.textBase
    },
    active: {
      backgroundColor: r.neutralStrong,
      border: `1px solid ${r.neutralStrong}`,
      color: r.textBase
    }
  },
  spinner: {
    kind: "contrast"
  }
});
export {
  o as brandFilled,
  t as brandGhost,
  n as brandOutlined,
  e as brandTonal,
  i as contrastFilled,
  g as contrastGhost,
  p as contrastOutlined,
  s as negativeFilled,
  a as neutralFilled,
  u as neutralGhost,
  l as neutralOutlined,
  d as neutralTonal,
  b as positiveFilled
};
//# sourceMappingURL=button.variants.js.map
