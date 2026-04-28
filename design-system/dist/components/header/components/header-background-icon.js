import { jsx as d } from "react/jsx-runtime";
import { BackgroundIcon as a } from "../../background-icon/next/background-icon.js";
import { useHeader as i } from "../header.provider.js";
import { composeDataTestId as c } from "../utils/compose-data-test-id.js";
import { getIconSize as m } from "../utils/size-maps.js";
const g = (o) => {
  const { size: t, dataTestId: e, isDisabled: r } = i(), s = c(`${e}-background-icon`);
  return /* @__PURE__ */ d(
    a,
    {
      ...o,
      dataTestId: s,
      disabled: r,
      size: m(t)
    }
  );
};
export {
  g as HeaderBackgroundIcon
};
//# sourceMappingURL=header-background-icon.js.map
