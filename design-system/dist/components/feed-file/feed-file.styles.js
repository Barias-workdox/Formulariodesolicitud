import { themedStyled as i } from "../../themes/utilities.js";
const o = i("ul", ({ $theme: e }) => ({
  display: "flex",
  flexFlow: "row wrap",
  gap: e.spacing.spacingXs,
  overflowX: "auto",
  backgroundColor: e.colors.neutralWashed,
  padding: e.spacing.spacingMd,
  margin: 0,
  maxHeight: "355px"
})), a = i(
  "li",
  ({ $theme: e, $backgroundColor: l = "bgBase" }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: e.spacing.spacingXs,
    gap: e.spacing.spacingXs,
    width: "100%",
    backgroundColor: e.colors[l],
    boxSizing: "border-box"
  })
), d = i("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  ...e.typography.ParagraphSmall,
  color: e.colors.neutralSubdued,
  gap: e.spacing.spacingXs,
  lineHeight: 0,
  width: "100%"
})), t = i("div", () => ({
  flex: 1,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap"
})), s = i("div", () => ({
  display: "flex",
  minWidth: 0
})), r = i("div", () => ({
  flexShrink: 1,
  minWidth: 0
})), p = i("div", () => ({
  flexShrink: 0
})), c = {
  documentNameStyles: (e) => ({
    margin: 0,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: e.colors.neutralSubdued
  })
}, g = () => ({
  Body: {
    style: {
      maxWidth: "284px"
    }
  }
});
export {
  a as StyledFeedFile,
  o as StyledFeedFileContainer,
  d as StyledFeedFileInfo,
  t as StyledFeedFileName,
  p as StyledNameContainer,
  s as StyledPathAndNameContainer,
  r as StyledPathContainer,
  g as feedFileTooltipOverrides,
  c as styles
};
//# sourceMappingURL=feed-file.styles.js.map
