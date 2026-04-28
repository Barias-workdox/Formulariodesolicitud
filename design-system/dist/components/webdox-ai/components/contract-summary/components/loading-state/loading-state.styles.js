import { themedStyled as e } from "../../../../../../themes/utilities.js";
import { SUMMARY_CARD_LOADING_STATE_MAX_HEIGHT as o } from "../../../data-extraction/components/data-extraction-beta/data-extraction-beta.constants.js";
const r = e("div", ({ $theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: t.spacing.spacingXs,
  minHeight: o,
  border: `1px solid ${t.colors.neutralSubtle}`
}));
export {
  r as StyledRoot
};
//# sourceMappingURL=loading-state.styles.js.map
