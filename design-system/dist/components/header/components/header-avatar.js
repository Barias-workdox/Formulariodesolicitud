import { jsx as s } from "react/jsx-runtime";
import { Avatar as d } from "../../avatar/next/avatar.js";
import { useHeader as i } from "../header.provider.js";
import { composeDataTestId as m } from "../utils/compose-data-test-id.js";
import { getIconSize as p } from "../utils/size-maps.js";
const z = (t) => {
  const { size: e, dataTestId: r, isDisabled: a } = i(), o = m(`${r}-avatar`);
  return /* @__PURE__ */ s(
    d,
    {
      ...t,
      disabled: a,
      size: p(e),
      dataTestId: o
    }
  );
};
export {
  z as HeaderAvatar
};
//# sourceMappingURL=header-avatar.js.map
