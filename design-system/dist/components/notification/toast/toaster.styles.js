import { themedStyled as e } from "../../../themes/utilities.js";
const n = e(
  "div",
  () => ({
    display: "flex",
    alignItems: "unset",
    flexDirection: "column",
    height: "100%"
  })
), r = e(
  "div",
  ({ $hasLink: t }) => ({
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    ...t && { marginBottom: "2px" }
  })
), l = e(
  "div",
  () => ({
    alignSelf: "flex-start"
  })
);
export {
  l as LinkWrapper,
  r as TitleWrapper,
  n as ToasterWrapper
};
//# sourceMappingURL=toaster.styles.js.map
