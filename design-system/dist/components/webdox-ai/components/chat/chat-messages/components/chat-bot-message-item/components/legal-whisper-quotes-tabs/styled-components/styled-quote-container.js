import { getCustomScrollBarStyles as i } from "../../../../../../../../../../themes/custom-scroll-bar.js";
import { themedStyled as t } from "../../../../../../../../../../themes/utilities.js";
import { MAX_QUOTES_CONTAINER_HEIGHT as l } from "../legal-whisper-quotes-tabs.constants.js";
const e = t(
  "div",
  ({ $theme: o, $gap: r }) => ({
    display: "flex",
    flexDirection: "column",
    gap: r ?? o.spacing.spacing2xs,
    padding: o.spacing.spacingXs,
    border: `solid 1px ${o.colors.neutralSubtle}`,
    maxHeight: l,
    overflow: "auto",
    ...i(o)
  })
);
export {
  e as StyledQuoteContainer
};
//# sourceMappingURL=styled-quote-container.js.map
