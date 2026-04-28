import "react/jsx-runtime";
import "../../../text/text.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import { commonTitleLayoutTextStyles as a } from "../../../layouts/title-layout/title-layout.styles.js";
const g = (t) => ({
  Root: {
    rowGap: "1px",
    columnGap: t.spacing.spacingMd
  },
  StartEnhancer: {
    width: "24px",
    height: "24px"
  },
  TitleContainer: {
    ...a(t),
    ...t.typography.ParagraphSmall,
    fontWeight: 500,
    color: t.colors.neutral
  },
  SubtitleContainer: {
    ...a(t),
    ...t.typography.ParagraphXSmall
  }
}), y = {
  lastUpdateWrapperStyles: (t) => ({
    padding: `0 ${t.spacing.spacingXl} ${t.spacing.spacingMd}`
  })
};
export {
  g as lastUpdateTitleLayoutOverridesStyles,
  y as styles
};
//# sourceMappingURL=document-approval-details-last-update.styles.js.map
