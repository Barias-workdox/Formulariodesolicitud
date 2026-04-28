import { breakpoints as e } from "./v3/tokens/breakpoints.js";
const a = (r) => `@media screen and (min-width: ${r}px)`, l = {
  breakpoints: e,
  mediaQuery: {
    extrasmall: a(e.extrasmall),
    small: a(e.small),
    medium: a(e.medium),
    large: a(e.large),
    extralarge: a(e.extralarge)
  }
};
export {
  l as responsiveTheme
};
//# sourceMappingURL=responsive.js.map
