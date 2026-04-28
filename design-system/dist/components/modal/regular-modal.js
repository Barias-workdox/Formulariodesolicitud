import { ModalHeader as d, ModalBody as t, ModalFooter as l } from "baseui/modal";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedWithStyle as a, themedStyled as r } from "../../themes/utilities.js";
import { commonSpacing as p, commonModalHeader as i } from "./common.js";
const u = a(d, ({ $theme: o }) => ({
  ...i(o),
  ...p,
  paddingBottom: o.spacing.spacingXs,
  paddingTop: "50px"
})), M = r("span", ({ $theme: o }) => ({
  ...o.typography.LabelXSmall,
  display: "block",
  marginBottom: "5px",
  color: o.colors.neutralSubdued
})), x = a(t, ({ $theme: o }) => ({
  ...o.typography.ParagraphSmall,
  ...p,
  paddingBottom: o.spacing.spacingXs,
  paddingTop: o.spacing.spacingXs,
  ":last-of-type": {
    paddingBottom: "40px"
  }
})), B = a(l, () => ({
  ...p,
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "end",
  columnGap: "10px",
  paddingBottom: "20px",
  paddingTop: "10px"
}));
export {
  x as RegularModalBody,
  B as RegularModalFooter,
  u as RegularModalHeader,
  M as RegularModalLabel
};
//# sourceMappingURL=regular-modal.js.map
