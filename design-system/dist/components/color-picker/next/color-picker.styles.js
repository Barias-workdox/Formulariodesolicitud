import { COMMON_HEIGHT_36 as e, COMMON_HEIGHT_24 as a } from "../../../constants/common.constants.js";
const n = (o) => {
  const t = {
    width: a,
    height: a
  }, r = {
    width: e,
    height: e
  };
  return {
    picker: {
      "32px": t,
      compact: t,
      "44px": r,
      default: r
    }[o] ?? r
  };
}, c = {
  containerStyles: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr auto"
  },
  colorPickerStyles: (o, { color: t, isValid: r, size: s }) => ({
    "-webkit-appearance": "none",
    cursor: "pointer",
    backgroundColor: r ? t : o.colors.bgBase,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: o.spacing.spacing2xs,
    border: `1px solid ${o.colors.neutralDepressed}`,
    borderRadius: o.spacing.spacing2xs,
    ...n(s).picker,
    "::-webkit-color-swatch-wrapper": {
      padding: 0
    },
    "::-webkit-color-swatch": {
      border: "none"
    },
    ":after": {
      content: r ? "" : '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(45deg, ${o.colors.negative} 25%, transparent 25%, transparent 50%, ${o.colors.negative} 50%, ${o.colors.negative} 75%, transparent 75%, ${o.colors.bgBase})`,
      backgroundSize: "6px 6px",
      backgroundColor: o.colors.bgBase
    }
  })
};
export {
  n as getSizeProperties,
  c as styles
};
//# sourceMappingURL=color-picker.styles.js.map
