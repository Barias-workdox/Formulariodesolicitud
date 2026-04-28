import { themedStyled as o } from "../../../../themes/utilities.js";
const r = o(
  "div",
  ({ $theme: e, $direction: t = "row" }) => ({
    width: "100%",
    alignItems: t === "row" ? "center" : "start",
    display: "flex",
    flexDirection: t,
    gap: e.spacing.spacingXs
  })
);
export {
  r as StyledRoot
};
//# sourceMappingURL=message-card-title.styles.js.map
