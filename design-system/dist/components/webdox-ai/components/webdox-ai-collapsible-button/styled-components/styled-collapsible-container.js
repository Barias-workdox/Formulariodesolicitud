import { themedStyled as a } from "../../../../../themes/utilities.js";
const d = a("div", ({ $contentHeight: n, $isToggled: t, $contentWidth: e, $direction: i, $theme: o }) => ({
  overflow: "hidden",
  transition: "all .20s ease-in-out",
  ...i === "column" && {
    height: t ? `${n}px` : 0
  },
  ...i === "row" && {
    width: t ? `${e}px` : 0,
    // The padding is added to the right side of the container to prevent the content from being cut off.
    paddingRight: t ? o.spacing.spacingMd : 0
  }
}));
export {
  d as StyledCollapsibleContainer
};
//# sourceMappingURL=styled-collapsible-container.js.map
