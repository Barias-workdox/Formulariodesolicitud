import { inputOverrides as r } from "../../../search-container/components/search-input/search-input.styles.js";
import { mergeOverridesDeep as t } from "../../../utils/baseui/helpers.js";
import { themedStyled as i } from "../../../../themes/utilities.js";
const m = i(
  "div",
  ({ $width: e }) => ({ width: e })
), s = t(r, {
  Input: { style: { fontSize: "16px" } }
});
export {
  m as StyledWrapper,
  s as inputOverrides
};
//# sourceMappingURL=flat-suggestions-input.styles.js.map
