import { themedStyled as a } from "../../../themes/utilities.js";
const o = a(
  "div",
  ({ $show: t, $duration: e }) => ({
    opacity: t ? 1 : 0,
    transform: t ? "scale(1)" : "scale(0.8)",
    transition: `all ${e}ms ease-in-out`
  })
);
export {
  o as StyledChildContainer
};
//# sourceMappingURL=styled-child-container.js.map
