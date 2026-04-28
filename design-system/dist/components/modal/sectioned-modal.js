import { ModalHeader as i, ModalBody as t, ModalFooter as a } from "baseui/modal";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedWithStyle as r } from "../../themes/utilities.js";
import { commonModalHeader as p, commonSpacing as n } from "./common.js";
const y = r(i, ({ $theme: o, $paddingVertical: d }) => ({
  ...p(o),
  padding: d ?? o.spacing.spacingMd,
  margin: 0,
  lineHeight: o.spacing.spacing3xl,
  borderBottomColor: o.colors.neutralSubtle,
  borderBottomWidth: "1px",
  borderBottomStyle: "solid"
})), S = r(t, ({ $theme: o }) => ({
  ...o.typography.ParagraphSmall,
  margin: o.spacing.spacingMd,
  minHeight: "80px",
  ":last-of-type": {
    paddingBottom: "40px"
  }
})), b = r(a, ({ $theme: o }) => ({
  ...n,
  display: "grid",
  gridAutoFlow: "column",
  justifyContent: "end",
  columnGap: o.spacing.spacingMd,
  padding: o.spacing.spacingMd,
  borderTopColor: o.colors.neutralSubtle,
  borderTopWidth: "1px",
  borderTopStyle: "solid"
}));
export {
  S as SectionedModalBody,
  b as SectionedModalFooter,
  y as SectionedModalHeader
};
//# sourceMappingURL=sectioned-modal.js.map
