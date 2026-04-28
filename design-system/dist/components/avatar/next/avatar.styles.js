import { themedStyled as n } from "../../../themes/utilities.js";
const e = n("div", ({ $theme: o }) => ({
  width: "fit-content",
  display: "inline-block",
  border: "none",
  background: "none",
  padding: 0,
  margin: 0,
  textDecoration: "none",
  color: "inherit",
  font: "inherit",
  borderRadius: "50%",
  ":focus-visible": {
    outline: `2px solid ${o.colors.neutralStrong}`,
    outlineOffset: "2px"
  }
}));
export {
  e as AvatarAnchor
};
//# sourceMappingURL=avatar.styles.js.map
