import { themedStyled as a } from "../../../../../../../../themes/utilities.js";
const s = a("div", ({ $theme: o }) => ({
  width: "2px",
  height: "2px",
  borderRadius: "50%",
  backgroundColor: o.colors.bgBase,
  boxShadow: `${o.spacing.spacing2xs} 0 ${o.colors.bgBase}, -${o.spacing.spacing2xs} 0 ${o.colors.bgBase}`,
  position: "relative",
  animationDuration: o.animation.timing500,
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-out",
  animationDirection: "alternate",
  animationName: {
    "0%": {
      backgroundColor: o.colors.power,
      boxShadow: `${o.spacing.spacing2xs} 0 ${o.colors.power}, -${o.spacing.spacing2xs} 0 ${o.colors.bgBase}`
    },
    "50%": {
      backgroundColor: o.colors.bgBase,
      boxShadow: `${o.spacing.spacing2xs} 0 ${o.colors.power}, -${o.spacing.spacing2xs} 0 ${o.colors.power}`
    },
    "100%": {
      backgroundColor: o.colors.power,
      boxShadow: `${o.spacing.spacing2xs} 0 ${o.colors.bgBase}, -${o.spacing.spacing2xs} 0 ${o.colors.power}`
    }
  }
}));
export {
  s as StyledAnimatedDots
};
//# sourceMappingURL=styled-animated-dots.js.map
