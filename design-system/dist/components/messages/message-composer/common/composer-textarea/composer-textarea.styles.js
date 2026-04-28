import { themedStyled as e } from "../../../../../themes/utilities.js";
const n = e(
  "div",
  ({ $theme: o, $padding: r, $disabled: a }) => ({
    ...o.typography.ParagraphSmall,
    cursor: "text",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    border: "none",
    color: o.colors.neutralSubdued,
    padding: r ?? `0 ${o.spacing.spacingMd}`,
    flex: 1,
    overflow: "auto",
    outline: "none",
    ...a && {
      pointerEvents: "none",
      opacity: 0.4,
      cursor: "not-allowed"
    },
    "[placeholder]:empty::before": {
      ...o.typography.ParagraphXSmall,
      content: "attr(placeholder)",
      color: o.colors.neutralDepressed
    }
  })
);
export {
  n as StyledDiv
};
//# sourceMappingURL=composer-textarea.styles.js.map
