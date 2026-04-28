import { themedStyled as n } from "../../../../themes/utilities.js";
const p = n(
  "div",
  ({ $theme: i, $variant: a = "default" }) => ({
    display: "flex",
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    padding: `${i.spacing.spacingMd} ${i.spacing.spacingXs}`,
    boxSizing: "border-box",
    ...a === "compact" && {
      padding: `${i.spacing.spacingSm} ${i.spacing.spacingXs}`
    }
  })
);
export {
  p as StyledTextareaContainer
};
//# sourceMappingURL=styled-textarea-container.js.map
