import { themedStyled as t } from "../../../../themes/utilities.js";
const r = t(
  "div",
  () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%"
  })
), i = t(
  "span",
  () => ({
    fontSize: "16px"
  })
), n = t(
  "div",
  ({ $theme: o, $isExpanded: e }) => ({
    display: "flex",
    flexDirection: "column",
    borderTop: `1px solid ${o.colors.neutralSubtle}`,
    overflow: "hidden",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    maxHeight: 0,
    opacity: 0,
    transform: "translateY(-10px)",
    ...e && {
      borderTop: `1px solid ${o.colors.neutralWashed}`,
      borderBottom: `1px solid ${o.colors.neutralWashed}`,
      maxHeight: "455px",
      opacity: 1,
      transform: "translateY(0)"
    }
  })
);
export {
  n as StyledContent,
  i as StyledFlagIcon,
  r as StyledRoot
};
//# sourceMappingURL=language-selector.styles.js.map
