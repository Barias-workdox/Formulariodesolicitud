import { themedStyled as l } from "../../../../themes/utilities.js";
const e = l("div", ({ $theme: o, $margin: d, $position: r }) => ({
  border: `1px solid ${o.colors.neutralSubtle}`,
  borderRadius: o.borders.borderSm,
  backgroundColor: o.colors.base,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: "360px",
  right: d ?? 0,
  bottom: r === "BOTTOM" ? d ?? 0 : void 0,
  top: r === "TOP" ? d ?? 0 : void 0,
  position: "absolute",
  zIndex: o.zIndex.modal ?? 1e3,
  [o.mediaQuery.small]: {
    width: "450px"
  }
}));
export {
  e as StyledMainContentContainer
};
//# sourceMappingURL=main-content.container.styles.js.map
