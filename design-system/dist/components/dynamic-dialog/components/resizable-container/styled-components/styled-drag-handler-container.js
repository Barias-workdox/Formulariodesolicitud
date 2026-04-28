import { themedStyled as r } from "../../../../../themes/utilities.js";
const e = r("button", ({ $theme: o }) => ({
  display: "flex",
  justifyContent: "center",
  padding: `${o.spacing.spacing2xs}`,
  border: "none",
  outline: "none",
  backgroundColor: o.colors.bgBase,
  ":hover": {
    cursor: "pointer",
    backgroundColor: o.colors.neutralWashed
  },
  ":active": {
    cursor: "default",
    backgroundColor: o.colors.neutralSubtle
  }
}));
export {
  e as StyledDragHandlerContainer
};
//# sourceMappingURL=styled-drag-handler-container.js.map
