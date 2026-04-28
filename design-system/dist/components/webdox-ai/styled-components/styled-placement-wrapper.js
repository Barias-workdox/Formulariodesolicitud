import { POSITION_BY_PLACEMENT as p, PLACEMENT as d } from "../../../constants/placement.constants.js";
import { themedStyled as i } from "../../../themes/utilities.js";
const m = i("div", ({ $placement: r = d.BOTTOM_RIGHT, $zIndex: n, $customLeft: e, $customRight: t }) => {
  const o = p[r];
  return {
    position: "fixed",
    zIndex: n,
    ...o,
    ...e && { left: e },
    ...t && { right: t }
  };
});
export {
  m as StyledPlacementWrapper
};
//# sourceMappingURL=styled-placement-wrapper.js.map
