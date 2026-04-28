import { getCustomScrollBarStyles as a } from "../../../../../themes/custom-scroll-bar.js";
import { themedStyled as e } from "../../../../../themes/utilities.js";
const s = e(
  "div",
  ({ $theme: o, $disabled: r, $isEmpty: n }) => ({
    ...o.typography.ParagraphMedium,
    flex: 1,
    cursor: "text",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    border: "none",
    color: o.colors.neutralSubdued,
    height: "100%",
    overflow: "auto",
    outline: "none",
    padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
    ...r && {
      pointerEvents: "none",
      cursor: "not-allowed"
    },
    ...n && {
      position: "relative",
      // needed for absolute ::before
      "::before": {
        ...o.typography.ParagraphMedium,
        position: "absolute",
        content: "attr(placeholder)",
        color: o.colors.neutralDepressed,
        overflow: "hidden",
        maxWidth: `calc(100% - 2 * ${o.spacing.spacingMd})`,
        pointerEvents: "none"
      }
    },
    ...a(o)
  })
);
export {
  s as StyledMessageBoxTextarea
};
//# sourceMappingURL=styled-message-box-textarea.js.map
