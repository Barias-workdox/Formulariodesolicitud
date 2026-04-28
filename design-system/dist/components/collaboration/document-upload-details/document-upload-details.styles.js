import "react/jsx-runtime";
import "../../text/text.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import { commonTitleLayoutTextStyles as t } from "../../layouts/title-layout/title-layout.styles.js";
const e = {
  wrapper: () => ({ overflowY: "auto", overflowX: "hidden" }),
  lastUpdateWrapperStyles: (o) => ({
    padding: `${o.spacing.spacingMd} ${o.spacing.spacingXl}`
  })
}, g = (o) => ({
  Root: {
    rowGap: "1px",
    columnGap: o.spacing.spacingMd
  },
  StartEnhancer: {
    width: "24px",
    height: "24px"
  },
  TitleContainer: {
    ...t(o),
    ...o.typography.ParagraphSmall,
    fontWeight: 500,
    color: o.colors.neutral
  },
  SubtitleContainer: {
    ...t(o),
    ...o.typography.ParagraphXSmall
  }
});
export {
  g as lastUpdateTitleLayoutOverridesStyles,
  e as styles
};
//# sourceMappingURL=document-upload-details.styles.js.map
